import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import Head from '../components/Head'
import Middle from '../components/Middle'
import Foot from '../components/Foot'
import makeActions from '../redux/actions/makeActions'
import modelActions from '../redux/actions/modelActions'
import yearActions from '../redux/actions/yearActions'
import trimActions from '../redux/actions/trimActions'
import { fetchMakes } from '../redux/actions/makeActions'

const makesUrl = 'http://api.edmunds.com/api/vehicle/v2/makes?view=basic&fmt=json&api_key=5h4yrh4c656sjh4dmrbc8rsm'

class App extends Component {

  componentDidMount() {
    this.props.fetchMakes(makesUrl)
  }

  render() {
    return (
      <div className="App">
        <div>
          <Head />
          <div className="middle container">
            <Middle 
              modelActions={this.props.modelActions}
              yearActions={this.props.yearActions}
              trimActions={this.props.trimActions} 
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
function mapStateToProps(state) {
  return state
}

// Binds dispatch to action creators and maps these callable
// actions to props through the connect function.
function mapDispatchToProps(dispatch) {
  return {
    makeActions: bindActionCreators(makeActions, dispatch),
    modelActions: bindActionCreators(modelActions, dispatch),
    yearActions: bindActionCreators(yearActions, dispatch),
    trimActions: bindActionCreators(trimActions, dispatch),
    fetchMakes: bindActionCreators(fetchMakes, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
