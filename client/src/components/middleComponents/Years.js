import React, { Component } from 'react'
import ButtonGrid from './ButtonGrid'
import YearButtons from './buttons/YearButtons'

class Years extends Component {

    constructor(props) {
        super(props)

        this.fetchTrims = this.fetchTrims.bind(this)

        console.log(this.props)

        // If a deep link occurred, fetch the models and years
        // via the params that were used in the URL.
        if(
            !this.props.years.received
            && this.props.makes.received // Makes need to load before
        ) {
            this.props.fetchActions.fetchModels(this.props.params.make)
            this.props.fetchActions.fetchYears(this.props.params.model)
        }
    }

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
                    fetchTrims={this.fetchTrims}
                />
            </ButtonGrid>
        )
    }
}

export default Years