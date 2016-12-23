import React, { Component } from 'react'
import { Link } from 'react-router'

class ModelButton extends Component {

    constructor() {
        super() 

        this.state = {
            active: false,
            bootstrapLayout: "col-xs-6 col-sm-4 col-md-3"
        }
    }

    render() {
        return (
            <div className={this.state.bootstrapLayout}>
                <Link to={`/search/${this.props.params.make}/${this.props.model.niceName}`}>
                    <button
                        className={this.state.active ? "mobileActive" : ""}
                        value={this.props.model.niceName}
                        onClick={this.props.fetchYears}
                        onTouchStart={() => this.setState({ active: true })}
                        onTouchEnd={() => this.setState({ active: false })}
                    >
                        {this.props.model.name}
                    </button>
                </Link>
            </div>
        )
    }
}

export default ModelButton