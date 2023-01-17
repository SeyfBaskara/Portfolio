import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

type FormValues = {
   name: string
   email: string
   message: string
}

const style = {
   label: 'flex flex-col',
   span: 'text-Grey font-semibold text-sm pl-5',
   input: 'p-1 text-base bg-Dark_Gray border-b border-Grey focus:outline-none focus:border-Green',
}

const SendMessageForm = () => {
   const [loading, setLoading] = useState<boolean>(false)
   const [error, setError] = useState<boolean>(false)
   const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting, isSubmitSuccessful },
   } = useForm<FormValues>()

   const onSubmit: SubmitHandler<FormValues> = async (formState) => {
      console.log(formState)

      setLoading(true)
      const response = await axios.post('/api/sendMail', formState)
      setLoading(false)

      if (response.status !== 200) {
         setError(true)
         setTimeout(() => {
            setError(false)
         }, 5000)
         return
      }

      reset()
      setError(false)
      setHasSubmitted(true)

      setTimeout(() => {
         setHasSubmitted(false)
      }, 5000)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 py-16 lg:basis-1/2">
         <label htmlFor="name" className={`${style.label}`}>
            <span className={`${style.span}`}>NAME</span>
            <input
               className={`${style.input} ${errors.name && 'focus:border-red-400'}`}
               type="text"
               autoComplete="off"
               {...register('name', { required: true })}
            />
            {errors.name && errors.name.type === 'required' && (
               <span role="alert" className="pt-1 text-red-400">
                  Name is required
               </span>
            )}
         </label>

         <label htmlFor="email" className={`${style.label}`}>
            <span className={`${style.span}`}>EMAIL</span>
            <input
               className={`${style.input} ${errors.email && 'focus:border-red-400'}`}
               type="email"
               autoComplete="off"
               {...register('email', {
                  required: true,
                  pattern: {
                     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/i,
                     message: 'Please provide an valid email',
                  },
               })}
            />
            {errors.email && errors.email.type === 'required' && (
               <span role="alert" className="pt-1 text-red-400">
                  Email is required
               </span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
               <span role="alert" className="pt-1 text-red-400">
                  Invalid email address
               </span>
            )}
         </label>

         <label htmlFor="message" className={`${style.label}`}>
            <span className={`${style.span}`}>MESSAGE</span>
            <textarea
               className={`${style.input} ${errors.message && 'focus:border-red-400'}`}
               rows={4}
               autoComplete="off"
               {...register('message', { required: true })}
            />
            {errors.message && errors.message.type === 'required' && (
               <span role="alert" className="pt-1 text-red-400">
                  Message is required
               </span>
            )}
         </label>

         <div>
            {loading && <p className="text-base text-center">Sending...</p>}
            {error && <p className="text-base text-center text-red-400">Something went wrong, try again...</p>}
            {hasSubmitted && <p className="text-base text-center text-Green">Your message has been sent!</p>}
         </div>

         <div className="flex justify-end">
            <input
               type="submit"
               value="SEND MESSAGE"
               className="border-b border-Green text-base font-bold py-1 cursor-pointer outline-none hover:text-Green focus:text-Green "
            />
         </div>
      </form>
   )
}

export default SendMessageForm
