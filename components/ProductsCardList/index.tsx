import { Product } from "types/Product"

import ProductsCard from "components/ProductsCard"

const ProductsCardList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      {products.map(product => (
        <ProductsCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  )
}

export default ProductsCardList