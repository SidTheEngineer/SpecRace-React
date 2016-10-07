import React, { Component } from 'react'

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
                    specs: this.props.specs,
                    fetchActions: this.props.fetchActions             
                })}
            </div>
        )
    }
}

export default Middle