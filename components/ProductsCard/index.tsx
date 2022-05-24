/* eslint-disable @next/next/no-img-element */
import { Product } from "../../types/Product"

import Link from "next/link"

const ProductsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product)=>{
  const { rate, count } = rating

  return(
    <div>
      <img src={image} alt={description} />
      <div>
        <span>{rate}</span>
        <span>{count}</span>
      </div>
      <h4>{title}</h4>
      <div>{category}</div>
      <div>
        <div>{price}</div>
        <p>{description}</p>
      </div>
      <Link href={`/${category.replaceAll(' ', '_')}/${id}/${title.replaceAll(' ', '_')}`}>Detail</Link>
      <button>Add to cart</button>
    </div>
  )
}
export default ProductsCard