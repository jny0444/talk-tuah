import Construction from "./pages/Construction";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import abi from "../../constants/Talk.json";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xCcBd93aF127156578D332dFb9EFa35Ed1bd5Fc12";
      const contractAbi = abi.abi;

      // const { ethereum } = window;

      const account = await window.ethereum.request({
        method: "eth_requestAccounts"
      })

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      )

      setState({
        provider,
        signer,
        contract
      })
    }
    template()
  }, [])

  return (
    <>

      <Construction />
    </>
  )
}

export default App;