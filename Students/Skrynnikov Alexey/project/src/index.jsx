import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import MessagesField from './components/MessagesField/MessagesField.jsx';

let container = document.getElementById('app');

let user = 'Loontik';

ReactDom.render(
    <div className="d-flex w-100 justify-content-center">
        <MessagesField user={ user } />
    </div>
    ,
    container
);




// let arr = ['Привет', 'Как дела?'];
// let button = document.getElementById('button');
// button.addEventListener('click', () => {
//     arr.push('Нормально');
//     ReactDom.render(
//         <Message arr = { arr } />
//     , container)
// })
// ReactDom.render(
//         <Message arr = { arr } />
//     , container);
