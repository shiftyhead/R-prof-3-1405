// container
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: [
                {
                    user: 'Default User',
                    text: 'Hello Bot!' 
                },
                {
                    user: null,
                    text: 'Hi!'
                },
                {
                    user: 'Default User',
                    text: 'How are you?' 
                },
                {
                    user: null,
                    text: 'I am fine!'
                }
            ]
        };
    }

    handleSend = (evt) => {
        this.setState({ 
            text: '',
            messages: [...this.state.messages, {
                user: this.props.user,
                text: this.state.text
            }]
         });
    }

    handleChange = (evt) => {
        evt.keyCode !== 13 ?
            this.setState({ text: evt.target.value }) :
            this.handleSend(evt);
    }

    componentDidUpdate() {
        let messages_ = this.state.messages
        if (messages_.length % 2 === 1) {
            setTimeout (() => {
                this.setState ({
                    messages: [...this.state.messages, {
                        user: 'Bot',
                        text: 'Auto-answer'}]
                });
            }, 1000)
        }
    }

    render() {
        let { user } = this.props;
        let { messages } = this.state;

        let msgArr = messages.map(msg => {
            return (<Message text={ msg.text } sender={ msg.user }/>);
        });

        return (
            <div className="d-flex flex-column w-50">
                <div>
                    { msgArr }
                </div>
                <div className="d-flex justify-content-center controls w-100">
                    <input 
                        type="text"
                        className="w-50"
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleChange }
                        value={ this.state.text }
                    />
                    <button className="ml-3" onClick={ this.handleSend }>Send</button>
                </div>
            </div>
        );
    } 
}