import React from "react";
import { createContext, useState, useContext } from "react";

const TokenContext = createContext();

export const TokenContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const updateToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    setToken(newToken);
  };

  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useUpdateToken = () => {
  return useContext(TokenContext);
};
