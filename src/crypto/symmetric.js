import CryptoJS from 'crypto-js'

export class SymmetricCrypto {
  static generateKey(password) {
    const salt = CryptoJS.lib.WordArray.random(128 / 8)

    const key = CryptoJS.PBKDF2(password, salt, {
      keySize: 256 / 32,
    })

    return key.toString
  }

  static encrypt(value, key) {
    return CryptoJS.AES.encrypt(value, key)
  }
}
