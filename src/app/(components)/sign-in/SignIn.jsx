import Image from 'next/image'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import SignInForm from './SignInComponent';

export default function SignInComponent() {
  return (
    <>
      <Toaster />
       <section className='grid grid-cols-2 max-md:grid-cols-1 h-screen gap-[40px] '>
        <div className="img">
            <Image src={'/assets/signHeader.webp'} alt="Sign In" width={756} height={982} priority className='w-full  inline-block h-screen   object-cover object-center' />
        </div>
        <div className="container mt-[80px]   m-auto w-full flex flex-col items-center gap-[16px] ">
            <div className="logo  text-center mb-[50px] ">
            <Image src={'/assets/signLogo.svg'} alt="Logo" width={200} height={200} priority className='max-w-[224.34px] inline-block max-h-[67px] object-cover object-center' />
            </div>
           <SignInForm />
        </div>
      </section>
    </>
  )
}
