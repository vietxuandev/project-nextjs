import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

const App: React.JSXElementConstructor<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
