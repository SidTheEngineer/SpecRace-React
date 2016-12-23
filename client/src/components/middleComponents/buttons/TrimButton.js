import React, { Component } from 'react'
import { Link } from 'react-router'

class TrimButton extends Component {

    constructor() {
        super()

        this.state = {
            bootstrapLayout: "col-xs-12 col-md-6"
        }
    }

    render() {
        return (
            <div className={this.state.bootstrapLayout}>
                <Link to={
                    `/search/`
                    + `${this.props.params.make}/`
                    + `${this.props.params.model}/`
                    + `${this.props.params.year}/`
                    + `${this.props.trim.id}`
                }>
                    <button
                        className={this.state.active ? "mobileActive" : ""}
                        value={this.props.trim.id}
                        onClick={this.props.fetchSpecs}
                        onTouchStart={() => this.setState({ active: true })}
                        onTouchEnd={() => this.setState({ active: false })}
                    >
                        {this.props.trim.name}
                    </button>      
                </Link>
            </div>
        )
    }
}

export default TrimButton