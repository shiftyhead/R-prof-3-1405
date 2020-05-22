import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isUserAnswer: false,
      messages: [
        {
          user: 'Loontik',
          text: 'Hi'
        },
        {
          user: null,
          text: 'Hello'
        },
        {
          user: 'Loontik',
          text: 'How are you?'
        },
        {
          user: null,
          text: 'Fine'
        },
      ]
    }
  }

  handleSend = (evt) => {
    this.setState({
      text: '',
      isUserAnswer: true,
      messages: [...this.state.messages, { 
        user: this.props.user, 
        text: this.state.text 
      }]
    });
  }

  handleChange = (evt) => {
    evt.keyCode !== 13 ? 
      this.setState({
        text: evt.target.value,
        isUserAnswer: false
      }) :
      this.handleSend(evt)
  }

  componentDidUpdate() {
    let indexUserMsg = this.state.messages.length - 2;
    if (!this.state.messages[indexUserMsg].user && this.state.isUserAnswer) {
      setTimeout(() => {
        this.setState({ 
          text: '',
          isUserAnswer: false,
          messages: [...this.state.messages, {
            user: null,
            text: 'cyber answer...'
          }]
        })
      }, 1000);
    }    
  }

  render() {
    let { messages } = this.state;

    let msgArr = messages.map((msg,index) => {
      return (<Message text={ msg.text } sender={ msg.user } key={index.toString()}/>);
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
                <button className="ml-3 btn btn-primary" type="button" onClick={ this.handleSend }>Send</button>
              </div>
            </div>)
  }
}