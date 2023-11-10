import React, { createContext, useContext } from "react";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const value = {};

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
