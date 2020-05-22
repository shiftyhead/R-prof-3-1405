import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import MessageField from './components/MessageField/index.jsx';

let mainContainer = document.getElementById('app');
let user = 'Vader';

ReactDOM.render(
    <div className="d-flex w-100 justify-content-center">
        <MessageField user={ user } />
    </div>
    , mainContainer
);