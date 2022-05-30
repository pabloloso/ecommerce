import Link from 'next/link'

import { LinkComponentProps } from './interfaces'

const LinkComponent = ({ children, href }: LinkComponentProps) => {
  return (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  )
}

export default LinkComponent