'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _memoryCache = require('memory-cache');

var _memoryCache2 = _interopRequireDefault(_memoryCache);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import config from '../config'  // Path from folder where transpiled.
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3001;
var apiKey = process.env.API_KEY; //config.apiKey
var vehicleUrlStart = process.env.VEHICLE_URL_START; //config.vehicleUrlStart
var makesUrl = vehicleUrlStart + 'makes?view=basic&fmt=json&api_key=' + apiKey;

var MINUTE = 60000; // ms -> minutes
var HOUR = MINUTE * 60; // ms -> minutes -> hours

process.env.PWD = process.cwd();

if (process.env.NODE_ENV === 'production') {
    console.log('serving static files');
    app.use(_express2.default.static(process.env.PWD + '/client/build'));
}

// Retrieve makes from Edmunds.
app.get('/api/makes', function (req, res) {

    var cached = _memoryCache2.default.get('makes');

    if (!cached) {
        _axios2.default.get(makesUrl).then(function (response) {
            _memoryCache2.default.put('makes', response.data.makes, 12 * HOUR);
            res.json(response.data.makes);
        }).catch(function (error) {
            res.send(error);
        });
    } else {
        console.log('Fetching the cahced makes...');
        res.json(cached);
    }
});

// Retrieve trims from Edmunds based on selected make, model, and year.
app.get('/api/:make/:model/:year', function (req, res) {

    var cached = _memoryCache2.default.get(req.params.model);

    if (!cached) {
        var trimsUrl = vehicleUrlStart + [req.params.make, req.params.model, req.params.year].join('/') + process.env.TRIMS_URL_ENDING + apiKey;

        _axios2.default.get(trimsUrl).then(function (response) {

            _memoryCache2.default.put(req.params.model, response.data.styles, 5 * HOUR);

            // Send trims to client as JSON.
            res.json(response.data.styles);
        }).catch(function (error) {
            res.send(error);
        });
    } else {
        console.log('Fetching the cached trims...');
        res.json(cached);
    }
});

// Retrieve specs and equipment via selected trim's ID.
app.get('/api/:trimId', function (req, res) {

    var cached = _memoryCache2.default.get(req.params.trimId);

    if (!cached) {
        var specsUrl = vehicleUrlStart + 'styles/' + req.params.trimId + process.env.SPECS_URL_ENDING + apiKey;

        var equipmentUrl = vehicleUrlStart + 'styles/' + req.params.trimId + process.env.EQUIPMENT_URL_ENDING + apiKey;

        var getSpecs = function getSpecs(specsUrl) {
            return _axios2.default.get(specsUrl);
        };
        var getEquipment = function getEquipment(equipmentUrl) {
            return _axios2.default.get(equipmentUrl);
        };

        _axios2.default.all([getSpecs(specsUrl), getEquipment(equipmentUrl)]).then(_axios2.default.spread(function (specs, equipment) {

            var tempEquipment = void 0;

            // Check if the vehicle has equipment available for it.
            try {
                tempEquipment = equipment.data.equipment[0].attributes;
            } catch (error) {
                tempEquipment = null;
            }

            // Cache the specs and equipment via trim ID.
            _memoryCache2.default.put(req.params.trimId, {
                specs: specs.data,
                equipment: tempEquipment
            }, 5 * HOUR);

            res.send({
                specs: specs.data,
                equipment: tempEquipment
            });
        })).catch(function (error) {
            res.send(error);
        });
    } else {
        console.log('Fetching the cached specs...');
        res.send(cached);
    }
});

// Use JS for all 'other' routes (production).
app.get('*', function (req, res) {
    res.sendFile('/app/client/build/index.html');
});

app.listen(PORT, function () {
    console.log('------------------------------\n' + 'All systems are a GO on port ' + PORT + '\n------------------------------');
});