import Web3 from 'web3';
import { minterABI } from './ContractABI';

let selectedAccount
export const init = () => {
    let provider = window.ethereum
    if (provider !== undefined) {
        provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
            selectedAccount = accounts[0]
            console.log("Connected account is: " + selectedAccount)
        }).catch(err => {
            console.log(err)
        })
        window.ethereum.on('accountChanged', function(accounts){
            selectedAccount = accounts[0]
            console.log("Connected account changed to" + selectedAccount)
        })
    }
    const web3 = new Web3(provider)
}

export const getContracts = (abi, address) => {
    const web3 = init()
    const customContract = new web3.eth.Contract(abi, address)
    return customContract
}

export const getMintContract = async() => {
    try {
        const mintContract = getContracts(minterABI, 0x0df9EA84E26ecf5DEdC9066e602e2841503305b0)
        return mintContract
    } catch (error) {
        console.log(error)
    }
}

export const mintToken = async (mintCount) => {
    try {
        const contract = await getMintContract()
        return contract.methods.mint(mintCount).send({from: selectedAccount})
    } catch (err) {
        console.log(err)
    }
}