import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app/app'
import './app/components/css/style.css'
ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ,
    document.getElementById('app')
)