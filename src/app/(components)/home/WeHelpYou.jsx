"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from 'react-icons/md';
import { useSelector } from 'react-redux'
import Loader from './../loader/Loader';

export default function WeHelpYou() {


const {error,isLoading,we_help_you} = useSelector(state => state.homeApi)
console.log(we_help_you);

  return (
    <>
   {isLoading ? <Loader/> : error ? <div>{error}</div> :  <section className='my-10'>
   <div className="container m-auto  ">
       <div className="grid md:grid-cols-2 grid-cols-1 gap-[32px] max-lg:py-6 max-w-[1142px] h-fit max-md:h-fit max-md:text-center m-auto items-center" >
<div className="img">
{we_help_you?.main.image && (
                <Image
                  src={we_help_you.main.image}
                  alt={we_help_you.main.title}
                  priority
                  width={500}
                  height={500}
                  className="w-[570px] max-h-[660px] h-fit object-cover object-center inline-block"
                />
              )}
</div>
<div className="content flex flex-col gap-[22px]">
<h3 className='text-[40px] leading-[48.28px] text-[rgba(45,45,45,1)] font-[900]'>{we_help_you?.main.title}</h3>
<p className='text-[16px] leading-[27px] font-normal text-[rgba(45,45,45,1)]'>{we_help_you?.main.content}</p>
<Link href={'#'} className={'h-[56px] max-md:m-auto w-[178px] bg-[rgba(45,45,45,1)] flex justify-center items-center gap-2 text-[14px] leading-[21px] font-bold text-[rgba(248,248,247,1)]'}>Read More <MdArrowOutward className='inline-block'/></Link>
</div>

       </div>
       <div className="grid lg:grid-cols-4 my-8  grid-cols-2 max-sm:grid-cols-1  w-fit max-w-[1142px] h-fit max-h-fit m-auto items-center" >
       {we_help_you?.icons &&
  Object.entries(we_help_you.icons).map(([key, icon], index, array) => (
    <div
      key={key}
      className={`flex flex-col px-8  min-h-[162px] items-center text-center max-md:gap-[40px] border-r-2 border-r-[rgba(236,236,246,1)] my-4 p-4 ${
        index === array.length - 1 ? 'border-r-0' : ''
      }`}
    >
      <Image
        src={icon.icon}
        alt={icon.text}
        width={100}
        height={100}
        className="object-cover object-center w-[40px] h-[40px] inline-block"
      />
      <p className="text-[16px] leading-[24px] font-normal text-[rgba(45,45,45,1)] mt-2">
        {icon.text}
      </p>
    </div>
  ))}
     
       </div>
   </div>
 
</section>}
</>
  )
}
