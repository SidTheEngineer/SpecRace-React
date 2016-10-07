import React, { Component } from 'react'

class Spec extends Component {
    render() {
        return(
            <div>
                <h3 className="specName col-xs-6">{this.props.name}: </h3>
                <h3 className="spec col-xs-6">{this.props.spec}</h3>
            </div>
        )
    }
}

export default Spec