//container
import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            messages: [
                {
                    user: 'Loontik',
                    text: 'Hi'
                },
                {
                    user: null,
                    text: 'Hello'
                },
            ]
        }
    }

    AddBotMessage = () => {
        console.log('hi');
        this.setState({
            text: '',
            messages: [...this.state.messages, { 
                user: null, 
                text: 'Kill all humans!!!',
                botmark: true
            }]
        });
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
            this.handleSend(evt)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages.length != prevState.messages.length && !prevState.messages[prevState.messages.length - 1]['botmark']) {
            this.AddBotMessage();
            console.log('statechange');
        }
    }

    render() {
        let { user } = this.props;
        let { messages } = this.state;

        let msgArr = messages.map(msg => {
            return (<Message text={ msg.text } sender={ msg.user } />);
        });

        return (<div className="d-flex flex-column w-50">
                    <div>
                        { msgArr }
                    </div>
                    <hr/>
                    <div className="controls d-flex w-100">
                        <input 
                            type="text" 
                            className="w-75"
                            onChange={ this.handleChange }
                            onKeyUp = { this.handleChange }
                            value={ this.state.text }
                        />
                        <button className="ml-3" onClick={ this.handleSend }>Send</button>
                    </div>
                </div>)
    }
}