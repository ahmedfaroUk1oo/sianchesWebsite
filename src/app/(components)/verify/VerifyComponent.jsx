"use client"
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, {  useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import toast from 'react-hot-toast';
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';

export default function VerifyComponent() {
    const [otp, setOtp] = useState(Array(4).fill(''));
  const inputRefs = useRef([]);
  const[email,setEmail] = useState('');
const router = useRouter();
const [timeLeft, setTimeLeft] = useState(30);

const resendOtp = async () => {
try {
    const response = await axios.post('https://sunchase.backend.aait-d.com/api/resend-otp',{
        email: localStorage.getItem('emailAddress'),
        type :'verify_new'
    });
    console.log(response)
    if(response.status === 200){
        toast.success('Code has been sent to your mail')
    }
} catch (error) {
    toast.error(`${error.response.data.message}`)
}

}


const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if the current field is not empty
      if (value !== '' && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

useLayoutEffect(() => {
if(localStorage.getItem('emailAddress')){
    setEmail(localStorage.getItem('emailAddress'))
    inputRefs.current[0].focus();
    resendOtp();
}else {
    router.push('/sign-up')
}
}, []);

const resendBtn = ()=> {
resendOtp();
setTimeLeft(30);
}


const handleVerify = async() => {
    const otpValue = otp.join('');
    const values = {
        email: email,
        code: otpValue
    }
    if(otpValue.length === 4){
       try {
        const response =await axios.post('https://sunchase.backend.aait-d.com/api/verify',values);  
        if(response.status === 200){
            toast.success('Account has been verified successfully');
            setTimeout(() => {
                router.push('/sign-in')
            }, 1000);
        }

       } catch (error) {
        toast.error(`${error.response.data.message}`)
        
       }

        }

  };

  return (
    <>
     <div className="flex flex-col min-h-screen">
  <div className="container mt-[80px] m-auto w-full flex-grow">
    <div className="logo text-center">
      <Image src={'/assets/signLogo.svg'} alt="Logo" width={200} height={200} priority className='max-w-[224.34px] max-sm:max-w-full inline-block max-h-[67px] object-cover object-center' />
    </div>
    <div className="my-4 link">
      <Link href='/sign-up' className='text-[16px] leading-[24px] font-medium text-[rgba(45,45,45,1)] flex items-center gap-2'>
        <IoIosArrowRoundBack /> Back
      </Link>
    </div>
    <div className="my-6">
      <h3 className='text-[24px] leading-[31.34px] font-bold text-[rgba(45,45,45,1)]'>Verification Code</h3>
      <p className='text-[16px] leading-[24px] font-normal text-[rgba(141,153,157,1)]'>
        Enter the verification code we just sent you on your email address <span className='font-semibold text-[rgba(45,45,45,1)] max-sm:text-[10px]'>{email ? email : ''}</span>
      </p>
    </div>
    <div className="flex my-6 gap-3 max-sm:flex-wrap justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-[72px] h-[72px] max-sm:w-[50px] text-center border text-[24px] leading-[16px] font-bold text-[rgba(45,45,45,1)] border-gray-300 rounded-lg focus:outline-none bg-[rgba(244,244,243,1)]"
        />
      ))}
    </div>
    <div className="send w-full text-center my-6">
      <button onClick={handleVerify} className='xl:w-[516px] max-sm:w-1/2 w-full h-[64px] bg-[rgba(45,45,45,1)] text-[14px] leading-[21px] font-bold text-[rgba(248,248,247,1)] px-[20px] py-[23px]'>
        Send <GoArrowUpRight className='inline-block w-[12px] h-[12px]' />
      </button>
    </div>
  </div>
  <div className="mt-auto  flex justify-around max-sm:flex-col items-center mb-4 pb-4 text-center resend text-[16px] leading-[17px] font-normal text-[rgba(45,45,45,1)]">
  <p>If you don’t receive code <button onClick={resendBtn} className='font-medium text-[rgba(141,153,157,1)]'> Resend</button ></p>
<p>{timeLeft > 0 && `00:${timeLeft}`}</p>
  </div>
</div>

    </>
  )
}
