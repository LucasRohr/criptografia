import React, { useState } from 'react'
import { Button, Input } from '../../../../components'

import './decrypt-content.style.scss'

const DecryptContent = () => {
  const [privatekey, setPrivateKey] = useState('')

  const onPressDecrypt = () => {}

  return (
    <div className="decrypt-content-container">
      <div className="decrypt-content-form-section">

        <div className="decrypt-content-PrivateKey-input-wrapper">
          <Input onValueChange={setPrivateKey} placeholder="MinhaChavePrivada" label="Chave privada para descriptografar" />
        </div>

        <Button onClick={onPressDecrypt} label="Descriptografar" />
      </div>
    </div>
  )
}

export { DecryptContent }
