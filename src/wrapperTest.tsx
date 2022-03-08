import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./core/Store";
import ThemeContextProvider from "./ui/App/ThemeContextProvider";

export function wrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  );
}
