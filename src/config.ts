import { ethers } from 'ethers'
import { CHAIN } from './utils/chain'

export const chain = CHAIN.ETH_MAINNET
export const provider = new ethers.providers.JsonRpcProvider(chain.rpcUrl)
