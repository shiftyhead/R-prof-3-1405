import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

export default (props) => {
    let { sender, text } = props;

    // sender = sender ? sender : 'Bot';

    return (
        <div>
           { sender && <strong>{ sender }</strong> } 
           { !sender && <strong>Bot</strong> }
            <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer' }</p>
        </div>
    )
}