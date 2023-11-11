import { useMediaQuery } from "@chakra-ui/media-query";
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [isLargerDevice] = useMediaQuery("(min-width: 768px)");
  const [searchbarOpen, setSearchbarOpen] = useState(true);

  const value = { searchbarOpen, setSearchbarOpen, isLargerDevice };

  useLayoutEffect(() => {
    if (isLargerDevice) {
      setSearchbarOpen(true);
    } else {
      setSearchbarOpen(false);
    }
  }, [isLargerDevice]);

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
