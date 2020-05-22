import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './style.css'

import Message from '../Message/Message.jsx'

export default class MessagesField extends Component{
    constructor(props) {
        super(props)
        this.state= {
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
                {
                    user: 'Loontik',
                    text: 'how are you'
                },
                {
                    user: null,
                    text: 'Fine'
                }
            ]
        }
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
        this.setState({ text: evt.target.value}) :
        this.handleSend(evt)
    }

    // componentDidUpdate() {
    //     let text = this.state.messages

    //     if () {
    //         setTimeout(() => {
    //             this.setState ({
    //                 text: '',
    //                 messages: [...this.state.messages, { 
    //                     user: null, 
    //                     text: 'Hi! I wanna be ur friend' 
    //                 }]
    //             })
    //         }, 1000)
    //     }
    // }

    render() {
        let { user } = this.props
        let { messages } = this.state

        let msgArr = messages.map (msg => {
            return (<Message text = { msg.text } sender = { msg.user }/>)
        });

        return(
            <div>
                <div>
                    { msgArr}
                </div>
                <hr></hr>
                <div>
                    <input 
                        type = "text" 
                        onChange= {this.handleChange}
                        onKeyUp= {this.handleChange}
                        value = { this.state.text }
                    />
                    <button onClick= { this.handleSend}>Send</button>
                </div>
            </div>
        )
    }
}