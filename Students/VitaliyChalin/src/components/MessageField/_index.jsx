import React from 'react';
import ReactDom from 'react-dom';

import MessageComp from '../MessageComponent/index.jsx';
import MessageForm from '../MessageForm/index.jsx';

let messageField = (props) => {

    let messArr = props.messages.map((message, index) => {
        return (
            <div key={ index }><MessageComp text={ message } /></div>
        )
    });

    return (
        <div>
            { messArr }
            <MessageForm messages={ messArr } />
        </div>
    );
    
}

export default messageField;