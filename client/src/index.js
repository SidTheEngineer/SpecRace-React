import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/App';
import './styles/index.css';
import configureStore from './redux/store'
import Makes from './components/middleComponents/Makes'
import Models from './components/middleComponents/Models'
import Middle from './components/Middle'
import Years from './components/middleComponents/Years'
import Trims from './components/middleComponents/Trims'
import SpecTable from './components/middleComponents/SpecTable'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Middle}>
          {/*
            These are the components that will be rendered in the middle div,
            depending on the route (via this.props.children)
           */}
          <IndexRoute component={Makes} />
          <Route path="/search/:make" component={Models} />
          <Route path="/search/:make/:model" component={Years} />
          <Route path="/search/:make/:model/:year" component={Trims} />
          <Route path="/search/:make/:model/:year/:trimId" component={SpecTable} />
          {/* Add deep linking functionality */}
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
