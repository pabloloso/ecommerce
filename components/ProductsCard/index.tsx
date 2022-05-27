import Image from "next/image"
import Link from "next/link"

import { sanitizeStringForUrl } from "../../utils/url"

import { Product } from "types/Product"

const ProductsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) => {
  const { rate, count } = rating

  const sanitazeCategory = sanitizeStringForUrl(category)
  const sanitazeTitle = sanitizeStringForUrl(title)
  const sanitizeUrl = `/${sanitazeCategory}/${id}/${sanitazeTitle}`

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
        <Image
          src={image}
          alt={description}
          layout='fill'
          objectFit='contain'
          priority
        />
      </div>
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
      <Link href={sanitizeUrl}>Detail</Link>
      <button>Add to cart</button>
    </div>
  )
}
export default ProductsCard