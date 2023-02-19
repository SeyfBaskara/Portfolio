import React, { useState } from 'react'
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { Transition } from '@headlessui/react'

const AboutMe = (): JSX.Element => {
   const [isShowing, setIsShowing] = useState<boolean>(false)
   const [isAnimate, setIsAnimate] = useState<boolean>(false)

   return (
      <section className="p-4 md:w-11/12 md:m-auto lg:w-4/5">
         <div className="flex flex-col items-center gap-5 mt-3">
            <button
               onClick={() => setIsShowing(!isShowing)}
               onMouseEnter={() => setIsAnimate(true)}
               onMouseLeave={() => setIsAnimate(false)}
               className="flex flex-col items-center font-semibold tracking-widest hover:text-Green focus:text-Green"
            >
               ABOUT ME
               {isShowing ? (
                  <ChevronDoubleUpIcon className={`w-6 h-6 ${isAnimate && 'animate-bounce'} `} />
               ) : (
                  <ChevronDoubleDownIcon className={`w-6 h-6 ${isAnimate && 'animate-bounce'} `} />
               )}
            </button>
            <Transition
               show={isShowing}
               as="p"
               enter="transition-opacity duration-75"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="transition-opacity duration-150"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
               className="text-base  md:w-4/5 "
            >
               There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
               in some form, by injected humour, or randomised words which dont look even slightly believable. If you
               are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in
               the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
               necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
               words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
               reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
               non-characteristic words etc.
            </Transition>
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
