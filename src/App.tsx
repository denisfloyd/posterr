import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

import { GlobalStyle } from "./styles/GlobalStyle";
import { AppRoutes } from "routes";

import store from "store";

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppRoutes />

        {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
      </QueryClientProvider>
    </Provider>
  );
}
