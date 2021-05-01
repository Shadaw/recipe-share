import { AppProps } from 'next/app';
import Head from 'next/head';

import Header from 'components/Header';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Recipes share</title>
        <meta name="description" content="Recipes share" />
      </Head>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
