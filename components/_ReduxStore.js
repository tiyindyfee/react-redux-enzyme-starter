import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function sharedStateReducer (state = {sharedMessage: ''}, action) {
  var newState = Object.assign({}, state)

  switch (action.type) {
    case 'MESSAGE':
      newState.sharedMessage = action.message
      break
  }

  return newState
}

const store = createStore(
  combineReducers({
    sharedState: sharedStateReducer,
    routing: routerReducer
  })
)

export default store
