import Image from 'next/image'

import { ActiveLink } from '@/components/active-link'

import styles from './page.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <ActiveLink className={styles.logo} href='/'>
          <Image
            src='/walter-logo.svg'
            alt='Walter Logo'
            width={257}
            height={52}
            className={styles.logo}
          />
        </ActiveLink>

        <div className={styles.rhs}>
          {/* <Button asChild>
            <ActiveLink href='/signup'>Sign up</ActiveLink>
          </Button> */}
        </div>
      </div>
    </header>
  )
}
