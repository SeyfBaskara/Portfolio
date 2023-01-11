import SendMessageForm from '../../form/SendMessageForm'
import Nav from '../Header/Nav'

const Footer = (): JSX.Element => {
   return (
      <section className="flex flex-col gap-6 text-White bg-Dark_Gray p-4 pb-10">
         <div className="flex flex-col items-center text-center mt-4 ">
            <h1 className="text-large font-bold">Contact</h1>
            <p className="text-base">
               I would love to hear about your project and how I could help. Please fill in the form, and I&apos;ll get
               back to you as soon as possible.
            </p>
         </div>
         <SendMessageForm />
         <Nav />
      </section>
   )
}

export default Footer
