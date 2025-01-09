import { AppProps } from 'next/app'
import { Provider } from '../components/ui/provider'
import './_app.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}

export default MyApp
