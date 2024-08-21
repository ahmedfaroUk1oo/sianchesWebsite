"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react'


export default function Footer() {

const [data,setData] = useState(null)


const footerData = async()=> {
  try {
    const response = await axios.get('https://sunchase.backend.aait-d.com/api/footer')
    
    if(response.status === 200) {
      setData(response?.data.data)
      
    }
  } catch (error) {
    
  }
}

useLayoutEffect(()=>{
footerData();
},[])

  return (
    <>
      <section className='w-full bg-[rgba(243,243,241,1)]'>
        <div className=" m-auto max-w-[1142px] pt-16 pb-6 px-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px]">
                <div className="text flec flex-col gap-4">
                    <h3 className='text-[32px] leading-[38.62px] font-[900] text-[rgba(45,45,45,1)]'>Subscribe to newsletter</h3>
                    <p className='text-[rgba(45,45,45,1)] text-[18px] leading-[21px] font-normal'>Sign up to receive the latest news</p>
                </div>
                <div className="subscribe relative leading-[21px] font-normal text-[16px] flex max-sm:flex-col max-sm:gap-4 ">
                    <input type="text" placeholder='Enter your email address' className='text-[rgba(45,45,45,1)] w-full focus:outline-none  p-[26px_20px] ' />
                    <button className='text-[rgba(248,248,247,1)] w-[155px] h-[72px] bg-[rgba(45,45,45,1)] text-center max-sm:ml-auto' >Subscribe </button>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-3  grid-cols-2 max-[300px]:grid-cols-1 mt-16 py-8 border-t border-t-[rgba(62,69,62,1)] gap-[32px]">
              <div className="logo flex flex-col gap-4 col-span-2 max-[300px]:col-span-1 max-md:items-center">
                {data && <>
                <Image src={data?.logo} alt='footer logo' loading='lazy'  className=' w-[202.99px] h-fit object-cover' width={100} height={100} />
                <p className='text-[16px] max-md:text-center leading-[19.06px] font-normal text-[rgba(45,45,45,1)]' >{data.short_description}</p>
                <div className="follow text-[16px] leading-[19.06px] font-normal text-[rgba(141,153,157,1)] flex items-center gap-4 max-sm:flex-col">
                Follow us on
                {data.socials.map((link,index)=> <Link key={index} href={link.link} ><Image src={link.icon} width={16} height={16} loading='lazy' alt='social icons' className='inline-block w-[16px] h-[16px]'/></Link>)}
                </div>
                </> }
              </div>
              <div className="mainLinks text-[16px] leading-[19.06px] max-md:items-center font-normal text-[rgba(45,45,45,1)] flex flex-col gap-4">
                <h4 className='font-bold'>Main Links</h4>
                <Link href='#'>Home</Link>
                <Link href='#'>Our Projects</Link>
                <Link href='#'>Services</Link>
                <Link href='#'>Contact us</Link>
              </div>
              <div className="quickAccess text-[16px] leading-[19.06px] max-md:items-center font-normal text-[rgba(45,45,45,1)] flex flex-col gap-4">
              <h4 className='font-bold'>Quick Links</h4>
                <Link href='#'>Privacy policy</Link>
                <Link href='#'>Terms of Use</Link>
            
              </div>
            </div>
            <div className="copyRight border-t border-t-[rgba(62,69,62,1)]">
              <p className='text-[16px] leading-[21px] font-normal text-[rgba(45,45,45,1)] pt-4 text-center'>All Copyrights are reserved by SIANCHES @2024</p>
            </div>
        </div>
      </section>
    </>
  )
}
