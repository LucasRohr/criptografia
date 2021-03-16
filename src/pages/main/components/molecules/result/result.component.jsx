import React from 'react'
import './result.style.scss'

const Result = ({ title, children, alignEnd }) =>
  children ? (
    <>
      <p className={`result-title ${alignEnd && 'align-end'}`}>{title}</p>
      <p className={`result-value ${alignEnd && 'align-end'}`}>{children}</p>
    </>
  ) : null

export { Result }