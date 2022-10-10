import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Layout.module.css'

const Header = (): JSX.Element => {
   return (
      <header className={styles.header__container}>
         <div className={styles.header}>
            <section className={styles.header__name}>
               <Link href="/">
                  <a>Seyfettin Baskara</a>
               </Link>
            </section>
            <section className={styles.header__links}>
               <Link href="#about">
                  <a>Cv</a>
               </Link>
               <Link href="#projects">
                  <a>Projects</a>
               </Link>
            </section>
         </div>
      </header>
   )
}

export default Header
