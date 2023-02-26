import React, { createContext, useContext, useState } from "react";
// import { MyWallet } from "../utils/services";

const CommonContext = createContext();

const CommonProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      // const res = await MyWallet.connectWallet();
      // setAccount(res);
    } catch (error) {
      console.log("Error connect wallet: ", error);
    }
  };

  return (
    <CommonContext.Provider
      value={{
        state: {
          account,
        },
        connectWallet,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

const useCommon = () => useContext(CommonContext);

export { CommonProvider, useCommon };
