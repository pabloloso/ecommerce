import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import composeStore from 'store'

import Header from 'components/Header'

const store = composeStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
