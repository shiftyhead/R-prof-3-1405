import React, {Component} from 'react'

import MessageField from './MessageField/index.jsx'
import SendMessage from './SendMessage/index.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          author: 'bot',
          message: 'Hello!'
        },
        {
          author: 'bot',
          message: 'Send me message)'
        }
      ],
      inputValue: '',
      // state бота
      botMessageState: {
        // очередь бота
        botQueue: false,
        // сообщение в доставке
        inProcess: false,
        // вариативность ответа
        messages: [
          'Hello', 'Im fine, thanks)', 'How do you do?', 'By'
        ]
      }
    }
  }

  onChange(e) {
    if (e.key !== "Enter") {
      const inputValue = e.target.value
      this.setState((prevState) => ({
        ...prevState,
        inputValue: inputValue
      }))
    } else {
      this.onSend(e)
    }
  }

  onSend(e) {
    if (this.state.inputValue !== '') {
      e.preventDefault()
      this.setState((prevState) => ({
        messages: [...prevState.messages, {
          author: 'user',
          message: prevState.inputValue
        }],
        inputValue: '',
        botMessageState: {
          ...prevState.botMessageState,
          botQueue: true
        }
      }))
    }
  }

  botSendMessage() {
    const {messages} = this.state.botMessageState

    this.setState((prevState) => ({
      messages: [...prevState.messages, {
        author: 'bot',
        message:
          messages[Math.floor(Math.random() * messages.length)]
      }],
      botMessageState: {
        ...prevState.botMessageState,
        inProcess: false
      }
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    const {botQueue} = this.state.botMessageState
    const {inProcess} = prevState.botMessageState

    if (botQueue) {
      if (!inProcess) {
        this.setState((prevState) => ({
          botMessageState: {
            ...prevState.botMessageState,
            botQueue: false,
            inProcess: true
          }
        }))
        setTimeout(() => this.botSendMessage(), 1000)
      }
    }
  }

  render() {
    return (
      <div>
        <MessageField messages={this.state.messages}/>
        <SendMessage
          onChange={this.onChange.bind(this)}
          onSend={this.onSend.bind(this)}
          inputValue={this.state.inputValue}
        />
      </div>
    )
  }
}