export interface Certs {
    privateKey: string;
    cercChain?: string;
}

export interface Config {
    host: string;
    port: string;
    rootPath?: string;
    certs?: Certs;
    apiKey: string
}

export enum Permission {
    NONE = 0,
    READ_ONLY = 1,
    READ_WRITE = 2
}

export enum Auth {
    DISABLED = 0,
    ENABLED = 1
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
