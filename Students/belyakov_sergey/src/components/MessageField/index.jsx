import React from 'react'

import Messages from '../Messages/index.jsx'

export default (props) => {
  const {messages} = props

  return (
    <Messages messages={messages}/>
  )
}