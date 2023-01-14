import React from 'react'

const ContactMe = (): JSX.Element => {
   const handleContactMe = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
   }
   return (
      <div>
         <button
            onClick={handleContactMe}
            className="font-semibold tracking-widest border-b-2 border-Green pb-1 outline-none hover:text-Green focus:text-Green "
         >
            CONTACT ME
         </button>
      </div>
   )
}

export default ContactMe
