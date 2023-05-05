import { wrapper } from "@/store";
import theme from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import "@/styles/globals.css";

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
