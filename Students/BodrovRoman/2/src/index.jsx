import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/style/main.css'

import ChatField from './components/ChatField/ChatField.jsx'

const container = document.getElementById('app')

ReactDOM.render(
    <div className="d-flex w-100 justify-content-center">
    <ChatField />
    </div>,
    container
);