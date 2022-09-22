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
   const [files, setFiles] = useState<any>(null)

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

   const handleOnChange = (e: any) => {
      e.preventDefault()
      if (e.target.files && e.target.files[0]) {
         setFiles(e.target.files)
      }
   }

   const handleSubmit = (e: any) => {
      e.preventDefault()
      const url = URL.createObjectURL(files[0])
      console.log(url)
   }

   return (
      <article id="about" className={styles.about__container}>
         <div className={styles.about}>
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

               <form onSubmit={handleSubmit}>
                  <input type="file" onChange={handleOnChange} />
                  <input type="submit" />
               </form>
            </section>
         </div>
      </article>
   )
}

export default About
