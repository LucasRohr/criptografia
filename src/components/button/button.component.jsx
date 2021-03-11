import React from 'react'

import './button.style.scss'

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="button-component">
      {label}
    </button>
  )
}

export { Button }
