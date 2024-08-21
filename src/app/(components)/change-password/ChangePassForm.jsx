'use client';
import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { IoEyeOutline ,IoEyeOffOutline ,IoKeyOutline  } from "react-icons/io5";
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function ChangePassForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [newPass, setNewPass] = useState('');
    const [newPassConfirm, setNewPassConfirm] = useState('');
    const[error,setError] =useState('')
  const router = useRouter();


  useLayoutEffect(()=>{
    if(!localStorage.getItem('emailAddress')){
        router.push('/forget-password')
    }
  },[])

  const handleChange =async()=> {
    if(newPass ==='' || newPassConfirm === '') {
        setError('password field or confirmation is empty')
    }else {
        try {
            const response = await axios.post('https://sunchase.backend.aait-d.com/api/password/reset',{
                email :localStorage.getItem('emailAddress'),
                new_password:newPass,
                new_password_confirmation:newPassConfirm
            })
            if(response.status===200) {
                toast.success('Password updated successfully')
                setTimeout(() => {
                    router.push('/sign-in')
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
      <h3 className='text-[24px] leading-[31.34px] font-bold text-[rgba(45,45,45,1)]'>Change Password</h3>
    </div>
   
  
       <div className='flex flex-col gap-[8px] my-6 xl:w-[516px] w-full'> 
          <label htmlFor="password" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <IoKeyOutline   className='inline-block w-[16px] h-[16px] bg-transparent' /> New Password</label>
          <div className="pass relative">
          <input type={showPassword ? 'text' : 'password'} name="password" onChange={(e)=> setNewPass(e.target.value)} id='password'  className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter New Password'   />
          {showPassword ? <button type='button' onClick={()=> setShowPassword(!showPassword)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOffOutline className='inline-block' /></button> : <button type='button' onClick={()=> setShowPassword(!showPassword)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOutline className='inline-block' /></button>}
          </div>
        </div>
        <div className='flex flex-col gap-[8px] my-6 xl:w-[516px] w-full'> 
          <label htmlFor="password_confirmation" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <IoKeyOutline   className='inline-block w-[16px] h-[16px] bg-transparent' /> Confirm New Password</label>
          <div className="pass relative">
          <input type={showPasswordConfirm ? 'text' : 'password'} name="password_confirmation" onChange={(e)=> setNewPassConfirm(e.target.value)} id='password_confirmation'  className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Confirm New Password'   />
          {showPasswordConfirm ? <button type='button' onClick={()=> setShowPasswordConfirm(!showPasswordConfirm)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOffOutline className='inline-block' /></button> : <button type='button' onClick={()=> setShowPasswordConfirm(!showPasswordConfirm)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOutline className='inline-block' /></button>}
          </div>
        </div>
        {error && <p className='text-red-600 font-bold '>{error}</p>}
        <button  onClick={handleChange}   className='xl:w-[516px] w-full  h-[64px] bg-[rgba(45,45,45,1)] text-[14px] leading-[21px] font-bold text-[rgba(248,248,247,1)]  px-[20px] py-[23px] my-6'>Send <GoArrowUpRight className='inline-block w-[12px] h-[12px]' /> </button>
  </div>
 
</div>
    </>
  )
}
