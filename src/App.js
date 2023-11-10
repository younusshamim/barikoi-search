import "./App.css";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Main />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
