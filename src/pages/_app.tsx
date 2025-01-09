import { AppProps } from 'next/app'
import { Provider } from '../components/ui/provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider themes={['dark']}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
