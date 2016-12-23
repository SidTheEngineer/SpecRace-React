import React, { Component } from 'react'
import ButtonGrid from './ButtonGrid'
import ModelButton from './buttons/ModelButton'

class Models extends Component {

    constructor(props) {
        super(props)

        this.fetchYears = this.fetchYears.bind(this)

        // Logic for deep linking here: if the onClick of the button didn't fire
        // then the models were not fetched, and thus a refresh or deep link happened.
        if(!this.props.models.received && this.props.makes.received) {
            this.props.fetchActions.fetchModels(this.props.params.make)
        }
    }

    fetchYears(event) {
        this.props.fetchActions.fetchYears(event.target.value)
    }

    render() {
        return(
            <ButtonGrid>
                {
                    this.props.models.models.map((model) => {
                        return <ModelButton
                                    params={this.props.params} 
                                    key={model.name} 
                                    model={model} 
                                    fetchYears={this.fetchYears} 
                                />
                    })
                }
            </ButtonGrid>
        )
    }
}

export default Models
