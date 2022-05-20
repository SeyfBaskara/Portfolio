import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/About.module.css'
import customData from '../data/data.json'

interface Profile {
   profile: Array<{ title: string; subtitle: string; description: string; date: string; id: string }>
}

const About: React.FC = () => {
   const [data, setData] = useState<Profile>(customData)
   const [selectedIndex, setSelectedIndex] = useState<number>(1)
   const [cellCount, setCellCount] = useState<number>(6)
   const [angle, setAngle] = useState<number>()
   const elementRef = useRef<any>()

   useEffect(() => {
      setSelectedIndex(selectedIndex + 1)
      rotateCarousel()
   }, [])

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
               {data.profile.map((el) => {
                  return (
                     <div className={styles.card} key={el.id}>
                        <h2 className={styles.card__title}>{el.title}</h2>
                        <p className={styles.card__subtitle}>{el.subtitle} </p>
                        <p className={styles.card__description}>{el.description}</p>
                        <p className={styles.card__date}>{el.date}</p>
                     </div>
                  )
               })}
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
