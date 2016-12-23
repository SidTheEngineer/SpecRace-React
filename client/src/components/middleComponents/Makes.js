import React, { Component } from 'react'
import ButtonGrid from './ButtonGrid'
import MakeButton from './buttons/MakeButton'

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
                {
                    this.props.makes.makes.map((make) => {
                        return <MakeButton make={make} key={make.name} fetchModels={this.fetchModels} />
                    })
                }
            </ButtonGrid>
        )
    }
}

export default Makes