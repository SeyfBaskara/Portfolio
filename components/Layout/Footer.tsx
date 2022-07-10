import React from 'react'
import styles from '../../styles/Layout.module.css'

const Footer = (): JSX.Element => {
   return (
      <footer className={styles.footer__container}>
         <div className={styles.footer}>
            <section className={styles.footer__name}>
               <p>Build with Next.js, Typescript and Vercel</p>
            </section>
            <section className={styles.footer__links}>
               <a href="https://www.linkedin.com/in/seyfettinbaskara/" target="_blank" rel="noreferrer">
                  LinkedIn
               </a>
               <a href="https://github.com/SeyfBaskara" target="_blank" rel="noreferrer">
                  Github
               </a>
            </section>
         </div>
      </footer>
   )
}

export default Footer
