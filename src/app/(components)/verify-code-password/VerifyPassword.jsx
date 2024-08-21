"use client"
import Image from 'next/image';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import withoutAuth from '../Auth/withoutAuth';
import VerifyPassComponent from './VerifyPassComponent';
 function VerifyPassword() {
  return (
    <>
      <Toaster />
      <section className='grid grid-cols-2 max-md:grid-cols-1 h-screen gap-[40px] '>
        <div className="img max-md:hidden">
            <Image src={'/assets/signHeader.webp'} alt="Sign In" width={756} height={982} priority className='w-full h-screen inline-block   object-cover object-center' />
        </div>
        
         <VerifyPassComponent />
            
         
       
      </section>
    </>
  )
}
export default withoutAuth(VerifyPassword)