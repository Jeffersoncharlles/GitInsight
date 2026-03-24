import '@testing-library/jest-dom'

import { webcrypto } from 'node:crypto'
import { TextDecoder, TextEncoder } from 'node:util'

declare global {
  var crypto: typeof globalThis.crypto
}

globalThis.TextEncoder = TextEncoder as unknown as typeof globalThis.TextEncoder
globalThis.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as unknown as typeof globalThis.crypto
}

expect.extend({})
