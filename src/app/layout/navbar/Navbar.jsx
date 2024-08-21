"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import StaggeredDropDown from './DropDown';
import { AiOutlineGlobal } from "react-icons/ai";
import { CiHeart,CiLogout } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import {  useSelector } from 'react-redux';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);
 const {user} = useSelector(state => state.profile)

 const handleLogout = () => {
  localStorage.removeItem('sianchesToken')
  window.location.reload()}

 
 
const categ =[
  {
    id:1,
    title:'Buy',
    link:'#',
   
  },
  {  id:2,
    title:'Sell',
    link:'#',

  },
    {id:3,
      title:'Rent',
    link:'#',

  }

]





  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`relative lg:min-h-fit w-full `}>
        {/* mobile menu bar */}
        <div className='lg:hidden  flex justify-between   px-4 py-[32px] items-center'>
            {/* logo */}
          <Link href='#' className='text-white block py-3 '>
            <Image src='/assets/navLogo.svg' alt='Logo' priority={true}  className='  w-[266.68px] h-[36.15px]' width={150} height={70} />
          </Link>
          {/* mobile menu button */}
          <button ref={buttonRef} onClick={toggleSidebar} className='text-[rgba(248,248,247,1)] text-4xl p-2 border border-[rgba(248,248,247,1)] rounded-md'>
            <IoMenu />
          </button>
        </div>
        {/* side bar */}
        <div
          ref={sidebarRef}
          className={` z-50 px-6  py-[32px] max-lg:bg-[rgba(45,45,45,1)] text-[rgba(252,252,251,1)] text-[16px] max-xl:text-[12px]  font-medium lg:w-full flex max-lg:flex-col   lg:justify-around lg:items-center w-64  max-sm:w-52 space-y-3 lg:min-h-fit absolute inset-y-0 left-0 transform ${open ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition ease-in-out duration-500 text-center min-h-screen`}
        >
          {/* logo */}
          <Link href='/' className='text-white  block pt-4'>
            <Image src='/assets/navLogo.svg' alt='Logo' priority={true}  className=' inline-block m-auto w-[266.68px] max-xl:w-[200px] max-lg:hidden h-[36.15px] ' width={200} height={50} />
          </Link>
          {/* nav */}
          <nav className='flex gap-[24px] items-center max-lg:flex-col max-lg:gap-[14px] max-lg:justify-center '>
            <Link className="block      " href={'/'} onClick={() => setOpen(false)}>Home</Link>
            <Link className="block      " href={'/'} onClick={() => setOpen(false)}> About us</Link>
            <StaggeredDropDown title = {'services'} options={categ} />
            <Link className="block      " href={'/'} onClick={() => setOpen(false)}> Our Partners</Link>
            <Link className="block      " href={'/'} onClick={() => setOpen(false)}> Contact us</Link>
            <Link className="    flex items-center gap-2 pe-2 border-e border-e-[rgba(146,158,170,1)]   " href={'/'} onClick={() => setOpen(false)}><AiOutlineGlobal /> Ar</Link>
            <button className="block     w-[31.26px] h-full text-[31.26px] "  onClick={() => setOpen(false)}><CiHeart className='inline-block ' /></button>
            {user? <p className='text-[12px] flex items-center gap-3 '> {user} <button onClick={handleLogout}><CiLogout className=' inline-block text-[20px] font-[900]'/></button></p>:<Link href={'/sign-up'} className=" p-2    w-[218px] h-[48px] max-xl:w-[100px] max-lg:flex-col max-lg:h-fit text-[16px] max-xl:text-[14px] leading-[19.06px] font-normal text-[rgba(45,45,45,1)] bg-[rgba(248,248,247,1)]    flex justify-between items-center no-underline "  onClick={() => setOpen(false)}>Become an ambassador <MdArrowOutward className='inline-block'/></Link>}
          </nav>
        </div>
      </div>
    </>
  );
}
