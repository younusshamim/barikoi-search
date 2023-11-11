import "./App.css";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/queryClient";
import DataProvider from "./contexts/DataProvider";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <DataProvider>
          <Main />
        </DataProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
