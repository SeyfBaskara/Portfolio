import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import circleIcon from '../public/icons/circle.png'

const About: React.FC = () => {
   const [selectedIndex, setSelectedIndex] = useState<number>(0)
   const [cellCount, setCellCount] = useState<number>(6)
   const [angle, setAngle] = useState<number>(0)
   const elementRef = useRef<any>()

   const rotateCarousel = () => {
      setAngle((selectedIndex / cellCount) * -360)
      elementRef.current.style.transform = `translateZ(-288px) rotateY(${angle}deg)`
   }

   const handleTurn = () => {
      setSelectedIndex(selectedIndex + 1)
      rotateCarousel()
   }

   return (
      <article className={styles.about}>
         <h1 className={styles.about__title}>Time Carousel</h1>
         <section className={styles.scene}>
            <div className={styles.cards} ref={elementRef}>
               <div className={styles.card}>
                  <h2 className={styles.card__title}>Bachelor of Electrical Engineering</h2>
                  <p className={styles.card__subtitle}>University of Debreecen, Hungary </p>
                  <p className={styles.card__description}>
                     Graduated from faculty of Science Technology University of Debrecen. There could be more things here
                  </p>
                  <p className={styles.card__date}>2013 - 2018</p>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.card__title}>Bachelor of Electrical Engineering</h2>
                  <p className={styles.card__subtitle}>University of Debreecen, Hungary </p>
                  <p className={styles.card__description}>
                     Graduated from faculty of Science Technology University of Debrecen. There could be more things here
                  </p>
                  <p className={styles.card__date}>2013 - 2018</p>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.card__title}>Bachelor of Electrical Engineering</h2>
                  <p className={styles.card__subtitle}>University of Debreecen, Hungary </p>
                  <p className={styles.card__description}>
                     Graduated from faculty of Science Technology University of Debrecen. There could be more things here
                  </p>
                  <p className={styles.card__date}>2013 - 2018</p>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.card__title}>Bachelor of Electrical Engineering</h2>
                  <p className={styles.card__subtitle}>University of Debreecen, Hungary </p>
                  <p className={styles.card__description}>
                     Graduated from faculty of Science Technology University of Debrecen. There could be more things here
                  </p>
                  <p className={styles.card__date}>2013 - 2018</p>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.card__title}>Bachelor of Electrical Engineering</h2>
                  <p className={styles.card__subtitle}>University of Debreecen, Hungary </p>
                  <p className={styles.card__description}>
                     Graduated from faculty of Science Technology University of Debrecen. There could be more things here
                  </p>
                  <p className={styles.card__date}>2013 - 2018</p>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.card__title}>Bachelor of Electrical Engineering</h2>
                  <p className={styles.card__subtitle}>University of Debreecen, Hungary </p>
                  <p className={styles.card__description}>
                     Graduated from faculty of Science Technology University of Debrecen. There could be more things here
                  </p>
                  <p className={styles.card__date}>2013 - 2018</p>
               </div>
            </div>
         </section>
         <section className={styles.about__bottom}>
            <button className={styles.turn__button} onClick={handleTurn}>
               View Next
            </button>
         </section>
      </article>
   )
}

export default About
