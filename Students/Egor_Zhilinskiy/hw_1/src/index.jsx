import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import './layout/style/main.css';


const messages = [
    { name: "Ivan", content: "Hello, Petr!" },
    { name: "Petr", content: "Hello, how are you?" },
    
];
const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
}

const handleClick = () => {
    messages.push({ name: "Ivan", content: "I'm well" })
    ReactDom.render(<MessageList messages={messages}/>, container)
    
};

const MessageList = ({ messages }) => {  
    
    return (
        <div>
            <ul>
                {messages.map((item, index) => <Message {...item} key={index} />)}
            </ul>
            <button onClick = {handleClick} >Press me</button>
        </div>
    );
}


let container = document.getElementById('app');
ReactDom.render(<MessageList messages={messages}/>, container)

