import React, { Component } from 'react'
import { Link } from 'react-router'

class MakeButton extends Component {

    constructor() {
        super()

        this.state = {
            active: false,
            bootstrapLayout: "col-xs-6 col-sm-3 col-md-2"
        }
    }

    render() {
        return (
            <div className={this.state.bootstrapLayout}>
                <Link to={`/search/${this.props.make.niceName}`}>
                    <button
                        className={this.state.active ? "mobileActive" : ""}
                        value={this.props.make.niceName}
                        onClick={this.props.fetchModels}
                        onTouchStart={() => this.setState({ active: true })}
                        onTouchEnd={() => this.setState({ active: false })}
                    >
                        {this.props.make.name}
                    </button>
                </Link>
            </div>
        )
    }
}

export default MakeButton