import React, { useState } from 'react'
import { Button, Input } from '../../../../components'
import { ArrowIcon, ImagePlaceholderIcon } from '../../../../icons'
import { Result } from '../molecules/result/result.component'

import './decrypt-content.style.scss'

const DecryptContent = () => {
  const [privatekey, setPrivateKey] = useState('')

  const onPressDecrypt = () => {}

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
          <div className="decrypt-content-display-results-left">
            <Result title="Mensagem original" variant="messageDecrypt">
              placeholder
            </Result>
            <Result title="Chave simétrica pura" variant="keyDecrypt">
              placeholder
            </Result>
          </div>
          <div className="decrypt-content-display-results-right">
            <p>Imagem original</p>
            <ImagePlaceholderIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export { DecryptContent }
