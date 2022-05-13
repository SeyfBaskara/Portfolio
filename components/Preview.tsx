import Image from 'next/image'
import profile from '../public/images/profile.jpg'
import styles from '../styles/Preview.module.css'

const Preview = (): JSX.Element => {
   return (
      <article className={styles.preview}>
         <section className={styles.preview__detail}>
            <h1>Hey I'm Seyfettin</h1>
            <div>
               <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged.
               </p>
            </div>
         </section>
         <section>
            <Image src={profile} alt="Profile" priority={true} width={250} height={250} />
         </section>
      </article>
   )
}
export default Preview
