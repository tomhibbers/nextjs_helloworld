// import '../styles/global.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;