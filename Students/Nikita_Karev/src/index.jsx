import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import MessagesField from './components/MessageField/MessageField.jsx';

let container = document.getElementById('app');

let user = 'DefaultUser';

ReactDom.render(
    <div className="d-flex justify-content-center w-100">
        <MessagesField user={ user }/>    
    </div>
    ,
    container);

// let messages = ['Hello user!', 'How old are you?', 'I am 25 years old'];

// const handleClick = () => {
//     messages.push('Ok');
//     ReactDom.render(
//         <div><MessageField messages={ messages }/></div>,
//         container
//     ); 
// }

// const Message = props => <div>{ props.text }</div>

// const MessageField = props => {

//     let msgArr = props.messages.map(text => {
//         return (<Message text={ text } />);
//     });

//     return (
//         <div>
//             <div>{ msgArr }</div>
//             <button onClick={ handleClick }>Send</button>
//         </div>
//         );
// }

// ReactDom.render(
//     <MessageField messages={ messages }/>
//     , container);

