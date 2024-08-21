"use client"
import { Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import { GoArrowUpRight } from "react-icons/go";
import toast from 'react-hot-toast';
import axios from 'axios';
export default function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');

const validationSchema = Yup.object().shape({
    name: Yup.string().min(10,'minimum letters should be 10').required('Name is required'),
    phone: Yup.string().required('phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit =async (values) => {
    try {
        const response = await axios.post('https://sunchase.backend.aait-d.com/api/contact', values)
        if(response.status ===200) {
            toast.success('Message sent successfully')
            values.name = '';
            values.email = '';
            values.phone = '';
            values.content = '';
        }
        
    } catch (error) {
        toast.error(error.response.data.message)
    }

  }


  return (
    <>
       <div className="contactForm max-xl:m-auto">
              <div className="container w-[570px] max-md:w-fit max-w-fit p-6 border border-[rgba(248,248,252,1)] ">
              <h2 className='text-[32px] mb-4 leading-[38.62px] text-[rgba(45,45,45,1)] font-[900]'>Contact us</h2>
              <p className='text-[16px] leading-[24px] font-normal text-[rgba(45,45,45,1)]'>We will respond as soon as we receive your message.</p>
              <Formik
    initialValues={{
        name: '',
        phone: '',
      email: '',
      content: '', 
      
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
{props => <form onSubmit={props.handleSubmit}>
<div className="flex flex-col gap-1 my-4 name">
    <label htmlFor="name" className='text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'>Name</label>
    <input type="text" name='name' value={props.values.name} id='name' className='w-[474px] max-md:w-full p-6 focus:outline-none h-[64px] border border-[rgba(245,245,250,1)] bg-[rgba(45,45,45,0.01)] text-[14px] leading-[18px] font-normal text-[rgba(45,45,45,1)]' placeholder='Enter your full name' onChange={props.handleChange} onBlur={props.handleBlur} />
</div>
<div className="flex flex-col gap-1 my-4 email">
    <label htmlFor="email" className='text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'>Email Address</label>
    <input type="email" name='email' value={props.values.email} id='email' className='w-[474px] max-md:w-full p-6 focus:outline-none h-[64px] border border-[rgba(245,245,250,1)] bg-[rgba(45,45,45,0.01)] text-[14px] leading-[18px] font-normal text-[rgba(45,45,45,1)]' placeholder='Enter your email address' onChange={props.handleChange} onBlur={props.handleBlur} />

</div>
<div className="flex flex-col gap-1 my-4 phone">
    <label htmlFor="phone" className='text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'>Phone Number</label>
    <input type="phone" name='phone' value={props.values.phone} id='phone' className='w-[474px] max-md:w-full p-6 focus:outline-none h-[64px] border border-[rgba(245,245,250,1)] bg-[rgba(45,45,45,0.01)] text-[14px] leading-[18px] font-normal text-[rgba(45,45,45,1)]' placeholder='Enter your phone number' onChange={props.handleChange} onBlur={props.handleBlur} />

</div>
<div className="flex flex-col gap-1 my-4 content">
    <label htmlFor="content" className='text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'>Message</label>
    <textarea type="content" name='content' value={props.values.content} id='content' className='w-[474px] max-md:w-full p-6 focus:outline-none h-[104px] resize-none border border-[rgba(245,245,250,1)] bg-[rgba(45,45,45,0.01)] text-[14px] leading-[18px] font-normal text-[rgba(45,45,45,1)]' placeholder='Enter your message' onChange={props.handleChange} onBlur={props.handleBlur} />

</div>
{errorMessage && <p className='text-red-600 font-bold'>{errorMessage} </p>}
<button type='submit' className='w-[178px] ml-auto h-[56px] bg-[rgba(45,45,45,1)] flex justify-center items-center gap-2 text-[16px] leading-[12px] font-normal text-[rgba(248,248,247,1)]'>Send Message <GoArrowUpRight className='inline-block w-[12px] h-[12px]' /></button>
</form>

}

  </Formik>
              </div>
            </div>
    </>
  )
}
