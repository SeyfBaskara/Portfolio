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
         from: 'Hello@seyfettinbaskara.dev',
         subject: `New web form message from ${email}`,
         text: `
Email: ${email}
Name: ${name}
Message: ${message}
`,
      }

      await sgMail.send(msg)

      res.status(200).send(body)
   } catch (error) {
      console.error(error)
      res.status(500).send(error)
   }
}
