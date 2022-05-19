import React from 'react'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import linkedinIcon from '../public/images/linkedin-icon.png'

const Project: React.FC = () => {
   return (
      <article className={styles.project}>
         <h1 className={styles.project__title}>My Projects</h1>
         <section className={styles.project__cards}>
            <div className={styles.project__card}>
               <Image src={linkedinIcon} alt="linkedin icon" width={150} height={150} />

               <h3 className={styles.card__title}>LinkedIn Clone</h3>
               <p className={styles.card__description}>
                  This project built with React, Redux and Firestore. Mostly focus on layout of LinkedIn.
               </p>

               <ul className={styles.project__links}>
                  <li className={styles.project__link}>
                     <a href="#">Live Demo</a>
                  </li>
                  <li className={styles.project__link}>
                     <a href="#">Github Link</a>
                  </li>
               </ul>
            </div>
            <div className={styles.project__card}>
               <Image src={linkedinIcon} alt="linkedin icon" width={150} height={150} />

               <h3 className={styles.card__title}>GardenJS Project</h3>
               <p className={styles.card__description}>
                  This is team project built with React, Redux, Nodejs, ExpressJS, JWT and MangoDB.
               </p>

               <ul className={styles.project__links}>
                  <li className={styles.project__link}>
                     <a href="#">Live Demo</a>
                  </li>
                  <li className={styles.project__link}>
                     <a href="#">Github Link</a>
                  </li>
               </ul>
            </div>
         </section>
      </article>
   )
}
export default Project
