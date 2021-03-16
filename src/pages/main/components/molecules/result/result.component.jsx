import React, { useMemo } from 'react'
import './result.style.scss'

const Result = ({ title, children, alignEnd, variant }) => {
  const emptyContentOptions = useMemo(
    () => ({
      message: 'Nenhuma mensagem foi criptografada até o momento',
      image: 'Nenhuma imagem foi criptografada até o momento',
      key: 'Nenhuma chave foi gerada até o momento',
      messageDecrypt: 'Sem mensagem para apresentar',
      keyDecrypt: 'Sem chave para apresentar',
    }),
    []
  )

  return (
    <>
      <p className={`result-title ${alignEnd && 'align-end'}`}>{title}</p>
      <p className={`result-value ${alignEnd && 'align-end'}`}>{children ?? emptyContentOptions[variant]}</p>
    </>
  )
}

export { Result }
