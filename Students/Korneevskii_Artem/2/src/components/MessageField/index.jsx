import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Message from '../Message/index.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: [
                {
                    user: 'Vader',
                    text: 'Привет'
                },
                {
                    user: null,
                    text: 'Привет!'
                },
                {
                    user: 'Vader',
                    text: 'Как дела?'
                },
                {
                    user: null,
                    text: 'Нормально!'
                },
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
            this.handleSend(evt)
    }

    componentDidUpdate() {
        setTimeout(() => {
            if ((this.state.messages.length % 2) !== 0) {
                console.log(`Bot answers`);                
                this.setState({
                    text: '',
                    messages: [...this.state.messages, { 
                        user: null, 
                        text: null 
                    }]
                });  
            }
        }, 2000);
    }

    render() {
        let { user } = this.props;
        let { messages } = this.state;

        let messageArray = messages.map(message => {
            return (<Message text={ message.text } sender={ message.user } />);
        });

        return (<div className="d-flex flex-column w-50">
                    <div className="messages">
                        { messageArray }
                    </div>
                    <div className="controls d-flex w-100">
                        <input 
                            type="text" 
                            className="w-75"
                            onChange={ this.handleChange }
                            onKeyUp = { this.handleChange }
                            value={ this.state.text }
                        />
                        <button className="btn btn-success w-25" onClick={ this.handleSend }>Отправить</button>
                    </div>
                </div>);
    }
}