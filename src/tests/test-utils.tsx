import { FC, ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { render, RenderOptions } from "@testing-library/react";

import store from "store";

const AllTheProviders: FC = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 1,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const ReduxProvider: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <AllTheProviders>{children}</AllTheProviders>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

const customRenderWithRedux = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ReduxProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
export { customRenderWithRedux as renderWithStore };
