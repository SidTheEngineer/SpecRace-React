import React, { Component } from 'react'
import { Link } from 'react-router'

class ModelButtons extends Component {

    listModels() {
        return(
            <div>
                {
                    this.props.models.map((model) => {
                        return(
                            <div key={model.niceName} className="col-xs-6 col-sm-4 col-md-3">
                                <Link to={`/search/${this.props.params.make}/${model.niceName}`}>
                                    <button value={model.niceName} onClick={this.props.fetchYears}>{model.name}</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )

    }

    render() {
        return this.listModels()
    }
}

export default ModelButtons