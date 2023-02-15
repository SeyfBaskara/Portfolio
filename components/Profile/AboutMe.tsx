import React from 'react'

const AboutMe = (): JSX.Element => {
   return (
      <section className="p-4 md:w-11/12 md:m-auto lg:w-4/5">
         <div className="text-center mt-3">
            <button
               onClick={() => console.log('about me')}
               className="font-semibold tracking-widest border-b-2 border-Green pb-1 outline-none hover:text-Green focus:text-Green "
            >
               ABOUT ME
            </button>
            <p>some text...</p>
         </div>
      </section>
   )
}

export default AboutMe

/**
 * TODO
 * should have toggle about me button display about me text
 * should have replace green border bottom with animated arrow icon
 * should scroll smoothly when button triggers
 *
 */
