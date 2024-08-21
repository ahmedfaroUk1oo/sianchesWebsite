"use client"
import Image from 'next/image'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import withoutAuth from '../Auth/withoutAuth';
import ChangePassForm from './ChangePassForm';

function ChangePassComponent() {
  return (
    <>
       <Toaster />
       <section className='grid grid-cols-2 max-md:grid-cols-1 h-screen gap-[40px] '>
        <div className="img max-md:hidden">
            <Image src={'/assets/signHeader.webp'} alt="Sign In" width={756} height={982} priority className='w-full  inline-block h-screen   object-cover object-center' />
        </div>
           <ChangePassForm />
      </section>
    </>
  )
}
export default  withoutAuth(ChangePassComponent)