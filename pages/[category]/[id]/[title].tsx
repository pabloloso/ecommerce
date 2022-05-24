/* eslint-disable @next/next/no-img-element */
import axios from "axios"

import { Product } from "../../../types/Product"

const ProductDetailPage = ({ product }: { product: Product}) => {
  const { rate, count } = product.rating

  return(
    <div>
      <img src={product.image} alt={product.description} />
      <div>
        <span>{rate}</span>
        <span>{count}</span>
      </div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to cart</button>
    </div>
  )
}

export async function getServerSideProps(context: { params: { id: number } }) {
  const { params } = context
  const { id } = params

  const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

  return {
    props: {
      product: response.data
    }
  }
}

export default ProductDetailPage