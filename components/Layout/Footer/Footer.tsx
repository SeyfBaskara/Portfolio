import SendMessageForm from '../../Form/SendMessageForm'
import PlatformLinks from '../../Links/PlatformLinks'

const Footer = (): JSX.Element => {
   return (
      <footer className="text-White bg-Dark_Gray p-4 pb-10 relative" id="contact">
         <div className="flex flex-col gap-6 md:w-11/12 md:m-auto lg:w-4/5">
            <div className="sm:w-8/12 sm:m-auto lg:flex lg:w-full lg:justify-between">
               <div className="flex flex-col items-center text-center mt-4 lg:basis-[20rem] lg:text-left lg:pt-8 ">
                  <h1 className="text-large font-bold lg:text-xl">Contact</h1>
               </div>

               <SendMessageForm />
            </div>

            <PlatformLinks footer={true} />
         </div>
      </footer>
   )
}

export default Footer
