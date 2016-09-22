import express from 'express'
import axios from 'axios'
import config from '../config'

const app = express()
const PORT = 3001

let apiKey = config.apiKey
let vehicleUrlStart = config.vehicleUrlStart
let makesUrl = vehicleUrlStart + 'makes?view=basic&fmt=json&api_key=' + apiKey

app.get('/', (req, res) => {
    res.send("TESTING")
})

// Retrieve makes from Edmunds.
app.get('/api/makes', (req, res) => {
    axios.get(makesUrl)
        .then((response) => {
            // Send array of makes to client as JSON.
            res.json(response.data.makes)
        })
        .catch((error) => {
            res.send(error)
        })
})

// Retrieve trims from Edmunds based on selected make, model and year.
app.get('/api/:make/:model/:year', (req, res) => {
    let trimsUrl = config.vehicleUrlStart 
        + [req.params.make, req.params.model, req.params.year].join('/')
        + config.trimsUrlEnding
        + config.apiKey

    axios.get(trimsUrl)
        .then((response) => {
            res.send(response.data.styles)
        })
        .catch((error) => {
            res.send(error)
        })
})

app.listen(PORT, () => {
    console.log(
        '------------------------------\n'
        + 'Server listening on port ' + PORT
        + '\n------------------------------'
    )
})