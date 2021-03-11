import React, { useState } from 'react'
import { Button, Input } from '../../../../components'

import './crypt-content.style.scss'

const CryptContent = () => {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const onPressCrypt = () => {}

  return (
    <div className="crypt-content-container">
      <div className="crypt-content-form-section">
        <Input onValueChange={setPassword} placeholder="Senha123" label="Senha para chave simétrica" />

        <div className="crypt-content-message-input-wrapper">
          <Input onValueChange={setMessage} placeholder="Minha mensagem" label="Texto para criptografar" />
        </div>

        <Button onClick={onPressCrypt} label="Criptografar" />
      </div>
    </div>
  )
}

export { CryptContent }
