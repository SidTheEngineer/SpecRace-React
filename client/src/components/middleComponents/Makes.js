import React, { Component } from 'react'
import ButtonGrid from './ButtonGrid'
import MakeButtons from './buttons/MakeButtons'

class Makes extends Component {

    constructor() {
        super()

        this.fetchModels = this.fetchModels.bind(this)
    }

    fetchModels(event) {
        this.props.fetchActions.fetchModels(event.target.value)
    }

    render() {
        return(
            <ButtonGrid>
                <MakeButtons makes={this.props.makes.makes} fetchModels={this.fetchModels}/>
            </ButtonGrid>
        )
    }
}

export default Makes