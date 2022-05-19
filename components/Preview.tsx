import React, { useState } from 'react'
import Image from 'next/image'
import profile from '../public/images/profile.jpg'
import styles from '../styles/Preview.module.css'
import customData from '../data/data.json'

interface Assets {
   logoNames: Array<string>
   linkedinUrl: string
   githubUrl: string
   gmailUrl: string
}

const Preview: React.FC = () => {
   const [data, setData] = useState<Assets>(customData[0])
   return (
      <article className={styles.preview}>
         <section className={styles.preview__content}>
            <section className={styles.preview__detail}>
               <h2 className={styles.preview__title}>Hey, I&apos;m Seyfettin</h2>
               <div className={styles.preview__description}>
                  <p>
                     I&apos;m a Full-Stack developer. I work as a Full-Stack developer consultant at
                     <span className={styles.preview__span}>School of Applied Technology &lt;/ Salt&gt;</span>
                  </p>
                  <p>
                     Currently focusing on developing Frontend projects with React, Redux and its frameworks. New to Next.js,
                     Typscript and React Native.
                  </p>
               </div>
            </section>
            <section className={styles.preview__profile}>
               <div className={styles.profile_wrapper}>
                  <Image src={profile} alt="Profile" placeholder="blur" priority={true} width={250} height={250} />
               </div>
               <div className={styles.preview__links}>
                  {data.logoNames.map((path) => {
                     return (
                        <a
                           key={path}
                           href={path === 'linkedin' ? data.linkedinUrl : path === 'github' ? data.githubUrl : data.gmailUrl}
                           target="_blank"
                           rel="noreferrer"
                        >
                           <Image src={`/icons/${path}.png`} alt="icons" width={25} height={25} />
                        </a>
                     )
                  })}
               </div>
            </section>
         </section>
      </article>
   )
}
export default Preview
