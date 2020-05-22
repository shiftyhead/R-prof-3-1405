import React from 'react'

import Message from '../Message/index.jsx'

export default (props) => {
  const {messages} = props

  return (
    messages.map((message, index) => (
      <Message author={message.author} message={message.message} key={index}/>
    ))
  )
}