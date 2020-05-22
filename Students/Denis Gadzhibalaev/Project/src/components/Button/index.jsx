import React from 'react';
import ReactDom from 'react-dom';
import './style.sass';

export default function Button(props) {
    return (
        <button className= "ml-3" onClick = {props.addInputText}>Send</button>
    )
}