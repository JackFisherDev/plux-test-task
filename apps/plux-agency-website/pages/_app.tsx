import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to plux-agency-website!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
