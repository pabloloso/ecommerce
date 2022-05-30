import { LayoutProps } from './interfaces'

import styles from './styles.module.scss'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout_container}>
      {children}
    </div>
  )
}

export default Layout