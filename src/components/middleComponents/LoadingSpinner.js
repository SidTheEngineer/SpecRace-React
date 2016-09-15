import React, { Component } from 'react'
import '../../styles/LoadingSpinner.css'

class LoadingSpinner extends Component {
    render() {
        return(
            <div className="loadingDiv">
                <div className="loader">
                </div>
            </div>
        )
    }
}

export default LoadingSpinner