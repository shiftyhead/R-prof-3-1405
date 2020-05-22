import React, { Component } from 'react';
import './style.css';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            text: '',
            messages: [],
            botBusy: false,
            userSaid: true
        }
    }

    handleSend = (evt) => {
        this.setState({
            text: '',
            messages: [...this.state.messages, { user: this.state.user, text: this.state.text }]
        })
    }

    handleChange = (evt) => {
        evt.keyCode !== 13 ? this.setState({ text: evt.target.value }) : this.handleSend(evt);
    }

    componentDidUpdate(prevProps, prevState) {

        let thisArrLen = this.state.messages.length;
        let prevArrLen = prevState.messages.length;

        if ((thisArrLen > prevArrLen) && prevState.text && this.state.botBusy === false) {
         
            this.state.botBusy = true; // Состояние бота Занят
                        
            setTimeout(() => {
                this.setState(
                    {
                        messages: [ ...this.state.messages, {user: 'Bot', text: 'Бот сказал...'} ],
                        userSaid: false,
                        botBusy: false // состояние бота Свободен
                    }
                )
              
            }, 1000);

        } else if ((thisArrLen > prevArrLen) && this.state.userSaid === true && !prevState.text && this.state.botBusy === false) {

            this.state.botBusy = true; // Состояние бота Занят
                        
            setTimeout(() => {
                this.setState(
                    {
                        messages: [ ...this.state.messages, {user: 'Bot', text: 'Чтобы я смог ответить, отправьте текст...'} ],
                        userSaid: false,
                        botBusy: false // состояние бота Свободен
                    }
                )
              
            }, 1000);
        }

        this.state.userSaid = true;

    }

    render() {
        /* let { user } = this.props; */
        let { messages } = this.state;

        let msgArr = messages.map((msg, index) => {
            return (<Message key={ index } text={ msg.text } sender={ msg.user } />);
        });

        return (
            <div className="d-flex flex-column">
                <div>{ msgArr }</div>
                <div className="controls d-flex w-100">
                    <input
                        type="text"
                        className="w-75"
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleChange }
                        value={ this.state.text } />
                    <button className="ml-3" onClick={ this.handleSend }>Send</button>
                </div>
            </div>
        );
    }
}