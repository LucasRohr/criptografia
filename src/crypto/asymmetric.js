import crypto from 'asymmetric-crypto'

export class AsymmetricCrypto {
  static generateKeyPair() {
    return crypto.keyPair()
  }

  static encrypt(value, keyPair) {
    const { publicKey, secretKey } = keyPair

    return crypto.encrypt(value, publicKey, secretKey)
  }

  static decrypt(symmetricKey, publicKey, secretKey) {
    const { data, nonce } = symmetricKey

    return crypto.decrypt(data, nonce, publicKey, secretKey)
  }
}
