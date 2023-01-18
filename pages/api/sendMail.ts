import sgMail from '@sendgrid/mail'
import { NextApiResponse } from 'next'

interface BodyContent {
   email: string
   name?: string
   message: string
}

interface Body {
   body: BodyContent
}

export default async function handler({ body }: Body, res: NextApiResponse) {
   try {
      if (!process.env.SENDGRID_API_KEY) {
         return res.status(500).send('No Api Key')
      }
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const { email, name, message }: BodyContent = body

      const toEmail = 'seyfettinbaskara@gmail.com'

      const msg = {
         to: toEmail,
         from: 'noreply@seyfettinbaskara.dev',
         subject: `New message from portfolio contact form`,
         text: `
Email: ${email}
Name: ${name}
Message: ${message}
`,
      }

      await sgMail.send(msg)

      await sgMail.send({
         to: email,
         from: 'noreply@seyfettinbaskara.dev',
         subject: `Thank you for reaching out!`,

         content: [
            {
               type: 'text/html',
               value: `  <head>
             <meta charset="UTF-8" />
             <title>Document</title>
             <link href="http://fonts.cdnfonts.com/css/futura-pt" rel="stylesheet" />
             <style>
             .body {
               background-color: white;
             }
             .title, .name {
               font-family: "Futura PT", sans-serif;
             }      
             </style>
           </head>
           <body class="white">
             <main>
               <h4 class="title">Dear ${name?.charAt(0).toUpperCase()}${name?.slice(1)},</h1>
               <p>Thank you for reaching out through my portfolio. I appreciate your interest in my work and am happy to answer any questions you may have.</p>
               <p>I have received your message and will respond as soon as possible. In the meantime, if you have any further questions or concerns, please do not hesitate to reach out.</p>
               <p>Thank you again for your time!</p>
               <h4 class="name"><span>Best Regards,<span><br/>Seyfettin Baskara</h4>
               </main>
           </body>`,
            },
         ],
      })

      res.status(200).send(body)
   } catch (error) {
      console.error(error)
      res.status(500).send(error)
   }
}
