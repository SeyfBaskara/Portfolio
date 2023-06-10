import React, { useState } from 'react'
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { Transition } from '@headlessui/react'

interface IAboutMeProps {
   about: string
}

const AboutMe: React.FC<IAboutMeProps> = ({ about }) => {
   const [isShowing, setIsShowing] = useState<boolean>(false)
   const [isAnimate, setIsAnimate] = useState<boolean>(false)

   return (
      <section className="p-4 md:w-11/12 md:m-auto lg:w-4/5">
         <div className="flex flex-col items-center gap-5 mt-3 ">
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
               className="text-base whitespace-pre-line leading-relaxed tracking-wide"
            >
               {about}
            </Transition>
         </div>
      </section>
   )
}

export default AboutMe
