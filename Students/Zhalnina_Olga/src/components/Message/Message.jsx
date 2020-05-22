import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default (props) => {    
    let { sender, text } = props;

    // sender = sender ? sender : 'Bot';
    //dopil
    return (
        <div className="d-flex flex-column msg">
            {/* <strong>{ sender }</strong> */}
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong className="bot">Bot</strong> }
            <p>{ text }</p>
        </div>
    )
}