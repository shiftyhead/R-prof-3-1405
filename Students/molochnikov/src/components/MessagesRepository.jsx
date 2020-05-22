import React from 'react';
import MessageField from './MessageField.jsx';

export default class MessagesRepository extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRespondent: '',
            isRequestEnable: true,
            messagesList: [],
        };
    }

    componentDidUpdate () {
        let self = this;
        setTimeout( self.addBotMessage, 2000);
    }

    addClientMessage = (username, messageText) => {
        if (!this.state.isRequestEnable) {
            return false;
        }
        this.addMessage(username, messageText);
        this.setState({currentRespondent: username, isRequestEnable: false});
        return true;
    }

    addBotMessage = () => {
        if (this.state.isRequestEnable) {
            return;
        }
        this.addMessage('Робот',  this.state.currentRespondent + ', привет я Робот!');
        this.setState({isRequestEnable: true});
    };

    addMessage = (username, messageText) => {
        this.setState((state)=>({
            messagesList: [...state.messagesList, {author: username, text: messageText}] 
        }));
    }

    render () {
        return (
        <MessageField send={this.addClientMessage} messages={this.state.messagesList} />
        );
    }

}