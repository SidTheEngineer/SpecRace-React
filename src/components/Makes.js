import React, { Component } from 'react'
import ButtonGrid from './middleComponents/ButtonGrid'
import MakeButtons from './middleComponents/buttons/MakeButtons'

class Makes extends Component {

    fetchModels(event) {
        this.props.fetchActions.fetchModels(event.target.value)
    }

    render() {
        return(
            <ButtonGrid>
                <MakeButtons makes={this.props.makes.makes} fetchModels={this.fetchModels.bind(this)}/>
            </ButtonGrid>
        )
    }
}

export default Makes