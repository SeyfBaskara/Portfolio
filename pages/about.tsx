import styles from '../styles/About.module.css'
import About from '../components/About'

const AboutPage = (): JSX.Element => {
   return (
      <article className={styles.about}>
         <About />
      </article>
   )
}

export default AboutPage
