import React, { Component } from 'react'
import ButtonGrid from './middleComponents/ButtonGrid'
import TrimButtons from './middleComponents/buttons/TrimButtons'

class Trims extends Component {

    fetchSpecs(event) {
        let trimId = event.target.value   
        let specsUrl = '/api/' + trimId
        this.props.fetchActions.fetchSpecs(specsUrl)
    }

    render() {
        return(
            <ButtonGrid>
                <TrimButtons
                    trims={this.props.trims.trims}
                    fetchSpecs={this.fetchSpecs.bind(this)}
                />   
            </ButtonGrid>
        )
    }
}

export default Trims