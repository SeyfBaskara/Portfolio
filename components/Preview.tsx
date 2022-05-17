import Image from 'next/image'
import profile from '../public/images/profile.jpg'
import linkedInIcon from '../public/icons/linkedin.png'
import githubIcon from '../public/icons/github.png'
import gmailIcon from '../public/icons/gmail-logo.png'
import styles from '../styles/Preview.module.css'

const Preview = (): JSX.Element => {
   return (
      <article className={styles.preview}>
         <section className={styles.preview__detail}>
            <h1 className={styles.preview__title}>Hey, I'm Seyfettin</h1>
            <div>
               <p className={styles.preview__description}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
               </p>
               <p>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged.
               </p>
               <p>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged.
               </p>
            </div>
         </section>
         <section className={styles.preview__profile}>
            <Image src={profile} alt="Profile" placeholder="blur" priority={true} width={250} height={250} />
            <div className={styles.preview__links}>
               <a href="#" target="_blank" rel="noreferrer">
                  <Image src={linkedInIcon} alt="LinkedIn icon" width={25} height={25} />
               </a>
               <a className={styles.preview__githubLink} href="#" target="_blank" rel="noreferrer">
                  <Image src={githubIcon} alt="Github icon" width={25} height={25} />
               </a>
               <a href="#" target="_blank" rel="noreferrer">
                  <Image src={gmailIcon} alt="Gmail icon" width={25} height={25} />
               </a>
            </div>
         </section>
      </article>
   )
}
export default Preview
