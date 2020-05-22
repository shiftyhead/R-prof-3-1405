import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import 'bootstrap';

import Message from '../Message/Message.jsx'

export default class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastSender: null, // Отслеживание последнего отправителя
            text: '',
            messages: [
                {
                    user: 'Me',
                    text: 'Hi'
                },
                {
                    user: null,
                    text: 'Hello'
                },
                {
                    user: 'Me',
                    text: 'How are you?'
                },
                {
                    user: null,
                    text: 'Fine'
                },
            ]
        }

    }

    handleSend = (evt) => { // Отслеживание события отправки сообщения
       this.setState({
           text: '',
           lastSender: this.props.user,
           messages: [...this.state.messages, { 
               user: this.props.user, 
                    text: this.state.text 
                }]
       })
    }

    handleChange = (evt) => { // Отправка нажатием на Enter
        evt.keyCode !== 13 ? 
        this.setState({ 
            text: evt.target.value
         }) 
        : this.handleSend(evt)
    }

    componentDidUpdate(evt) { // Апдейт компонента по условиям тернарника
         setTimeout(() => {
            this.state.lastSender == this.props.user ? 
            this.setState({
                messages: [...this.state.messages, {
                    user: 'Bot',
                    text: 'I dont know what you just said, human'
                }]
            }) : this.setState({
                lastSender: 'Bot',
                text: evt.target.value
            });
         }, 1000)
         console.log(this.state.lastSender)
    }
    
    shouldComponentUpdate(evt) { // Если я - последний сендер, то меняем на бота
        if(this.state.lastSender == 'Me') {
            this.setState({
                lastSender: 'Bot',
                user: 'Bot'
            }) 
        } else {
            return true // Если бот последний - тру 
        }
    }

    render() {
        let { user } = this.props;
         
        let { messages } = this.state;


        let msgArr = messages.map(msg => { // Маппинг имён и отправляемого текста
            return (<Message text={ msg.text } sender={ msg.user } />);
        });

        return (
            <div className="d-flex flex-column w-50">
                <div>
                    { msgArr }
                </div>
                <hr/>
                <div className="controls d-flex w-100">
                    <input type="text" 
                    className="w-75"
                    onChange={ this.handleChange }
                    onKeyUp={ this.handleChange } 
                    value={ this.state.text }/>
                    <button className="ml-3" onClick={ this.handleSend }>Send</button>
                </div>
            </div>
        )
    }
}