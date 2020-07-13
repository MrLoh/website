import Head from 'next/head';
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = { colors: { accent: '#009b50' } };

const GlobalStyle = createGlobalStyle`
  :root {
    ${(p) =>
      Object.entries(p.theme.colors)
        .map(([name, value]) => `--${name}: ${value};`)
        .join('\n')}
  }
  html, body {
    background-color: var(--accent);
    color: white;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Tobias Lohse</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
