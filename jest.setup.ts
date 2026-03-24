import "@testing-library/jest-dom";

import { webcrypto } from "node:crypto";
import { TextDecoder, TextEncoder } from "node:util";

declare global {
	var crypto: typeof globalThis.crypto;
}

globalThis.TextEncoder = TextEncoder as any;
globalThis.TextDecoder = TextDecoder as any;
if (!globalThis.crypto) {
	globalThis.crypto = webcrypto as any;
}

expect.extend({});
