import React from 'react'

import './button.style.scss'

const Button = ({ onClick, label, small }) => {
  return (
    <button 
      onClick={onClick}
      className={`button-component ${small && 'small'}`}
    >
      {label}
    </button>
  )
}

export { Button }
