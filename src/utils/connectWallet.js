import { ethers } from "ethers";

export async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
  } else {
    alert("Please install MetaMask!");
  }
}
