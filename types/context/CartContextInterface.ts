import { Product } from "types/Product"

export interface CartContextInterface {
  cart: Product[]
  handleAddToCart: (product: Product) => void
}