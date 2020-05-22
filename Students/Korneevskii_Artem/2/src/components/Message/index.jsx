import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let Message = (props) => {

    let { sender, text } = props;

    return (
        <div className="d-flex flex-column message-wrap">
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong> }
            <p>{ props.sender || (!props.sender && text) ? text : 'ага...' }</p>
        </div>
    );
};

export default Message;