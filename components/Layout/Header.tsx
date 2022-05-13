import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Header.module.css'

const Header = (): JSX.Element => {
   return (
      <header className={styles.header}>
         <section className={styles.header__name}>
            <Link href="/">
               <a>
                  <h1>Seyfettin Baskara</h1>
               </a>
            </Link>
         </section>
         <section className={styles.header__links}>
            <Link href="/about">
               <a>About</a>
            </Link>
            <Link href="projects">
               <a>Projects</a>
            </Link>
         </section>
      </header>
   )
}

export default Header
