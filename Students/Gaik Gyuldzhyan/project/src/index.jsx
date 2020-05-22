import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css'

import MessageField from './components/MessageField/MessageField.jsx'

let container = document.getElementById('app')

let user = "Loonatik"

ReactDom.render(
    <div>
        <MessageField user= { user }/>
    </div>,
    container
)




// HOMEWORK LESSON 1

// let messages = ['Привет', 'Как дела?']

// const handleClick = () => {
//     messages.push('Нормально');

//     ReactDom.render(
//         <div><MessageField messages={ messages }/></div>,
//         container
//     )
// }

// const Message = props => <div>{ props.text }</div>

// const MessageField = props => {
//     let msgArr = props.messages.map(text => {
//         return (<Message text={ text }/>);
//     });
//     return (
//         <div>
//             <div>{ msgArr }</div>
//             <button onClick={ handleClick}>Send</button>
//         </div>
//     )
// }

// ReactDom.render(
//     <MessageField messages={ messages }/>
//     , container);

