import { useState } from "react"

import { CartContextInterface } from 'types/context/CartContextInterface'

import { Product } from 'types/Product'

const useCart = (): CartContextInterface => {
  const [cart, setCart] = useState<Product[]>([])

  const handleAddToCart = (product: Product) => {
    setCart([
      ...cart,
      product
    ])
  }

  return {
    cart,
    handleAddToCart
  }
}

export default useCart