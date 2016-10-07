import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../styles/App.css'
import Head from '../components/Head'
import Foot from '../components/Foot'
import LoadingSpinner from '../components/middleComponents/LoadingSpinner'
import * as fetchActions from '../redux/actions/fetchActions'

// Backend URL.
const apiMakesUrl = '/api/makes'

class App extends Component {

  componentWillMount() {
    // Fetch makes from the backend.
    this.props.fetchActions.fetchMakes(apiMakesUrl)
  }

  render() {
    if(!this.props.page.loading) {
      return (
        <div className="App">
          <div>
            <Head />
              <div className="middle container">
                {React.cloneElement(this.props.children, {
                  page: this.props.page,
                  makes: this.props.makes,
                  models: this.props.models,
                  years: this.props.years,
                  trims: this.props.trims,
                  specs: this.props.specs,
                  fetchActions: this.props.fetchActions
                })}
              </div>
            <Foot />
          </div>
        </div>
      )
    }
    else {
      return(
        <div>
          <Head />
            <div className="middle container">
              <LoadingSpinner />
            </div>
          <Foot />
        </div>
      )
    }

  }
}

// Use this in the connect function to hook up state
// as props on the desired component.
let mapStateToProps = state => state

// Binds dispatch to action creators and maps these callable
// actions to props through the connect function.
let mapDispatchToProps = (dispatch) => {
  return {
    fetchActions: bindActionCreators(fetchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
