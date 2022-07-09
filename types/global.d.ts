declare namespace NodeJS {
    export interface ProcessEnv {
        PRIVATE_KEY: string
        BLOCKNATIVE_API_KEY: string
        [key: string]: string | undefined
    }
}
