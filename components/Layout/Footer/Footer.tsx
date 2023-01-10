import React from 'react'
import SendMessageForm from '../../form/SendMessageForm'

const Footer: React.FC = () => {
   return (
      <section className="text-White bg-Dark_Gray p-4">
         <div className="flex flex-col items-center text-center mt-4 ">
            <h1 className="text-large font-bold">Contact</h1>
            <p>
               I would love to hear about your project and how I could help. Please fill in the form, and I&apos;ll get
               back to you as soon as possible.
            </p>
         </div>
         <SendMessageForm />
      </section>
   )
}

export default Footer

/**
 * create a separeta component for the circle and ring svg
 *
 */
