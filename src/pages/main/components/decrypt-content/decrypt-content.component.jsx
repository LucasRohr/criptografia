import React, { useState, useMemo } from 'react'
import { Button, Input } from '../../../../components'
import { ArrowIcon, ImagePlaceholderIcon } from '../../../../icons'
import { AsymmetricCrypto, SymmetricCrypto } from '../../../../crypto'
import { Result } from '../molecules/result/result.component'

import './decrypt-content.style.scss'

const DecryptContent = ({ cryptData, decryptData, setDecryptData }) => {
  const [privatekey, setPrivateKey] = useState('')

  const encryptedSymmetricKey = useMemo(() => cryptData.symmetricKey, [cryptData])

  const encryptedItems = useMemo(
    () => ({
      message: cryptData.message,
      image: cryptData.image,
    }),
    [cryptData]
  )

  const publicKey = useMemo(() => cryptData.publicKey, [cryptData])

  const onPressDecrypt = () => {
    const symmetricKey = AsymmetricCrypto.decrypt(encryptedSymmetricKey, publicKey, privatekey)
    const message = SymmetricCrypto.decrypt(encryptedItems?.message, symmetricKey)
    const image = SymmetricCrypto.decrypt(encryptedItems?.image, symmetricKey)

    setDecryptData({ message, image, symmetricKey })
  }

  const renderImage = () => {
    if (decryptData?.image) {
      return <img className="decrypt-content-image" src={decryptData?.image} alt="Imagem" />
    }

    return <ImagePlaceholderIcon />
  }

  return (
    <div className="decrypt-content-container">
      <div className="decrypt-content-form-section">
        <div className="decrypt-content-PrivateKey-input-wrapper">
          <Input
            onValueChange={setPrivateKey}
            placeholder="MinhaChavePrivada"
            label="Chave privada para descriptografar"
          />
        </div>

        <Button onClick={onPressDecrypt} label="Descriptografar" />
      </div>

      <ArrowIcon className="decrypt-content-arrow-icon" />

      <div className="decrypt-content-display-section">
        <h2 className="decrypt-content-display-section-title">Resultados da descriptografia</h2>

        <div className="decrypt-content-display-results">
          <div className="decrypt-content-display-results-text">
            <Result title="Mensagem original" variant="messageDecrypt" alignEnd>
              {decryptData.message}
            </Result>

            <Result title="Chave simétrica pura" variant="keyDecrypt" alignEnd>
              {decryptData.symmetricKey}
            </Result>
          </div>

          <div className="decrypt-content-display-results-image">
            <p>Imagem original</p>

            {renderImage()}
          </div>
        </div>
      </div>
    </div>
  )
}

export { DecryptContent }
