import React, { Component } from 'react'

class Head extends Component {
  render() {
    return(
      <div className="head">
        <div className="logo">
          <a href="/"><em id="spec">Spec</em> <em id="race">Race</em></a>
        </div>
      </div>
    )
  }
}

export default Head