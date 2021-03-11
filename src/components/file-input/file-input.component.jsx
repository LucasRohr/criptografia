import React, { useState, useMemo, useEffect } from 'react'

import { ImageIcon } from '../../icons'

import './file-input.style.scss'

const FileInput = ({ onChangeFile, variant }) => {
  const [file, setFile] = useState('')

  useEffect(() => {
    onChangeFile(file)
  }, [file])

  const inputOptions = useMemo(
    () => ({
      IMAGE: {
        label: file ? 'Imagem selecionada' : 'Clique para escolher uma imagem',
        icon: ImageIcon,
      },
    }),
    [file]
  )

  const fileToBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  const onChangeInputFile = async event => {
    event.persist()

    const currentFile = event.target.files[0]
    const base64File = await fileToBase64(currentFile)

    setFile(base64File)
  }

  const renderIcon = () => {
    if (file) {
      return <img src={file} alt="Imagem" className="file-input-image" />
    }

    const IconComponent = inputOptions[variant]?.icon
    return <IconComponent className="file-input-icon" />
  }

  return (
    <div className="file-input-wrapper">
      <span className="file-input-label">{inputOptions[variant]?.label}</span>

      <input className="file-input" type="file" onChange={onChangeInputFile} />

      {renderIcon()}
    </div>
  )
}

export { FileInput }
