import React, { Component } from 'react'
import Spec from './Spec'
import * as helpers from '../helpers/specs.js'

class SpecTable extends Component {

    initSpecs() {

        return(
            <div>
                <Spec name={helpers.specs.engine} spec={helpers.setEngineName(this.props.specs)} />
                <Spec name={helpers.specs.horsepower} spec={helpers.setHorsepowerAndTorque(this.props.specs)[0]} />
                <Spec name={helpers.specs.torque} spec={helpers.setHorsepowerAndTorque(this.props.specs)[1]} />
                <Spec name={helpers.specs.zeroToSixty} spec={helpers.setWeightAndZeroToSixty(this.props.specs.equipment)[1]} />
                <Spec name={helpers.specs.weight} spec={helpers.setWeightAndZeroToSixty(this.props.specs.equipment)[0]} />
                <Spec name={helpers.specs.drivetrain} spec={helpers.setDrivetrain(this.props.specs)} />
                <Spec name={helpers.specs.transmission} spec={helpers.setTransmission(this.props.specs)} />
                <Spec name={helpers.specs.fuelEco} spec={helpers.setMpg(this.props.specs)} />
                <Spec name={helpers.specs.msrp} spec={helpers.setMsrp(this.props.specs)} />
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