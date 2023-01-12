import Nav from './Nav'
import ProfilePhoto from '../../ProfilePhoto'
import ContactMe from '../../Buttons/ContactMe'
import PaternCircle from '../../PaternCircle'

const Header = (): JSX.Element => {
   return (
      <header className="flex flex-col items-center text-White relative overflow-hidden pt-5">
         <h1 className="font-bold text-md mb-2">SeyfettinBaskara</h1>
         <section className="flex flex-col items-center">
            <ProfilePhoto />
            <article className="flex flex-col items-center text-center gap-5">
               <h2 className="text-[2rem] font-bold">
                  I&apos;m <span className="border-b-4 border-Green">Seyfettin Baskara.</span>
               </h2>
               <p className="text-base px-4">
                  Based in the Sweden, I’m a full-stack developer passionate about building accessible web apps that
                  users love.
               </p>
               <ContactMe />
            </article>
         </section>
         <PaternCircle header={true} />
      </header>
   )
}

export default Header
