import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../store/products/selectors'

import { fetchProductsRequest } from '../store/products/actions'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProductsRequest())
  }, [dispatch])

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  )
}

export default Home
