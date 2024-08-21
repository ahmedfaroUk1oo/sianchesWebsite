"use client"
import Image from 'next/image'
import React from 'react'
import SignUpForm from './SignUpForm'
import toast, { Toaster } from 'react-hot-toast';
import withoutAuth from '../Auth/withoutAuth';
 function SignUpComponent() {
  return (
    <>
     <Toaster />
       <section className='grid grid-cols-2 max-md:grid-cols-1 min-h-screen gap-[40px] '>
        <div className="img max-md:hidden">
            <Image src={'/assets/signHeader.webp'} alt="Sign In" width={756} height={982} priority className='w-full h-full inline-block min-h-screen   object-cover object-center' />
        </div>
        <div className="container mt-[80px] m-auto w-full ">
            <div className="logo  text-center">
            <Image src={'/assets/signLogo.svg'} alt="Logo" width={200} height={200} priority className='max-w-[224.34px] inline-block max-h-[67px] object-cover object-center' />
            </div>
            <SignUpForm />
        </div>
      </section>
    </>
  )
}

export default withoutAuth(SignUpComponent)
