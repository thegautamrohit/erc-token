"use client";
import React, { createContext, useState, useContext } from "react";
import { useRouter } from "next/navigation";

const AppContext = createContext();

const { ethereum } = typeof window !== "undefined" ? window : {};

export const AppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  // const [contractAddress, setContractAddress] = useState("");
  const [error, setError] = useState("");
  // const [CSquadData, setCSquadData] = useState(null);

  const router = useRouter();

  const checkEthereumExists = async () => {
    if (window.ethereum) {
      return true;
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      return false;
    }
  };

  const loadBlockchainData = async () => {
    setError("");
    if (checkEthereumExists()) {
      try {
        await ethereum.request({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        });
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        router.push("/");
      } catch (error) {
        console.log(error);
        // pending error code : -32002
      }
    }
  };

  // loadBlockchainData();

  return (
    <AppContext.Provider
      value={{
        account,
        loadBlockchainData,
        // error,
        // CSquadData,
        // contractAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppProvider = () => useContext(AppContext);
