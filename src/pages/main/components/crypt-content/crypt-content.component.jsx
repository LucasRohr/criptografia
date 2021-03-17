import React, { useState } from 'react'
import { Button, FileInput, Input } from '../../../../components'
import { AsymmetricCrypto, SymmetricCrypto } from '../../../../crypto'
import { Result } from '../molecules/result/result.component'

import './crypt-content.style.scss'

const CryptContent = ({ message, setMessage, imageFile, setImageFile, cryptData, setCryptData }) => {
  const [password, setPassword] = useState('')

  const [asymmetricKeyPair, setAsymmetricKeyPair] = useState(null)

  const onPressCrypt = () => {
    const symmetricKey = SymmetricCrypto.generateKey(password)

    const messageCrypto = SymmetricCrypto.encrypt(message, symmetricKey)
    const imageCrypto = SymmetricCrypto.encrypt(imageFile, symmetricKey)

    const keyPair = AsymmetricCrypto.generateKeyPair()
    setAsymmetricKeyPair(keyPair)

    const encryptedSymmetricKey = AsymmetricCrypto.encrypt(symmetricKey, keyPair)

    setCryptData({
      message: messageCrypto,
      image: imageCrypto,
      publicKey: keyPair?.publicKey,
      symmetricKey: encryptedSymmetricKey,
    })
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
          {cryptData.message?.toString()}
        </Result>

        <Result alignEnd title="Imagem criptografada" variant="image">
          {cryptData.image?.toString()}
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
