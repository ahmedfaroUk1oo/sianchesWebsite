"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../loader/Loader'
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import Image from 'next/image';
import ContactForm from './ContactForm';
import toast, { Toaster } from 'react-hot-toast';




export default function ContactUs() {
    const {contact_info,isLoading,error} = useSelector(state => state.homeApi)
  return (
    <>
    <Toaster />
      {isLoading ? <Loader /> : error ? <h2>{error}</h2> : <section className='my-6'>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-[32px]">
            <div className="contactInfo">
                <div className="text container m-auto w-[70%] flex flex-col gap-6">
                <h2 className='text-[32px] leading-[38.62px] text-[rgba(45,45,45,1)] font-[900]'>We&apos;ll help you find a place you&apos;ll love!</h2>
                <div className='phone flex items-center gap-4'><FiPhoneCall className='inline-block w-[24px] h-[24px]' />
<p className="number text-[14px] leading-[16.67px] font-normal text-[rgba(45,45,45,1)] flex flex-col gap-[10px]">Phone Number <span>{contact_info?.phone}</span></p>
                </div>
                <div className='email flex items-center gap-4'><IoMailOutline className='inline-block w-[24px] h-[24px]' />
<p className="mail text-[14px] leading-[16.67px] font-normal text-[rgba(45,45,45,1)] flex flex-col gap-[10px]">email address <span>{contact_info?.email}</span></p>
                </div>
                </div>
                <div className="img my-8">
                  <Image src='/assets/contactUs.webp' alt='Contact Us Image' className='object-cover object-center inline-block w-[595px] max-md:w-full h-[412px]' width={500} height={500} />
                </div>
            </div>
           <ContactForm />
        </div>
      </section> }
    </>
  )
}
