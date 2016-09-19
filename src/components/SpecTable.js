import React, { Component } from 'react'
import Spec from './Spec'

class Specs extends Component {
    render() {
        return(
            <div className="specGrid row">
                <div className="specTable col-xs-12">
                    <div className="specList">
						<Spec />
                    </div>
                </div>
            </div>
        )
    }
}

export default Specs