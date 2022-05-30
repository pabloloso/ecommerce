import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { CartContextProvider } from 'context/CartContext'

import Header from 'components/Header'
import Layout from 'components/Layout'

import composeStore from 'store'

import 'styles/GlobalStyles.scss'

const store = composeStore()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CartContextProvider>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </Provider>
  )
}

export default MyApp
