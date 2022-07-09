export interface Chain {
    chainId: number
    rpcUrl: string
}

export const CHAIN = {
    ETH_MAINNET: {
        chainId: 1,
        rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    },
    ETH_RINKEBY: {
        chainId: 4,
        rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    },
    ETH_ROPSTEN: {
        chainId: 3,
        rpcUrl: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    },
    BSC_MAIN: {
        chainId: 56,
        rpcUrl: 'https://bsc-dataseed1.ninicoin.io',
    },
}
