import React, { useState } from 'react'
import styles from '../styles/AboutWidget.module.css'
import Image from 'next/image'
import customData from '../data/data.json'

interface Assets {
   iconNames: Array<string>
}

const AboutWidget: React.FC = () => {
   const [data, setData] = useState<Assets>(customData)

   return (
      <article className={styles.widget__container}>
         <div className={styles.widget}>
            <h1 className={styles.widget__title}>Tech Skills</h1>
            <section className={styles.cards}>
               {data.iconNames.map((path) => {
                  return (
                     <div key={path} className={styles.card}>
                        <Image src={`/icons/tools/${path}.svg`} priority={true} alt="icons" height={60} width={60} />
                        <p>{path.charAt(0).toUpperCase() + path.slice(1)}</p>
                     </div>
                  )
               })}
            </section>
         </div>
      </article>
   )
}

export default AboutWidget
