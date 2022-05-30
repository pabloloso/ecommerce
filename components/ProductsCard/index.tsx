import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"

import { CartContext } from "context/CartContext"

import { sanitizeStringForUrl } from "utils/url"

import LinkComponent from "components/Link"

import { ProductsCardProps } from './interfaces'

import styles from './styles.module.scss'

const ProductsCard = ({ product }: ProductsCardProps) => {
  const { handleAddToCart } = useContext(CartContext)

  const {
    id,
    title,
    price,
    description,
    category,
    image,
  } = product

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
      <div className={styles.products_card__info}>
        <LinkComponent href={sanitizeUrl}>
          <h4 className={styles.products_card__title}>{title}</h4>
        </LinkComponent>
        <div className={styles.products_card__price}>
          <div>{price} €</div>
        </div>
        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}
export default ProductsCard