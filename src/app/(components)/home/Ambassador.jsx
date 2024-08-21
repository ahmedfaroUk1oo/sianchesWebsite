"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function Ambassador() {
 const {user} = useSelector(state => state.profile)

  return (
    <>
     {!user &&  <section className='my-8'>
        <div className="container w-full m-auto text-center">
<div className="grid max-w-[1170px] h-fit lg:grid-cols-2 m-auto  gap-[30px] grid-cols-1  bg-[rgba(248,248,247,1)] items-center">
<div className="img">
    <Image src='/assets/key.webp' alt='keys image' width={656} height={408} className='w-[656px] max-[1350px]:w-[456px] max-[1100px]:w-[300px] h-[408px] m-auto  max-lg:m-auto max-lg:h-full lg:scale-[1.2]' />
</div>
<div className="text p-8 max-lg:text-center text-start flex flex-col gap-[24px] ">
    <h3 className='text-[32px] max-sm:text-[1rem] max-sm:leading-[1.5rem] leading-[44px] font-[900] text-[rgba(45,45,45,1)]'>Become an ambassador</h3>
    <Link href='/sign-up'  className='flex max-[300px]:flex-col max-[300px]:w-full justify-center max-lg:m-auto max-lg:w-1/2 items-center gap-[5px] text-[16px] leading-[21px] font-normal text-[rgba(248,248,247,1)] w-[199px]  h-[56px] bg-[rgba(45,45,45,1)]'>Register Now <MdArrowOutward className='inline-block w-[12px] h-[12px]' /></Link>
</div>

</div>
        </div>
        </section>}
    </>
  )
}
