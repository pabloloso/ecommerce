import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import composeStore from '../store'

const store = composeStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
