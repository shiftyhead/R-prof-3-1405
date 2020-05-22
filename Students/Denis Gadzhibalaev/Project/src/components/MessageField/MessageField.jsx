import React from 'react';
import ReactDom from 'react-dom';
import shortid from 'shortid';

import Message from '../Message/Message.jsx';
import Button from '../Button/index.jsx';

import './style.sass';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            messages: [{
                        user: 'User1',
                        text: 'Hi'
                    },
                    {
                        user: null,
                        text: 'Hi'
                    },
                    {
                        user: 'User1',
                        text: 'How are you ?'
                    },
                    {
                        user: null,
                        text: 'Fine'
                    }
                ]
    }
    }

    changeInputText = (event) => {
        event.keyCode !== 13 ? 
        this.setState({ inputText: event.target.value }) :
        this.addInputText(event)
    }

    addInputText = () => {
        if (this.state.inputText) {
             this.setState ({
          inputText: '',
          messages: [...this.state.messages, {
              user: this.props.user,
              text: this.state.inputText
          }]
      })
    }
    }
     

    componentDidUpdate(prevProps, prevState) {
        if ((this.state.messages[this.state.messages.length - 1].user !== prevState.messages[prevState.messages.length - 1].user) && this.state.messages[this.state.messages.length - 1].user && this.state.messages.length > prevState.messages.length) {
                setTimeout(() => {
            this.setState ({
                messages: [...this.state.messages, {
                    user: null,
                    text: ''
                }]
            })
           }, 1000);
            }
        
    }

    render() {
        const messages = this.state.messages.map(msg => {
            return(
            <Message key = {shortid.generate()} user= {msg.user} text={msg.text} />
            )
        });
        return (
        <div className= "d-flex flex-column w-50">
             {messages}
            <div className= "controls d-flex w-100 align-items-center justify-content-center">
                <input  type= "text"
                    className= "messageList_input w-75"
                    value= {this.state.inputText}
                    onChange= {this.changeInputText}
                    onKeyUp= {this.changeInputText}
                />
            <Button addInputText = {this.addInputText} />
            </div> 
        </div>
        )
    }
}

export default App;