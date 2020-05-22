import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import MessagesField from './components/MessageField/MessageField.jsx'

const container = document.getElementById('app');

let user = 'Loontik';

ReactDom.render(
    <div className="d-flex w-100 justify-content-center">
        <MessagesField user={user} />
    </div>,
    container
)

