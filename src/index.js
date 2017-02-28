import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'


const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
