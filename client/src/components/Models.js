import React, { Component } from 'react'
import ButtonGrid from './middleComponents/ButtonGrid'
import ModelButtons from './middleComponents/buttons/ModelButtons'

class Models extends Component {

    componentWillMount() {
        // Logic for deep linking here: if the onClick of the button didn't fire
        // then the models were not fetched, and thus a refresh or deep link happened.
        if(!this.props.models.models.length && this.props.makes.makes.length) {
            this.props.fetchActions.fetchModels(this.props.params.make)
        }
    }

    fetchYears(event) {
        this.props.fetchActions.fetchYears(event.target.value)
    }

    render() {
        return(
            <ButtonGrid>
                <ModelButtons
                    params={this.props.params} 
                    models={this.props.models.models} 
                    fetchYears={this.fetchYears.bind(this)} 
                />
            </ButtonGrid>
        )
    }
}

export default Models