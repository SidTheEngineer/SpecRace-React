import React, { Component } from 'react'

class ModelButtons extends Component {

    listModels() {
        return(
            <div>
                {
                    this.props.models.map((model) => {
                        return(
                            <div key={model.niceName} className="col-xs-6 col-sm-4 col-md-3">
                                <button value={model.niceName} onClick={this.props.fetchYears}>{model.name}</button>
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