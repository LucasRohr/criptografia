import React, { useState } from 'react'
import { Button, FileInput, Input } from '../../../../components'
import { AsymmetricCrypto, SymmetricCrypto } from '../../../../crypto'

import './crypt-content.style.scss'

const CryptContent = ({ message, setMessage, imageFile, setImageFile, setEncryptedSymmetricKey }) => {
  const [password, setPassword] = useState('')

  // TO DO: show key pair on screen
  const [asymmetricKeyPair, setAsymmetricKeyPair] = useState(null)

  const onPressCrypt = () => {
    const symmetricKey = SymmetricCrypto.generateKey(password)

    // TO DO: save encrypted data in states
    const encryptedMessage = SymmetricCrypto.encrypt(message, symmetricKey).toString()
    const encryptedImage = SymmetricCrypto.encrypt(imageFile, symmetricKey).toString()

    const keyPair = AsymmetricCrypto.generateKeyPair()
    setAsymmetricKeyPair(keyPair)

    const encryptedSymmetricKey = AsymmetricCrypto.encrypt(symmetricKey, keyPair)

    setEncryptedSymmetricKey(encryptedSymmetricKey)
  }

  return (
    <div className="crypt-content-container">
      <div className="crypt-content-form-section">
        <Input onValueChange={setPassword} placeholder="Senha123" label="Senha para chave simétrica" />

        <div className="crypt-content-message-input-wrapper">
          <Input onValueChange={setMessage} placeholder="Minha mensagem" label="Texto para criptografar" />
        </div>

        <FileInput onChangeFile={setImageFile} variant="IMAGE" />

        <Button onClick={onPressCrypt} label="Criptografar" />
      </div>
    </div>
  )
}

export { CryptContent }
