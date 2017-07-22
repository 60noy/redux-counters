/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }]*/

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counter'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import './index.css'

const store = createStore(counterReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'))
registerServiceWorker()

store.subscribe(() => {
  console.log(store.getState())
})
