import { BigNumber, Contract, utils, Wallet } from 'ethers'

export async function sendToken(Erc20Token: Contract, address: string, options: any) {
    return Erc20Token.transfer(address, utils.parseEther('7.5'), options)
}
export async function sendEther(wallet: Wallet, address: string, amount: BigNumber, options: any) {
    return wallet.sendTransaction({
        to: address,
        value: amount,
        ...options,
    })
}
