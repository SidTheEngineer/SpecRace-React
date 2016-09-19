import React, { Component } from 'react'
import ButtonGrid from './middleComponents/ButtonGrid'
import ModelButtons from './middleComponents/buttons/ModelButtons'

class Models extends Component {

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