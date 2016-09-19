import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/App';
import './styles/index.css';
import configureStore from './redux/store'
import Makes from './components/Makes'
import Models from './components/Models'
import Middle from './components/Middle'
import Years from './components/Years'
import Trims from './components/Trims'
import SpecTable from './components/SpecTable'


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
          <Route path="/:make" component={Models} />
          <Route path="/:make/:model" component={Years} />
          <Route path="/:make/:model/:year" component={Trims} />
          <Route path="/:make/:model/:year/specs" component={SpecTable} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
