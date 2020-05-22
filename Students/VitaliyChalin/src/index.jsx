import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import MessagesField from './components/MessageField/MessageField.jsx';

let container = document.getElementById('app');

let user = 'Loontik';

ReactDom.render(
    <MessagesField user={ user } />,
    container
);

/* let messages = ['Привет', 'Как дела?'];

ReactDom.render(
    <MessageField messages={ messages } />,
    document.getElementById('app'),
);

let textArea = document.querySelector('textarea');
let btnSubmit = document.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(textArea.value.length > 0) {
        messages.push(textArea.value);
        textArea.value = '';

        ReactDom.render(
            <MessageField messages={ messages } />,
            document.getElementById('app'),
        );
    }
}); */
