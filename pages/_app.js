import '../styles/globals.css'
import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
          <>
          <Header></Header>
          <Component {...pageProps} />

          <style jsx>{`
            :global(ul) {
              padding: 0;
              margin: 0;
              list-style-type: none;
            }
          `}</style>
          </>
        )
}

export default MyApp
