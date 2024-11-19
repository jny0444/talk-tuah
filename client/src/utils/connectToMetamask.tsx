import { ethers } from 'ethers'

declare global {
    interface Window {
        ethereum: any;
    }
}

export const connectToMetamask = async () => {
    try{
        if(window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = provider.getSigner();
            return signer;
        }
    } catch (err) {
        console.log(err)
    }
}