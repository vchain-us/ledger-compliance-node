export const CLIENT_INIT_PREFIX = 'ImmudbLcClient:';
export const DEFAULT_DATABASE = 'lc_immudb';
export const DEFAULT_ROOTPATH = 'root';

export const NODE_PREFIX = new Uint8Array([0x01])
export const REFERENCE_VALUE_PREFIX = new Uint8Array([0x01])
export const SORTED_KEY_PREFIX = new Uint8Array([0x01])
export const SET_KEY_PREFIX = new Uint8Array([0x00])
export const PLAIN_VALUE_PREFIX = new Uint8Array([0x00])
export const LEAF_PREFIX = Uint8Array.from([0x00])
