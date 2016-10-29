import express from 'express'
import axios from 'axios'
import config from '../config' // Path from folder where transpiled.
import * as server from './helpers/server'

const app = express()
const PORT = 3001
const apiKey = config.apiKey
const vehicleUrlStart = config.vehicleUrlStart
const makesUrl = vehicleUrlStart + 'makes?view=basic&fmt=json&api_key=' + apiKey

app.get('/test', (req, res) => {
    res.send("TESTING")
})

// Retrieve makes from Edmunds.
app.get('/api/makes', (req, res) => {
    axios.get(makesUrl)
        .then((response) => {
            res.json(response.data.makes)
        })
        .catch((error) => {
            res.send(error)
        })
})

// Retrieve trims from Edmunds based on selected make, model, and year.
app.get('/api/:make/:model/:year', (req, res) => {
    let trimsUrl = config.vehicleUrlStart 
        + [req.params.make, req.params.model, req.params.year].join('/')
        + config.trimsUrlEnding
        + config.apiKey

    axios.get(trimsUrl)
        .then((response) => {
            // Send trims to client as JSON.
            res.json(response.data.styles)
        })
        .catch((error) => {
            res.send(error)
        })
})

// Retrieve specs and equipment via selected trim's ID.
app.get('/api/:trimId', (req, res) => {
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

            res.send({
                specs: specs.data,
                equipment: tempEquipment
            })
        }))
        .catch((error) => {
            res.send(error)
        })
    
})

app.listen(PORT, () => {
    console.log(
        '------------------------------\n'
        + 'All systems are a GO on port ' + PORT
        + '\n------------------------------'
    )
})