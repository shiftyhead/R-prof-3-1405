//container
import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { user } = this.props;

        let messages = [
            {
                user: user,
                text: 'Hi'
            }
        ];

        let msgArr = messages.map(msg => {
            return (<Message text={ msg.text } sender={ msg.user } />);
        });

        return (<div>
                    { msgArr }

                </div>)
    }
}