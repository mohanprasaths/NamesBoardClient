import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ADDAPP from './reducers/reducers'
import configureStore from './configureStore'

let store = configureStore({Names:{names:[]},ADDR:{red:0},ADDB:{blue:0}})

ReactDOM.render(<Provider store={store}><App></App></Provider>,document.getElementById('app'))
