import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../components/_ReduxStore'

import View1 from '../components/View1'
import View2 from '../components/View2'

const newBrowserHistory = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={newBrowserHistory}>
      <Route path="/" component={View1} />
      <Route path="/view2" component={View2} />
    </Router>
  </Provider>
, document.getElementById('app'))
