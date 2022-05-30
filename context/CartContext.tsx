import { createContext, ReactNode } from "react";

import useCart from "hooks/useCart";

import { CartContextInterface } from "types/context/CartContextInterface";

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  handleAddToCart: () => {}
})

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const useCartObject = useCart()

  return (
    <CartContext.Provider value={useCartObject}>
      {children}
    </CartContext.Provider>
  )
}
