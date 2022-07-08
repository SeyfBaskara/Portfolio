import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Layout.module.css'

const Header = (): JSX.Element => {
   return (
      <header className={styles.header}>
         <section className={styles.header__name}>
            <Link href="/">
               <a>Seyfettin Baskara</a>
            </Link>
         </section>
         <section className={styles.header__links}>
            <Link href="#about">
               <a>About</a>
            </Link>
            <Link href="#projects">
               <a>Projects</a>
            </Link>
         </section>
      </header>
   )
}

export default Header
