'use client';
import { useState } from 'react';
import { Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoEyeOutline ,IoEyeOffOutline ,IoKeyOutline ,IoCloudUploadOutline } from "react-icons/io5";
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object().shape({
  full_name: Yup.string().min(10,'minimum letters should be 10').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  password_confirmation : Yup.string().oneOf([Yup.ref('password')] ,'password and password confirmation not match').required('Password Confirmation is required') ,
  terms: Yup.bool().oneOf([true], 'You must agree to the terms'),
});

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const router = useRouter();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setErrorMessage(''); // Clear any previous error message
      setFileName(URL.createObjectURL(file))
    }
  };

const handleSubmit = async (values) => {
  if (!selectedImage) {
    setErrorMessage('Please select an image to upload.');
    return;
  }
  const formData = new FormData();
  formData.append('national_image', selectedImage);

  // Append other form values to formData
  for (const key in values) {
    if (key !== 'national_image') {
      formData.append(key, values[key]);
    }
  }

  if (values.terms) {
    formData.append('terms', '1');
  }
  try {
    const response = await axios.post('https://sunchase.backend.aait-d.com/api/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }});
    if(response.status === 200) {
    toast.success('Successfully created!');
    localStorage.setItem("emailAddress" ,values.email);
    setTimeout(() => {
      router.push('/verify')
    }, 1000);
    }
    
   
  } catch (error) {
setErrorMessage(error.response.data.message)
  }
};


  return (
<>
<section className="py-6 text-center">
<Formik
    initialValues={{
      full_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      national_image: null,
      terms: false,
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {props => <form onSubmit={props.handleSubmit} className='flex flex-col gap-[32px] items-center'>
        <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'> 
          <label htmlFor="full_name" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <CiUser className='inline-block w-[16px] h-[16px]' /> Name</label>
          <input type="text" name="full_name" id='full_name' value={props.values.full_name} className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter your full name' onChange={props.handleChange} onBlur={props.handleBlur} />
          {props.touched.full_name && props.errors.full_name ? <ErrorMessage name="full_name" component="div" className='text-red-600 font-bold ' /> : null}
        </div>
        <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'> 
          <label htmlFor="email" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <MdOutlineMail   className='inline-block w-[16px] h-[16px] bg-transparent' /> Email Address</label>
          <input type="text" name="email" id='email' value={props.values.email} className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter your email address' onChange={props.handleChange} onBlur={props.handleBlur}   />
          {props.touched.email && props.errors.email ? <ErrorMessage name="email" component="div" className='text-red-600 font-bold ' /> : null}
        </div>
        <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'> 
          <label htmlFor="password" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <IoKeyOutline   className='inline-block w-[16px] h-[16px] bg-transparent' /> Password</label>
          <div className="pass relative">
          <input type={showPassword ? 'text' : 'password'} name="password" id='password' value={props.values.password} className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter your Password' onChange={props.handleChange} onBlur={props.handleBlur}   />
          {showPassword ? <button type='button' onClick={()=> setShowPassword(!showPassword)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOffOutline className='inline-block' /></button> : <button type='button' onClick={()=> setShowPassword(!showPassword)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOutline className='inline-block' /></button>}
          </div>
          {props.touched.password && props.errors.password ? <ErrorMessage name="password" component="div" className='text-red-600 font-bold ' /> : null}
        </div>
        <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'> 
          <label htmlFor="password_confirmation" className='flex items-center gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <IoKeyOutline   className='inline-block w-[16px] h-[16px] bg-transparent' /> Password Confirmation</label>
          <div className="pass relative">
          <input type={showPasswordConfirm ? 'text' : 'password'} name="password_confirmation" id='password_confirmation' value={props.values.password_confirmation} className='w-full  h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px] ' placeholder='Enter your Password Confirmation' onChange={props.handleChange} onBlur={props.handleBlur}   />
          {showPasswordConfirm ? <button type='button' onClick={()=> setShowPasswordConfirm(!showPasswordConfirm)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOffOutline className='inline-block' /></button> : <button type='button' onClick={()=> setShowPasswordConfirm(!showPasswordConfirm)} className='w-[20px] h-[20px] absolute top-1/2 left-[90%] translate-y-[-50%]'><IoEyeOutline className='inline-block' /></button>}
          </div>
          {props.touched.password_confirmation && props.errors.password_confirmation ? <ErrorMessage name="password_confirmation" component="div" className='text-red-600 font-bold ' /> : null}
        </div>
       
        <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'>
        <p className='flex items-center w-full  gap-[8px] text-[16px] leading-[18px] font-normal text-[rgba(45,45,45,1)]'> <Image src='/assets/id.svg' alt='national id icon' width={16} height={16} priority className='object-cover object-center w-[16px] h-[16px] inline-block' />
        National ID</p>
        <label htmlFor="national_image" className='  w-full max-sm:px-[20px] max-sm:py-[23px]   h-[80px] flex justify-center  gap-[8px] items-center bg-[rgba(244,244,243,1)] border border-dashed border-[rgba(45,45,45,1)] '>
          <IoCloudUploadOutline className='object-cover object-center w-[16px] h-[16px] inline-block' />
          Upload National ID
        </label>
        {selectedImage && <p className='flex flex-col text-center text-[12px] '>Selected Image : <span>{fileName}</span> </p>}
        <input
        type="file"
        name="myImage"
        id='national_image'
 className='w-full  border border-dashed border-[rgba(45,45,45,1)] h-[64px] bg-[rgba(45,45,45,0.02)] text-[14px] leading-[18px] font-normal text-[rgba(101,104,97,1)] focus:outline-none px-[20px] py-[23px]'
        onChange={handleFileChange}
      />
        {props.errors.national_image && props.touched.national_image ? <ErrorMessage name="national_image" component="div" className='text-red-600 font-bold' /> : ''}
      </div>

        <div className='flex flex-col gap-[8px] xl:w-[516px] w-full'>
        <label htmlFor="terms" className="text-[14px]   max-[350px]:flex  max-[350px]:flex-col leading-[18.23px] flex gap-[8px] items-center font-normal text-[rgba(187,184,191,1)]">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={props.values.terms}
                  className="w-[20px] h-[20px] inline-block accent-[rgba(187,184,191,1)]"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                Agree to the <Link href="#" className="font-bold text-[rgba(45,45,45,1)]">terms and conditions</Link>
              </label>
         {!props.values.terms && props.errors.terms ?  <ErrorMessage name="terms" component="div" className='text-red-600 font-bold ' /> :''}
        </div>
        {errorMessage && <p className='text-red-600 font-bold'>{errorMessage} </p>}

        <button type='submit' disabled={!(props.isValid && props.dirty )}   className='xl:w-[516px] w-full  h-[64px] bg-[rgba(45,45,45,1)] text-[14px] leading-[21px] font-bold text-[rgba(248,248,247,1)]  px-[20px] py-[23px]'>Create account <GoArrowUpRight className='inline-block w-[12px] h-[12px]' /> </button>
        <p className='text-[16px] leading-[20.83px] font-normal text-[rgba(45,45,45,1)]'>Have an account? <Link className='font-bold' href={'/sign-in'}>login</Link></p>
      </form>
    }
  </Formik>
</section>
</>  


);
}