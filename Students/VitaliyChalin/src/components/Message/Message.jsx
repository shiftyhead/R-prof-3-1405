//import React from 'react';
//import ReactDom from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Message extends Component {

    render() {
        
        return (
            <div className={this.props.sender ?
                'text__wrapper text__wrapper--'+this.props.sender :
                'text__wrapper text__wrapper--Bot'}>
                { this.props.sender && <strong>{ this.props.sender }</strong> }
                { !this.props.sender && <strong>Bot</strong> }
                { (this.props.sender && this.props.text) && <p className="text__user">{ this.props.text }</p> }
                { (!this.props.sender && !this.props.text) && <p className="text__bot">cyber answer...</p> }
            </div>
        )
    }
}

/* export default (props) => {

    let { sender, text } = props;

    return (
        <div className={sender ? 'text__wrapper text__wrapper--'+sender : 'text__wrapper text__wrapper--Bot'}>
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong> }
            { (props.sender && text) && <p className="text__user">{ text }</p> }
            { (props.sender && !text) && <p className="text__bot text__bot--notext">Чтобы я смог ответить, отправьте текст...</p> }
            { (!props.sender && !text) && <p className="text__bot">cyber answer...</p> }
        </div>
    )
}; */