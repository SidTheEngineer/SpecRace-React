import React, { Component } from 'react'

class TrimButtons extends Component {

    listTrims() {
        return(
            <div>
                {
                    this.props.trims.map((trim) => {
                        return(
                            <div key={trim.name} className="col-xs-12 col-md-6">
                                <button value={trim.id} onClick={this.props.chooseTrim}>{trim.name}</button>
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