import React from 'react'
import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface IProps {
   children: any
   metaData: {
      title: string
      description: string
      keywords: string
   }
}

const Layout: React.FC<IProps> = ({ children, metaData }) => {
   const { title, description, keywords } = metaData
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keybords" content={keywords} />
            <title>{title}</title>
         </Head>

         <div>
            <Header />
            <main className="text-White">{children}</main>
            <Footer />
         </div>
      </>
   )
}

export default Layout
