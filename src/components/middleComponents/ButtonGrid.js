import React, { Component } from 'react'

class ButtonGrid extends Component {
    render() {
        return(
            <div className="buttonGrid row">
                {
                    this.props.children
                }
            </div>
        )
    }

}

export default ButtonGrid