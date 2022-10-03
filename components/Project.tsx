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
      <article id="projects" className={styles.project__container}>
         <section className={styles.project}>
            <h1 className={styles.project__title}>My Projects</h1>
            <ul className={styles.project__cards}>
               {data.projects.map((project) => {
                  return (
                     <li key={project.id} className={styles.project__card}>
                        <div className={styles.card__img}>
                           <Image
                              src={`/images/${project.img}.png`}
                              priority={true}
                              blurDataURL="blur"
                              alt="image"
                              layout="fill"
                           />
                        </div>
                        <div className={styles.card__text}>
                           <h3 className={styles.card__title}>{project.title}</h3>
                           <p className={styles.card__description}>{project.description}</p>

                           <div className={styles.project__links}>
                              <a
                                 href={project.liveUrl}
                                 target="_blank"
                                 rel="noreferrer"
                                 className={styles.project__link}
                              >
                                 Live Demo
                              </a>
                              <a
                                 href={project.githubUrl}
                                 target="_blank"
                                 rel="noreferrer"
                                 className={styles.project__link}
                              >
                                 Github Link
                              </a>
                           </div>
                        </div>
                     </li>
                  )
               })}
            </ul>
         </section>
      </article>
   )
}
export default Project
