import React from 'react'
import styles from '../../styles/Footer.module.css'

const Footer = (): JSX.Element => {
   return (
      <footer className={styles.footer}>
         <section className={styles.footer__name}>
            <p>Build with Next.js</p>
         </section>
         <section className={styles.footer__links}>
            <a href="#" target="_blank" rel="noreferrer">
               LinkedIn
            </a>
            <a href="#" target="_blank" rel="noreferrer">
               Github
            </a>
         </section>
      </footer>
   )
}

export default Footer
