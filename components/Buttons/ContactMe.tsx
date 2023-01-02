import React from 'react'

const ContactMe: React.FC = () => {
   const handleContactMe = () => {
      console.log('contact me')
   }
   return (
      <div>
         <button onClick={handleContactMe} className="font-semibold tracking-widest border-b-2 border-Green pb-1">
            CONTACT ME
         </button>
      </div>
   )
}

export default ContactMe
