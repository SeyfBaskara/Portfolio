import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

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
   const { register, handleSubmit, reset } = useForm<FormValues>()

   const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log(data)
      reset()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 mt-10">
         <label htmlFor="name" className={`${style.label}`}>
            <span className={`${style.span}`}>NAME</span>
            <input
               className={`${style.input}`}
               type="text"
               autoComplete="off"
               {...register('name', { required: true })}
            />
         </label>

         <label htmlFor="email" className={`${style.label}`}>
            <span className={`${style.span}`}>EMAIL</span>
            <input
               className={`${style.input}`}
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
         </label>

         <label htmlFor="message" className={`${style.label}`}>
            <span className={`${style.span}`}>MESSAGE</span>
            <input
               className={`${style.input}`}
               type="text"
               autoComplete="off"
               {...register('message', { required: true })}
            />
         </label>

         <div className="flex justify-end">
            <input
               type="submit"
               value="SEND MESSAGE"
               className="border-b border-Green text-base font-bold p-1 w-36 cursor-pointer"
            />
         </div>
      </form>
   )
}

export default SendMessageForm
