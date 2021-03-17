import React, { useState, useMemo } from 'react'
import { Tabs } from '../../components'
import { CryptContent, DecryptContent } from './components'
import { KeysIcon } from '../../icons'

import './main.style.scss'

const DEFAULT_TAB = 'CRYPT'

const MainPage = () => {
  const [currentTab, setCurrentTab] = useState(DEFAULT_TAB)
  const [message, setMessage] = useState('')
  const [imageFile, setImageFile] = useState('')
  const [cryptData, setCryptData] = useState({
    message: null,
    image: null,
    publicKey: '',
    symmetricKey: {},
  })

  const tabOptions = useMemo(
    () => [
      {
        id: 'cryptTab',
        name: 'cryptTab',
        value: 'CRYPT',
        label: 'Criptografia',
      },

      {
        id: 'decryptTab',
        name: 'decryptTab',
        value: 'DECRYPT',
        label: 'Descriptografia',
      },
    ],
    []
  )

  const contentOptions = useMemo(
    () => ({
      CRYPT: (
        <CryptContent
          message={message}
          setMessage={setMessage}
          imageFile={imageFile}
          setImageFile={setImageFile}
          cryptData={cryptData}
          setCryptData={setCryptData}
        />
      ),
      DECRYPT: <DecryptContent cryptData={cryptData} />,
    }),
    [message, imageFile, cryptData]
  )

  return (
    <div className="main-page-container">
      <div className="main-header">
        <div className="main-header-logo-container">
          <KeysIcon className="input-calendar-icon" />
          <span>CryptoSafe</span>
        </div>

        <span>By SafeCorp</span>
      </div>

      <div className="main-content">
        <Tabs options={tabOptions} currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {contentOptions[currentTab]}
      </div>
    </div>
  )
}

export { MainPage }
