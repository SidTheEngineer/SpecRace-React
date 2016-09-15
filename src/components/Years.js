import React, { Component } from 'react'
import ButtonGrid from './middleComponents/ButtonGrid'
import YearButtons from './middleComponents/buttons/YearButtons'
import config from '!json!../../config'

class Years extends Component {

    fetchTrims(event) {
        let make = this.props.models.selectedMake,
            model = this.props.years.selectedModel,
            selectedYear = event.target.value,
            trimUrl = config.vehicleUrlStart
                        + [make, model, selectedYear].join('/')
                        + config.trimUrlEnding
                        + config.apiKey

        this.props.fetchActions.fetchTrims(trimUrl)

    }

    render() {
        return(
            <ButtonGrid>
                <YearButtons
                    params={this.props.params}
                    years={this.props.years.years} 
                    fetchTrims={this.fetchTrims.bind(this)}
                />
            </ButtonGrid>
        )
    }
}

export default Years