"use client"
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import toast from 'react-hot-toast';
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';
import { MdOutlineMail } from 'react-icons/md';

export default function ForgetField() {
  const[email,setEmail] = useState('');
  const[error,setError] = useState('')
const router = useRouter();





const handleForget = async ()=> {
if(email ==='') {
  setError('please insert your email')
}else {
  try {
    const response = await axios.post('https://sunchase.backend.aait-d.com/api/password/forget',{
      email:email
    })
    if(response.status === 200) {
      toast.success('Code has been sent to you, please check your mail.')
      localStorage.setItem('emailAddress',email)
      setTimeout(() => {
        router.push('/verify-code-password')
      }, 1500);
    }
  } catch (error) {
    setError(error.response.data.message)
  }
}
}






  return (
    <>
     <div className="flex flex-col min-h-screen">
  <div className="container mt-[80px] m-auto w-full flex-grow">
    <div className="logo text-center">
      <Image src={'/assets/signLogo.svg'} alt="Logo" width={200} height={200} priority className='max-w-[224.34px] max-sm:max-w-full inline-block max-h-[67px] object-cover object-center' />
    </div>
    <div className="my-4 link">
      <Link href='/sign-in' className='text-[16px] leading-[24px] font-medium text-[rgba(45,45,45,1)] flex items-center gap-2'>
        <IoIosArrowRoundBack /> Back
      </Link>
    </div>
    <div className="my-6">
      <h3 className='text-[24px] leading-[31.34px] font-bold text-[rgba(45,45,45,1)]'>Reset Password</h3>
      <p className='text-[16px] leading-[24px] font-normal text-[rgba(141,153,157,1)]'>
      please enter your email address below to recovery your password.
      </p>
    </div>
    <div className='flex flex-col gap-[8px] my-6 xl:w-[516px] w-full'> 
          <label htmlFor="email" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <MdOutlineMail   className='inline-block w-[16px] h-[16px] bg-transparent' /> Email Address</label>
          <input type="text" name="email" id='email'  className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter your email address' 
          onChange={(e)=> setEmail(e.target.value)}   />
        </div>
        {error && <p className='text-red-600 font-bold '>{error}</p>}
        <button  onClick={handleForget}   className='xl:w-[516px] w-full  h-[64px] bg-[rgba(45,45,45,1)] text-[14px] leading-[21px] font-bold text-[rgba(248,248,247,1)]  px-[20px] py-[23px] my-6'>Send <GoArrowUpRight className='inline-block w-[12px] h-[12px]' /> </button>
   
  </div>
  
</div>

    </>
  )
}
