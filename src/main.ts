import { ethers, utils } from 'ethers'
import dotenv from 'dotenv'
import { createBNC } from './utils/bnc'
import { debug } from './utils/debug'
import { NftAbi__factory, CAbi__factory } from './contracts'
import { chain, provider } from './config'
import dayjs from 'dayjs'

dotenv.config()

async function main() {}

main().catch((err) => {
    debug(`error %O`, err)
    process.exit(1)
})
