import React from 'react'
import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children, metaData }: any): JSX.Element => {
   const { title, description, keywords } = metaData
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keybords" content={keywords} />
            <title>{title}</title>
         </Head>

         <Header />
         <main className="text-White">{children}</main>
         <Footer />
      </>
   )
}

export default Layout
