import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
   const isMaintenance = true
   const MaintenancePage = () => (
      <div className="flex justify-center items-center text-white">
         <div className="text-center">
            <h1 className="text-md font-bold mb-4 mt-4">Portfolio Update in Progress</h1>
            <p className="text-large mb-3">
               Thanks for visiting! My portfolio is currently undergoing a refresh to showcase my latest work.
            </p>
            <p className="text-md">
               If you&apos;d like to get in touch or discuss a project, feel free to{' '}
               <a href="mailto:seyfettin.baskara@gmail.com" className="text-blue-400 underline">
                  send me an email
               </a>
               . Thank you!
            </p>
         </div>
      </div>
   )
   return (
      <>
         {isMaintenance ? <MaintenancePage /> : <Component {...pageProps} />}
         {/* <Component {...pageProps} /> */}
      </>
   )
}

export default MyApp
