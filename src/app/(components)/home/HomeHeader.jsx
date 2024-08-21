"use client"
import NavLayout from '@/app/layout/Navbar/NavLayout'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import {  useSelector } from 'react-redux'
import Loader from './../loader/Loader';
import Image from 'next/image'

export default function HomeHeader() {
const {error,isLoading,sliders} = useSelector(state => state.homeApi)


  return (
    <>
     {isLoading ? <Loader /> : error ? <div>{error}</div> : sliders &&  sliders?.map(slider => <section key={slider.id}
        className={` relative w-full min-h-[100vh]  bg-cover bg-center bg-no-repeat flex flex-col`}
      >
        <Image src={slider.image} alt={slider.title} layout='fill' objectFit='cover' />
         <div className='absolute inset-0 bg-black opacity-[.1]'></div>
        <NavLayout />
        <div className="container relative z-10 flex-grow flex justify-center items-center m-auto">
          <div className="header text-center  flex flex-col gap-6 max-md:gap-2 items-center">
            <h1 className='text-[72px] max-md:text-[2rem] leading-[89.64px] max-md:leading-[2.5rem] font-[900] italic text-[rgba(248,248,252,1)] text-wrap xl:w-[870px] h-[270px] max-md:h-fit'>
            {slider.title}
            </h1>
            <div className="buttons flex justify-center items-center gap-[10px] max-sm:flex-col max-sm:py-4">
            <Link href={'#'} className=" p-2    w-[236px] h-[56px]  text-[16px]  leading-[19.06px] font-normal text-[rgba(45,45,45,1)] bg-[rgba(248,248,247,1)]    flex justify-center items-center no-underline "  >Explore Properties <MdArrowOutward className='inline-block'/></Link>
            </div>
          </div>
        </div>
      </section>)}
    </>
  )
}
