import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style.css' 

export default (props) => {
  let {user, text} = props  
  return (
    <div className="d-flex flex-column msg">
      <strong>{user}</strong>{text}
    </div>
  )
}