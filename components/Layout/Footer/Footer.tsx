import SendMessageForm from '../../form/SendMessageForm'
import Nav from '../Nav'
import PaternCircle from '../../PaternCircle'

const Footer = (): JSX.Element => {
   return (
      <footer className="text-White bg-Dark_Gray p-4 pb-10 relative">
         <article className="flex flex-col gap-6 md:w-11/12 md:m-auto lg:w-4/5">
            <section className="sm:w-8/12 sm:m-auto lg:flex lg:w-full lg:justify-between">
               <div className="flex flex-col items-center text-center mt-4 lg:basis-[20rem] lg:text-left lg:pt-8 ">
                  <h1 className="text-large font-bold lg:text-xl">Contact</h1>
                  <p className="text-base">
                     I would love to hear about your project and how I could help. Please fill in the form, and
                     I&apos;ll get back to you as soon as possible.
                  </p>
               </div>
               <SendMessageForm />
            </section>
            <Nav footer={true} />
         </article>
         <PaternCircle footer={true} />
      </footer>
   )
}

export default Footer
