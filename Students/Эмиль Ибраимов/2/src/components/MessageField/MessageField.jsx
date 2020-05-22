//container

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx'

//до redux
export default class MessagesField extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            messages: [
                {
                    user: null,
                    text: 'Hello, ask a question.'
                }
            ],
            lastSend: 'Bot',
            msgLength: 0 
        }
    }

    handleSend = (evt) =>{
        if(this.state.text !== ''){
        this.setState({
            text: '',           
            messages: [...this.state.messages, { 
                user: this.props.user,
                text: this.state.text}],
            lastSend: 'User',
            msgLength: this.state.messages.length
        })
    }
    }

    handleChange = (evt) =>{
        if(evt.keyCode !== 13){
            this.setState({ text: evt.target.value })
        }else{
            this.handleSend(evt)
        }
    }

    //хук
    componentDidUpdate(){
        
        setTimeout(()=>{
            if((this.state.messages.length > this.state.msgLength ) && (this.state.lastSend == 'User')){
                  this.setState({
                messages: [...this.state.messages, { 
                    user: null,
                    text: null}],
                lastSend: "Bot",
                msgLength:this.state.messages.length++
            })
        }}, 1000);
   
    }

    render(){
        let { user } = this.props;
        let { messages } = this.state;

        let msgArr = messages.map(msg => {
                    return(<Message text={msg.text} sender = {msg.user} />)
        });

        return (<div className="d-flex flex-column w-50">
            <div>{ msgArr }</div>
            <hr/>
            <div className="controls d-flex w-100">
            <input 
            type="text" 
            className="w-75"
            onChange={ this.handleChange }
            onKeyUp={ this.handleChange }
            value = {this.state.text}/>
            <button className="ml-3" onClick={this.handleSend}>send</button>
            </div>
        </div>)
    }
}