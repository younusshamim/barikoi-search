import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  retry: 0,
  refetchOnWindowFocus: false,
});

export default queryClient;
