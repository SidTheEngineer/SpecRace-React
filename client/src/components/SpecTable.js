import React, { Component } from 'react'
import Spec from './Spec'
import * as helpers from '../helpers/specs.js'

class SpecTable extends Component {

    initSpecs() {

        // Put this elsewhere
        let specs = {
            engine: 'Engine',
            horsepower: 'Horsepower',
            torque: 'Torque',
            zeroToSixty: '0-60',
            transmission: 'Transmission',  
            weight: 'Curb Weight',
            drivetrain: 'Drivetrain',
            fuelEco: 'Fuel Economy (MPG)',  // Not done
            msrp: 'MSRP',                   // Not done
        }

        return(
            <div>
                <Spec name={specs.engine} spec={helpers.setEngineName(this.props.specs)} />
                <Spec name={specs.horsepower} spec={helpers.setHorsepowerAndTorque(this.props.specs)[0]} />
                <Spec name={specs.torque} spec={helpers.setHorsepowerAndTorque(this.props.specs)[1]} />
                <Spec name={specs.zeroToSixty} spec={helpers.setWeightAndZeroToSixty(this.props.specs.equipment)[1]} />
                <Spec name={specs.weight} spec={helpers.setWeightAndZeroToSixty(this.props.specs.equipment)[0]} />
                <Spec name={specs.drivetrain} spec={helpers.setDrivetrain(this.props.specs)} />
                <Spec name={specs.transmission} spec={helpers.setTransmission(this.props.specs)} />
            </div>
        )
    }

    render() {
        return(
            <div className="specGrid row">
                <div className="specTable col-xs-12">
                    <div className="specList">
						{
                            this.initSpecs()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SpecTable