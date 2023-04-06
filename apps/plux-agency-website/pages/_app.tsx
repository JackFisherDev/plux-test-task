import { AppProps } from 'next/app';
import localFont from 'next/font/local';
// import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/global.css';

const bariol = localFont({
  src: [
    {
      path: '../public/fonts/Bariol/bariol_serif_regular-webfont.woff2',
      weight: '400',
    },
  ],
});
const gtUltra = localFont({
  src: [
    {
      path: '../public/fonts/GT-Ultra/GT-Ultra-Fine-Thin.woff2',
      weight: '200',
    },
    {
      path: '../public/fonts/GT-Ultra/GT-Ultra-Fine-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/GT-Ultra/GT-Ultra-Fine-Bold.woff2',
      weight: '700',
    },
  ],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --bariol-font: ${bariol.style.fontFamily};
          --gt-ultra-fine: ${gtUltra.style.fontFamily};
        }
      `}</style>

      {/* <ParallaxProvider> */}
      <Component {...pageProps} />
      {/* </ParallaxProvider> */}
    </>
  );
}

export default App;
