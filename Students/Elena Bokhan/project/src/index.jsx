import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css'
import MessageField from './components/MessageField/MessageField.jsx'

let container = document.getElementById('app');
let user = 'Loontik';

ReactDom.render(
    <div className="d-flex w-80 justify-content-center">
        <MessageField user={ user } />
    </div>
	,
	container
)