import React, { useState, useEffect } from 'react'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import customData from '../data/data.json'

interface Projects {
   projects: Array<{
      title: string
      description: string
      githubUrl: string
      liveUrl: string
      img: string
      id: string
   }>
}

const Project: React.FC = () => {
   const [data, setData] = useState<Projects>(customData)

   useEffect(() => {
      setData(customData)
   }, [data])

   return (
      <article className={styles.project}>
         <h1 className={styles.project__title}>My Projects</h1>
         <section className={styles.project__cards}>
            {data.projects.map((project) => {
               return (
                  <div key={project.id} className={styles.project__card}>
                     <Image
                        src={`/images/${project.img}.png`}
                        priority={true}
                        blurDataURL="blur"
                        alt="image"
                        width={project.img === 'gardenjs' ? 400 : project.img === 'bluebird' ? 230 : 200}
                        height={project.img === 'gardenjs' ? 195 : project.img === 'bluebird' ? 150 : 150}
                     />
                     <h3 className={styles.card__title}>{project.title}</h3>
                     <p className={styles.card__description}>{project.description}</p>

                     <ul className={styles.project__links}>
                        <li className={styles.project__link}>
                           <a href={project.liveUrl} target="_blank" rel="noreferrer">
                              Live Demo
                           </a>
                        </li>
                        <li className={styles.project__link}>
                           <a href={project.githubUrl} target="_blank" rel="noreferrer">
                              Github Link
                           </a>
                        </li>
                     </ul>
                  </div>
               )
            })}
         </section>
      </article>
   )
}
export default Project
