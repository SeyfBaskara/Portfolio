import React from 'react'
import Image from 'next/image'
import ContactMe from '../../Buttons/ContactMe'
import ProfilePhoto from '../../ProfilePhoto'
import Nav from './Nav'

const Header = () => {
   return (
      <header className="flex flex-col items-center text-White relative overflow-hidden pt-5">
         <Nav />
         <section className="flex flex-col items-center">
            <ProfilePhoto />
            <div className="flex flex-col items-center text-center gap-5">
               <h2 className="text-[2rem] font-bold">
                  I&apos;m <span className="border-b-4 border-Green">Seyfettin Baskara.</span>
               </h2>
               <p className="text-base px-4">
                  Based in the Sweden, I’m a full-stack developer passionate about building accessible web apps that
                  users love.
               </p>
               <ContactMe />
            </div>
         </section>
         <section>
            <div className="absolute top-[21rem] -right-16 ">
               <Image src="/images/pattern-circle.svg" alt="pattern circle" width={129} height={129} />
            </div>
            <div className="absolute top-32 -left-[25rem]">
               <Image src="/images/pattern-rings.svg" alt="pattern circle" width={530} height={129} />
            </div>
         </section>
      </header>
   )
}

export default Header
