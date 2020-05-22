import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MessageField from './components/MessageField/MessageField.jsx';

import './layout/style/main.sass';

let user = 'User1';

ReactDom.render(
    <div className= "d-flex w-100 justify-content-center">
        <MessageField user= {user} />
    </div>
, document.getElementById('root')
    );