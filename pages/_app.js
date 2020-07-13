import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${(p) => p.theme.colors.accent};
		color: white;
		font-family: sans-serif;
		font-size: 12px;
		margin: 0;
		padding: 0;
  }
`;

const theme = { colors: { accent: "#009b50" } };

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
