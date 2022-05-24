import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../store/products/selectors'

import { fetchProductsRequest } from '../store/products/actions'

import ProductsCardList from '../components/ProductsCardList'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProductsRequest())
  }, [dispatch])

  return (
    <div>
      <ProductsCardList products={products} />
    </div>
  )
}

export default Home
