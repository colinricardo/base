import { BaseProvider, LightTheme } from "baseui";
import App from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
