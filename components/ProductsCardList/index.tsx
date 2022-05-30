import ProductsCard from "components/ProductsCard"

import { ProductsCardList } from "./interfaces"

import styles from './styles.module.scss'

const ProductsCardList = ({ products }: ProductsCardList) => {
  return (
    <div className={styles.products_card_list_container}>
      {products.map(product => (
        <ProductsCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductsCardList