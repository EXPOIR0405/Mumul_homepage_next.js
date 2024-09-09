import '../styles/globals.css'
import '../styles/App.css'  // App.css가 필요한 경우에만 포함

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp