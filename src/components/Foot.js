import React, { Component } from 'react'
import edmundslogo from '../edmundslogo.png'

class Foot extends Component {
  render() {
    return(
      <div className="foot">
        <div id="edmundsLogo">
          <img src={edmundslogo} alt="Powered by Edmunds" />
        </div>
      </div>
    )
  }
}

export default Foot