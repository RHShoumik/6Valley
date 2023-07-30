import Header from '@/layouts/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
        <Header />
        <Component {...pageProps} />
    </div>
  )
}
