import React from 'react';
import ReactDom from 'react-dom';

export default (props) => {

    let { text } = props;

    return (
        <p>{ text }</p>
    )
};