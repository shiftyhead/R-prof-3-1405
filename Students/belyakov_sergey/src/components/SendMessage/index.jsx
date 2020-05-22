import React from 'react'

export default (props) => {
  const {inputValue, onChange, onSend} = props

  return (
    <div>
      <input onChange={onChange} onKeyUp={onChange} type="text" value={inputValue}/>
      <button onClick={onSend}>send</button>
    </div>
  )
}