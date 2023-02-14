import ProfilePhoto from './ProfilePhoto'
import ContactMe from '../../Buttons/ContactMe'
import PaternCircle from '../../PaternCircle'

const Header = (): JSX.Element => {
   return (
      <header className="text-White relative overflow-hidden pt-5">
         <section className="md:w-11/12 md:m-auto lg:w-4/5">
            <header>
               <h1 className="font-bold text-md text-center mb-2 sm:text-left px-4">SeyfettinBaskara</h1>
            </header>

            <article className="flex flex-col items-center sm:flex-row-reverse sm:justify-between sm:w-full">
               <ProfilePhoto />
               <div className="flex flex-col items-center text-center gap-5 px-4 sm:px-0 sm:items-start sm:text-left sm:pl-4 sm:basis-1/2">
                  <h2 className="text-[2rem] font-bold">
                     I&apos;m <span className="border-b-4 border-Green">Seyfettin Baskara.</span>
                  </h2>
                  <p className="text-base">
                     Based in the Stockholm, I&apos;m fascinated by the endless possibilities of software development. I
                     love the feeling of solving problems, creating something new, and turning an idea into reality
                     through code. I always aim to deliver efficiency to the team also the work environment.
                  </p>
                  <ContactMe />
               </div>
            </article>
         </section>

         <PaternCircle header={true} />
      </header>
   )
}

export default Header
