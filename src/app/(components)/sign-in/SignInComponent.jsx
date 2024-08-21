"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { GoArrowUpRight } from 'react-icons/go';
import { IoEyeOffOutline, IoEyeOutline, IoKeyOutline } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async() => {
    if(email === '' || password === '') {
      return toast.error('Please fill all fields')
    }else {
      try {
        const response = await axios.post('https://sunchase.backend.aait-d.com/api/login' ,{
          email: email,
          password: password
        })
        if(response.status === 200) {
          toast.success(response.data.message)
          localStorage.setItem('sianchesToken', response.data.data.token)
          localStorage.setItem('emailAddress', response.data.data.email)
          setTimeout(() => {
            router.push('/')
          }, 1500);
        }
  
        
      
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  }

  return (
    <>
      <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'> 
          <label htmlFor="email" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <MdOutlineMail   className='inline-block w-[16px] h-[16px] bg-transparent' /> Email Address</label>
          <input type="text" name="email" id='email'  className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter your email address' 
          onChange={(e)=> setEmail(e.target.value)}   />
        </div>
        <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'> 
          <label htmlFor="password" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <IoKeyOutline   className='inline-block w-[16px] h-[16px] bg-transparent' /> Password</label>
          <div className="pass relative">
          <input type={showPassword ? 'text' : 'password'} name="password" id='password'  className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter your Password'
          onChange={(e)=> setPassword(e.target.value)}
          />
          {showPassword ? <button type='button' onClick={()=> setShowPassword(!showPassword)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOffOutline className='inline-block' /></button> : <button type='button' onClick={()=> setShowPassword(!showPassword)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOutline className='inline-block' /></button>}
          </div>
          </div>
          <Link href={'/forget-password'} className='text-[16px] leading-[16px] text-[rgba(45,45,45,1)] font-medium xl:w-[516px] w-full my-4 '>Forget your password ?</Link>
          <button onClick={handleLogin}    className='xl:w-[516px] w-full  h-[64px] bg-[rgba(45,45,45,1)] text-[14px] leading-[21px] font-bold text-[rgba(248,248,247,1)]  px-[20px] py-[23px]'>Login <GoArrowUpRight className='inline-block w-[12px] h-[12px]' /> </button>
  <p className='text-center mt-10 text-[16px] leading-[20.83px] font-normal text-[rgba(45,45,45,1)]'>Don’t have an account? <Link href={'/sign-up'}  className='font-medium text-[rgba(45,45,45,1)] '> Create account</Link ></p>

    </>
  )
}
