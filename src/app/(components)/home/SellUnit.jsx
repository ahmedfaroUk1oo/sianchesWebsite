import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function SellUnit() {
  return (
    <>
      <section className='my-8'>
        <div className="container w-full m-auto text-center">
<div className="grid max-w-[1170px] h-fit lg:grid-cols-2 m-auto  gap-[30px] grid-cols-1  bg-[rgba(248,248,247,1)] items-center">
<div className="text p-8 max-lg:text-center text-start flex flex-col gap-[24px] ">
    <h3 className='text-[32px] max-sm:text-[1rem] max-sm:leading-[1.5rem] leading-[44px] font-[900] text-[rgba(45,45,45,1)]'>Sell Your Property With SIANCHES</h3>
    <Link href='#'  className='flex justify-center max-lg:m-auto max-lg:w-1/2 items-center gap-[5px] text-[16px] leading-[21px] font-normal text-[rgba(248,248,247,1)] w-[199px]  h-[56px] bg-[rgba(45,45,45,1)] max-[300px]:flex-col max-[300px]:w-full'>Sell your unit <MdArrowOutward className='inline-block w-[12px] h-[12px]' /></Link>
</div>
<div className="img">
    <Image src='/assets/sell.webp' alt='Sell Unit' width={656} height={408} className='w-[656px] max-[1350px]:w-[456px] max-[1100px]:w-[300px] h-[408px] m-auto  max-lg:m-auto max-lg:h-full lg:scale-[1.2]' />
</div>
</div>
        </div>
        </section>
    </>
  )
}
