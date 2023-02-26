import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";

export const UserContext = createContext();

const ABI = "";
const ADDRESS = "";

export const UserProvider = ({ children, data = {} }) => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      // const newContract = new web3.eth.Contract(ABI, ADDRESS);
      // setContract(newContract);
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.send("eth_requestAccounts");
      const accounts = await web3.eth.getAccounts();
      web3.defaultAccount = accounts[0];
      setAccount(accounts[0]);
    }
  };

  const getBalance = async (accountAddress) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accountBalance = await web3.eth.getBalance(accountAddress);
      setBalance(web3.utils.fromWei(accountBalance, "ether"));
    }
  };

  const providerValue = {
    account,
    contract,
    balance,
    connectWallet,
    getBalance,
  };
  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
