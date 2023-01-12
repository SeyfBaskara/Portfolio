import React from 'react'

const ContactMe = (): JSX.Element => {
   const handleContactMe = () => {
      console.log('contact me')
   }
   return (
      <div>
         <button
            onClick={handleContactMe}
            className="font-semibold tracking-widest border-b-2 border-Green pb-1 hover:text-Green"
         >
            CONTACT ME
         </button>
      </div>
   )
}

export default ContactMe
