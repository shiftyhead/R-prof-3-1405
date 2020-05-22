import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageText: ''
        };     
    }

    handleInput = (event) => {
        this.setMesaggeText(event.target.value);
    }

    handleSending = (event) => {
        if (this.sendToggle(event) === true && this.state.messageText !== '') {
            this.sendMessage();
        }
    }

    setMesaggeText = (string) => {
        this.setState({ messageText: string });
    }

    sendMessage = () => {
        let result = this.props.send( 'Лунтик', this.state.messageText);
        if(result) {  
            this.setState((state) => ({messageText: ''}));
        }
    }

    sendToggle = (event) => (
       event.keyCode === 13 && event.altKey
    );

    render() {
        const messagesList = this.props.messages.map((messageItem, index) => (<Message key={index} author={messageItem.author} text={messageItem.text} />));
        return (
            <div className="superchat">
                <h2 className="superchat__title">Суперчат</h2>
                <ul className="superchat__message-list">
                    {messagesList}                    
                </ul>
                <div className="superchat__note" >отправить: alt + enter</div>
                <textarea name="message" className="superchat__message-input"
                    value={this.state.messageText}
                    onChange={this.handleInput}
                    onKeyDown={this.handleSending}></textarea>
                    <div className="superchat__note" >отправить: alt + enter</div>
            </div>
        );
    }
}