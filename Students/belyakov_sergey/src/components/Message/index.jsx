import React from 'react'

export default (props) => {
  const {author, message} = props

  return (
    <p>
      <i>{author}: </i>
      {message}
    </p>
  )
}