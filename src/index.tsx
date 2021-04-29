import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import { makeStore } from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename='synergy-way-test'>
    <Provider store={makeStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
