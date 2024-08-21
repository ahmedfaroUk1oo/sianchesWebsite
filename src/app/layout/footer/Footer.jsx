import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter,FaPhone } from "react-icons/fa";
import { CiLocationOn,CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  
  return (
    <>
    <section className=' w-full '>
      <footer className={`container  m-auto py-4 `}>
        <div className="logo w-full">
          <Image
            src="/assets/home/footerLogo.svg"
            alt="footer logo"
            className="w-full lg:h-[102px] inline-block m-auto object-cover object-center  "
            width={100}
            height={102}
          />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 ">
          <div className="links py-4 col-span-2 lg:text-start text-center">
            <h3 className="py-4   text-[24px] font-bold leading[28.8px] text-[rgba(255,255,255,1)]">
              تواصل معنا
            </h3>
            <div className="linksSec flex flex-col items-start text-start">
              <Link
                href="#"
                className="no-underline  flex justify-start items-center gap-2 py-4 text-[24px] max-sm:text-[1rem] max-sm:leading-5 leading-[24px] text-[rgba(255,255,255,1)] font-medium pb-3"
              >
                <FaPhone /> 0553817817
              </Link>
              <Link
                href="#"
                className="no-underline  flex justify-start items-center gap-2 py-4 text-[24px] max-sm:text-[1rem] max-sm:leading-5 leading-[24px] text-[rgba(255,255,255,1)] font-medium pb-3"
              >
                <CiLocationOn /> georgia.younطريق الامير محمد بن سلمان بن عبد
                العزيز - حي الفلاحg@ple.com
              </Link>
              <Link
                href="#"
                className="no-underline  flex justify-start items-center gap-2 py-4 text-[24px] max-sm:text-[1rem] max-sm:leading-5 leading-[24px] text-[rgba(255,255,255,1)] font-medium pb-3"
              >
                <CiMail /> Turki@Turkilawfirmsa.com
              </Link>
            </div>
          </div>

          <div className="social py-4 lg:text-start text-center">
            <h3 className="py-4   text-[24px] font-bold leading[28.8px] text-[rgba(255,255,255,1)]">
              مواقع التواصل الاجتماعي
            </h3>

           
            <div className="social flex lg:justify-start items-center gap-6 justify-center ">
            <Link
              href="#"
              target="_blank"
              className="no-underline flex items-center   text-[rgba(213,217,219,1)] "
            >
              <FaLinkedin className='inline-block w-[22.02px] h-[22.02px]'/>
            </Link>
              <Link
                href="#"
                target="_blank"
                className="no-underline flex items-center   text-[rgba(213,217,219,1)] "
              >
                <FaFacebookF className='inline-block w-[22.02px] h-[22.02px]' /> 
              </Link>
              <Link
                href="#"
                target="_blank"
                className="no-underline flex items-center   text-[rgba(213,217,219,1)] "
              >
                <FaInstagram className='inline-block w-[22.02px] h-[22.02px]' /> 
              </Link>
              <Link
                href="#"
                target="_blank"
                className="no-underline flex items-center  text-[rgba(213,217,219,1)] "
              >
                <FaTwitter className='inline-block w-[22.02px] h-[22.02px]'/> 
              </Link>
            </div>
          </div>
        </div>
        <div className="copyRight w-full text-center border-t border-t-[rgba(58,69,83,1)] py-4">
          <p className="text-[16px] leading-[32px] font-bold text-[rgba(215,215,215,1)]">
            جميع الحقوق محفوظة لموقع 
            <span className="text-[rgba(182,161,104,1)]">
              تركي الـ يوسف للمحاماة
            </span>
             تصميم إفادة لتقنية المعلومات
          </p>
        </div>
      </footer>
      </section>
    </>
  );
}
