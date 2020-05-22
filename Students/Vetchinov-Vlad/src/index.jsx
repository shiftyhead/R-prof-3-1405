import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

//import TestComp from './components/TestComponent/index.jsx';

let container = document.getElementById('app');

let messages = ['Привет', 'Как дела?'];

const handleClick = () => {
    messages.push('Нормально');
    
    ReactDom.render(
        <MessageField messages = { messages } />
        , container);
}

const Message = props => <div>{ props.text }</div>;

let MessageField = props => {
    let msgArr = props.messages.map(text => {
        return (<Message text={ text } />);
    });
    return (<div>
                <div>{ msgArr }</div>
                <button onClick={ handleClick }>Добавить</button>
            </div>
    );
}

ReactDom.render(
    <MessageField messages = { messages } />
    , container);
