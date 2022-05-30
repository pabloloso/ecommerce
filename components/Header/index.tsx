import { useContext } from 'react'
import { CartContext } from 'context/CartContext'

import LinkComponent from 'components/Link'

import styles from './styles.module.scss'

const Header = () => {
  const { cart } = useContext(CartContext)

  return(
    <nav className={styles.header_container}>
      <div>
        <LinkComponent href='/'>Home</LinkComponent>
      </div>
      <LinkComponent href='/cart'>carrito {cart.length}</LinkComponent>
    </nav>
  )
}

export default Header
