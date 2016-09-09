import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import Head from '../components/Head'
import Middle from '../components/Middle'
import Foot from '../components/Foot'
import * as fetchActions from '../redux/actions/fetchActions'
import config from '!json!../../config'

const makesUrl = config.vehicleUrlStart + 'makes?view=basic&fmt=json&api_key=' + config.apiKey

class App extends Component {

  componentDidMount() {
    this.props.fetchActions.fetchMakes(makesUrl)
  }

  render() {
    return (
      <div className="App">
        <div>
          <Head />
          <div className="middle container">
            <Middle 
              fetchActions={this.props.fetchActions}
              makes={this.props.makes} 
              models={this.props.models}
              years={this.props.years}
              trims={this.props.trims} 
              page={this.props.page}     
            />
          </div>
          <Foot />
        </div>
      </div>
    );
  }
}

// Use this in the connect function to hook up state
// as props on the desired component.
let mapStateToProps = state => state

// Binds dispatch to action creators and maps these callable
// actions to props through the connect function.
function mapDispatchToProps(dispatch) {
  return {
    fetchActions: bindActionCreators(fetchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
