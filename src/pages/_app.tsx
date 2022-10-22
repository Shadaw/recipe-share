import { AppProps } from 'next/app';
import Head from 'next/head';

import AppProvider from 'hooks';

import Header from 'components/Header';
import Modal from 'components/Modal';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <Head>
          <title>Recipes share</title>
          <meta name="description" content="Recipes share" />
        </Head>
        <Header />
        <Modal />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
