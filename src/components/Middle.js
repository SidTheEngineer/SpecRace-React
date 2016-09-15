import React, { Component } from 'react'
import Makes from './Makes'
import Models from './Models'
import Years from './Years'
import Trims from './Trims'
import LoadingSpinner from './middleComponents/LoadingSpinner'

class Middle extends Component {
    render() {

        return(
            <div>
                {React.cloneElement(this.props.children, {
                    page: this.props.page,
                    makes: this.props.makes,
                    models: this.props.models,
                    years: this.props.years,
                    trims: this.props.trims,
                    fetchActions: this.props.fetchActions             
                })}
            </div>
        )
    }
}

export default Middle