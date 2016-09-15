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
import MakeButtons from './components/middleComponents/buttons/MakeButtons'
import ModelButtons from './components/middleComponents/buttons/ModelButtons'
import YearButtons from './components/middleComponents/buttons/YearButtons'
import TrimButtons from './components/middleComponents/buttons/TrimButtons'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Middle}>
          <IndexRoute component={Makes} />
          <Route path="/:make" component={Models} />
          <Route path="/:make/:model" component={Years} />
          <Route path="/:make/:model/:year" component={Trims} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
