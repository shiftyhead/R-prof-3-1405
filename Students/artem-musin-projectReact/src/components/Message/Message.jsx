import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './style.css';

export default (props) => {

    let { sender, text } = props;

    // sender = sender ? sender : 'Bot';

    return (
        <div className="d-flex flex-column msg">
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong>}
            <p>{ props.sender || (!props.sender && text) ? text : 'Cyber answer' }</p>
        </div>
    )
}