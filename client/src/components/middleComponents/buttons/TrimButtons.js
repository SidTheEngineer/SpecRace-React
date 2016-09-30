import React, { Component } from 'react'
import { Link } from 'react-router'

class TrimButtons extends Component {

    listTrims() {
        console.log(this.props)
        return(
            <div>
                {
                    this.props.trims.map((trim) => {
                        return(
                            <div key={trim.name} className="col-xs-12 col-md-6">
                                <Link to={`/search/${this.props.params.make}/${this.props.params.model}/${this.props.params.year}/${trim.id}`}>
                                    <button value={trim.id} onClick={this.props.fetchSpecs}>{trim.name}</button>      
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )

    }

    render() {
        return this.listTrims()
    }
}

export default TrimButtons