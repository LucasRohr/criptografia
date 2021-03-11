import React, { useState, useMemo } from 'react'
import { Tabs } from '../../components'
import { CryptContent } from './components'
import KeysIcon from '../../assets/keys.svg'

import './main.style.scss'

const DEFAULT_TAB = 'CRYPT'

const MainPage = () => {
  const [currentTab, setCurrentTab] = useState(DEFAULT_TAB)

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
      CRYPT: <CryptContent />,
      DECRYPT: null,
    }),
    []
  )

  return (
    <div className="main-page-container">
      <div className="main-header">
        <div className="main-header-logo-container">
          <img src={KeysIcon} alt="logo" />
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
