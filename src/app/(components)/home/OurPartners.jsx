"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Loader from '../loader/Loader';
import Link from 'next/link';

export default function OurPartners() {
  const {partners,error,isLoading} = useSelector(state=> state.homeApi);
  return (
    <>
       {isLoading ? <Loader /> : error ? <div>{error}</div> : <section className='my-8'>
<div className="container m-auto text-center my-6">
    <h3 className='py-6 text-[32px] text-[rgba(45,45,45,1)] leading-[38.62px] font-[900]'>Our Partners</h3>
<Swiper
navigation={true}
pagination={{
    dynamicBullets: true,
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  slidesPerView={1} // Default view
  spaceBetween={0}
  modules={[Pagination,Navigation,Autoplay]}
  breakpoints={{
      1150 :{
            slidesPerView: 4,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        550 :{
            slidesPerView: 2,
            spaceBetween: 5,
        }

        
                  
            }
        }
        className="mySwiper py-6 m-auto max-w-[1142px] h-fit "
      >

    {partners?.map((partner,index)=><SwiperSlide key={index} className='py-6  max-w-full m-auto max-sm:[margin:auto_!important]'>
      <div className="img my-6">
        <Link href={partner.link} target='_blank'>
        <Image src={partner.logo} alt={partner.link} width={370} height={270} className='xl:w-[370px] h-[308.55px] object-cover object-center inline-block' loading='lazy' />
        </Link>
      </div>
    </SwiperSlide>)}
     
        
       
        
      </Swiper>
</div>
      </section>}
    </>
  )
}
