import React, { Component } from 'react'
import { Link } from 'react-router'

class YearButton extends Component {

    constructor() {
        super()

        this.state = {
            active: false,
            bootstrapLayout: "col-xs-4 col-sm-3 col-md-2"
        }
    }

    render() {
        return (
            <div className={this.state.bootstrapLayout}>
                <Link to={
                    `/search/`
                    + `${this.props.params.make}/`
                    + `${this.props.params.model}/`
                    + `${this.props.year.year}`
                }>
                    <button
                        className={this.state.active ? "mobileActive" : ""}
                        value={this.props.year.year} 
                        onClick={this.props.fetchTrims}
                        onTouchStart={() => this.setState({ active: true })}
                        onTouchEnd={() => this.setState({ active: false })}
                    >
                        {this.props.year.year}
                    </button>
                </Link>
            </div>
        )
    }

}

export default YearButton