import React from 'react'
import ContactMe from '../../Buttons/ContactMe'
import ProfilePhoto from '../../ProfilePhoto'

const Header = () => {
   return (
      <header className="text-White flex flex-col text-center">
         <h1 className="font-bold text-md">SeyfettinBaskara</h1>
         <section className="flex flex-col text-center">
            <div>
               <ProfilePhoto />
            </div>
            <div className="flex flex-col gap-5">
               <h2 className="text-[2rem] font-bold">
                  I&apos;m <span className="border-b-4 border-Green">Seyfettin Baskara.</span>
               </h2>
               <p className="text-base">
                  Based in the Sweden, I’m a full-stack developer passionate about building accessible web apps that
                  users love.
               </p>
               <ContactMe />
            </div>
         </section>
      </header>
   )
}

export default Header
