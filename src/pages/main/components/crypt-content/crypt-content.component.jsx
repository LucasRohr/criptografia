import React, { useState, useEffect } from 'react'
import { Button, FileInput, Input } from '../../../../components'
import { AsymmetricCrypto, SymmetricCrypto } from '../../../../crypto'
import { Result } from '../molecules/result/result.component'

import './crypt-content.style.scss'

const CryptContent = ({ message, setMessage, imageFile, setImageFile, setEncryptedSymmetricKey }) => {
  const [password, setPassword] = useState('')

  const [asymmetricKeyPair, setAsymmetricKeyPair] = useState(null)

  const [encryptedItems, setEncryptedItems] = useState({
    message: null,
    image: null,
  })

  useEffect(() => {
    localStorage.setItem('encryptedItems', encryptedItems)
  }, [encryptedItems])

  const onPressCrypt = () => {
    const symmetricKey = SymmetricCrypto.generateKey(password)

    setEncryptedItems({
      message: message && SymmetricCrypto.encrypt(message, symmetricKey).toString(),
      image: imageFile && SymmetricCrypto.encrypt(imageFile, symmetricKey).toString(),
    })

    localStorage.setItem('symmetricKey', symmetricKey)

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
      <div className="crypt-content-display-section">
        <h2 className="crypt-content-display-section-title">Resultados da criptografia</h2>

        <Result alignEnd title="Mensagem criptografada" variant="message">
          {encryptedItems.message}
        </Result>

        <Result alignEnd title="Imagem criptografada" variant="image">
          {encryptedItems.image}
        </Result>

        <Result alignEnd title="Chave assimétrica/pública" variant="key">
          {asymmetricKeyPair?.publicKey}
        </Result>

        <Result alignEnd title="Chave assimétrica/privada" variant="key">
          {asymmetricKeyPair?.secretKey}
        </Result>
      </div>
    </div>
  )
}

export { CryptContent }
