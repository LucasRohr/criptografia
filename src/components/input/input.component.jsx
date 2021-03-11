import React from 'react'

import './input.style.scss'

const Input = ({ onValueChange, placeholder, label }) => {
  const onChangeText = event => {
    onValueChange(event.target.value)
  }

  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input className="input-style" type="text" placeholder={placeholder} onChange={onChangeText} />
    </div>
  )
}

export { Input }
