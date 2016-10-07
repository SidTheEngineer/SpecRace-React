import React, { Component } from 'react'
import Spec from './Spec'
import * as helpers from '../helpers.js'

class Specs extends Component {

    listSpecs() {

        let specs = {
            engine: {
                name: 'Engine',
                spec: helpers.setEngineName(this.props.specs)
            },
            horsepower: {
                name: 'Horsepower',
                spec: helpers.setHorsepowerAndTorque(this.props.specs)[0]
            },
            torque: {
                name: 'Torque',
                spec: helpers.setHorsepowerAndTorque(this.props.specs)[1]
            },
            zeroToSixty: {
                name: '0-60',
                spec: ''
            },
            transmission: {
                name: 'Transmission',
                spec: ''
            },  
            weight: {
                name: 'Weight',
                spec: ''
            },
            drivetrain: {
                name: 'Drivetrain',
                spec: ''
            },
            fuelEco: {
                name: 'Fuel Economy (MPG)',
                spec: ''
            },
            msrp: {
                name: 'MSRP',
                spec: ''
            },
        }

        return(
            <div>
                <Spec name={specs.engine.name} spec={specs.engine.spec} />
                <Spec name={specs.horsepower.name} spec={specs.horsepower.spec} />
                <Spec name={specs.torque.name} spec={specs.torque.spec} />
            </div>
        )
    }

    render() {
        return(
            <div className="specGrid row">
                <div className="specTable col-xs-12">
                    <div className="specList">
						{
                            this.listSpecs()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Specs