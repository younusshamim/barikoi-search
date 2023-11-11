import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [searchbarOpen, setSearchbarOpen] = useState(false);

  const value = { searchbarOpen, setSearchbarOpen };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};

export default SettingsProvider;
