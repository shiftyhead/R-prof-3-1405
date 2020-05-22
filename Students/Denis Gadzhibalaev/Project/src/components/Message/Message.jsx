import React from 'react';
import ReactDom from 'react-dom';

import './style.sass';

export default (props) => {
    let {user, text} = props;
    return (
        <div className= "message_container d-flex flex-column msg">
            {user && <strong>{ user }</strong>}
            {!user && <strong>Bot</strong>}
            <p>{ user || (!user && text) ? text : 'cyber answer...' }</p>
        </div>
    )
}