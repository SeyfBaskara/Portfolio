import React from 'react'
import styles from '../styles/AboutWidget.module.css'

const AboutWidget = (): JSX.Element => {
   return (
      <article className={styles.container}>
         <div className={styles.card}>
            <h3 className={styles.title}>Card 1</h3>
         </div>
         <div className={styles.card}>
            <h3 className={styles.title}>Card 2</h3>
         </div>
         <div className={styles.card}>
            <h3 className={styles.title}>Card 3</h3>
         </div>
         <div className={styles.card}>
            <h3 className={styles.title}>Card 4</h3>
         </div>
      </article>
   )
}

export default AboutWidget
