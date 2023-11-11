import "./App.css";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/queryClient";
import DataProvider from "./contexts/DataProvider";
import SettingsProvider from "./contexts/SettingsProvider";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <DataProvider>
          <SettingsProvider>
            <Main />
          </SettingsProvider>
        </DataProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
