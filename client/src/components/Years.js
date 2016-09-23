import React, { Component } from 'react'
import ButtonGrid from './middleComponents/ButtonGrid'
import YearButtons from './middleComponents/buttons/YearButtons'

class Years extends Component {

    fetchTrims(event) {
        let make = this.props.models.selectedMake,
            model = this.props.years.selectedModel,
            selectedYear = event.target.value,
            trimUrl = '/api/' + [make, model, selectedYear].join('/')
            console.log(trimUrl)

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