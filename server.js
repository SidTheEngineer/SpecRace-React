import express from 'express'
import axios from 'axios'
import config from '../config'  // Path from folder where transpiled.
import cache from 'memory-cache'

const app = express()
const PORT = process.env.PORT || 3001
const apiKey = config.apiKey
const vehicleUrlStart = config.vehicleUrlStart
const makesUrl = vehicleUrlStart + 'makes?view=basic&fmt=json&api_key=' + apiKey

const MINUTE = 60000            // ms -> minutes
const HOUR = MINUTE * 60        // ms -> minutes -> hours

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Retrieve makes from Edmunds.
app.get('/api/makes', (req, res) => {

    let cached = cache.get('makes')

    if(!cached) {
        axios.get(makesUrl)
            .then((response) => {
                cache.put('makes', response.data.makes, 12 * HOUR)
                res.json(response.data.makes)
            })
            .catch((error) => {
                res.send(error)
            })
    }
    else {
        console.log('Fetching the cahced makes...')
        res.json(cached)
    }


})

// Retrieve trims from Edmunds based on selected make, model, and year.
app.get('/api/:make/:model/:year', (req, res) => {

    let cached = cache.get(req.params.year)

    if(!cached) {
        let trimsUrl = config.vehicleUrlStart
            + [req.params.make, req.params.model, req.params.year].join('/')
            + config.trimsUrlEnding
            + config.apiKey

        axios.get(trimsUrl)
            .then((response) => {

                cache.put(req.params.year, response.data.styles, 5 * HOUR)

                // Send trims to client as JSON.
                res.json(response.data.styles)
            })
            .catch((error) => {
                res.send(error)
            })
    }
    else {
        console.log('Fetching the cached trims...')
        res.json(cached)
    }

})

// Retrieve specs and equipment via selected trim's ID.
app.get('/api/:trimId', (req, res) => {

    let cached = cache.get(req.params.trimId)

    if(!cached) {
        let specsUrl = config.vehicleUrlStart
            + 'styles/'
            + req.params.trimId
            + config.specsUrlEnding
            + config.apiKey

        let equipmentUrl = config.vehicleUrlStart
            + 'styles/'
            + req.params.trimId
            + config.equipmentUrlEnding
            + config.apiKey

        let getSpecs = (specsUrl) => axios.get(specsUrl)
        let getEquipment = (equipmentUrl) => axios.get(equipmentUrl)

        axios.all([getSpecs(specsUrl), getEquipment(equipmentUrl)])
            .then(axios.spread((specs, equipment) => {

                let tempEquipment

                // Check if the vehicle has equipment available for it.
                try {
                    tempEquipment = equipment.data.equipment[0].attributes
                }
                catch(error) {
                    tempEquipment = null
                }

                // Cache the specs and equipment via trim ID.
                cache.put(req.params.trimId, {
                    specs: specs.data,
                    equipment: tempEquipment
                }, 5 * HOUR)

                res.send({
                    specs: specs.data,
                    equipment: tempEquipment
                })
            }))
            .catch((error) => {
                res.send(error)
            })
    }
    else {
        console.log('Fetching the cached specs...')
        res.send(cached)
    }
    
})

app.listen(PORT, () => {
    console.log(
        '------------------------------\n'
        + 'All systems are a GO on port ' + PORT
        + '\n------------------------------'
    )
})