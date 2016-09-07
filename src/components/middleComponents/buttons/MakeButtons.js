import React, { Component } from 'react'

class MakeButton extends Component {

    listMakes() {
        return(
            <div>
                {
                    this.props.makes.map((make) => {
                        return(
                            <div key={make.niceName} className="col-xs-6 col-sm-3 col-md-2">
                                <button value={make.niceName} onClick={this.props.fetchModels}>{make.name}</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        return this.listMakes()
    }
}

export default MakeButton