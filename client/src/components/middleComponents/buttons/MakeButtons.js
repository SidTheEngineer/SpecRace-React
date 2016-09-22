import React, { Component } from 'react'
import { Link } from 'react-router'

class MakeButton extends Component {

    listMakes() {
        return(
            <div>
                {
                    this.props.makes.map((make) => {
                        return(
                            <div key={make.niceName} className="col-xs-6 col-sm-3 col-md-2">
                                <Link to={`/search/${make.niceName}`}>
                                    <button value={make.niceName} onClick={this.props.fetchModels}>{make.name}</button>
                                </Link>
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