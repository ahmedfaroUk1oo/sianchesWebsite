"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Loader from '../loader/Loader';
import { CiHeart } from "react-icons/ci";
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

export default function RecentlyAdded() {
    const {recently_added,error,isLoading} = useSelector(state=> state.homeApi);
  return (
    <>
       {isLoading ? <Loader /> : error ? <div>{error}</div> : <section className='my-8'>
<div className="container m-auto text-center my-6">
    <h3 className='py-6 text-[32px] text-[rgba(45,45,45,1)] leading-[38.62px] font-[900]'>Recently added</h3>
<Swiper
navigation={true}
pagination={{
    dynamicBullets: true,
  }}
  slidesPerView={1} // Default view
  spaceBetween={0}
  modules={[Pagination,Navigation]}
  breakpoints={{
      1200 :{
            slidesPerView: 3,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 5,
        },

        
                  
            }
        }
        className="mySwiper py-6 m-auto max-w-[1142px] h-fit "
      >
        {recently_added?.map((property,index)=><SwiperSlide key={property.id} className='py-6  max-w-full m-auto max-sm:[margin:auto_!important]'>
            
            <div className=" border border-[rgba(248,248,252,1)] bg-white w-fit m-auto  max-sm:min-h-[350px]">
           <div className="img relative">
           <Image src={property.image} loading='lazy' alt={property.title} width={370} height={270} className='xl:w-[370px] h-[308.55px] object-cover object-center inline-block'  />
           <Image src={'/assets/recentlyLogo.webp'} loading='lazy' alt={property.title} width={40} height={40} className='w-[40px] absolute left-[5%] top-[5%] h-[40px] object-cover object-center inline-block'  />
           <button className='w-[40px] h-[40px] absolute top-[5%] right-[5%] bg-white rounded-full'><CiHeart className='inline-block w-[18.61px] h-[18.11px] text-[rgba(210,3,0,1)]'/></button>
           <button className='max-w-[96px] max-h-[24px] w-fit h-fit p-4 flex justify-center items-center gap-2 text-[12px] text-[rgba(45,45,45,1)] leading-[12px] absolute bottom-[5%] right-[5%] bg-white '><Image src='/assets/apartment.svg' alt='apartment logo' width={12} height={12} priority className='inline-block w-[12px] h-[12px] '/>Apartment</button>


           </div>
                <div className="text p-4 text-start ">
                    <p className='text-[20px] leading-[23.82px] pb-2 font-normal text-[rgba(45,45,45,1]'>{property.title}</p>
                    <button  className='text-[14px] leading-[16.67px] pb-2 text-[rgba(141,153,157,1)] flex items-center gap-2'><IoLocationOutline  className='inline-block w-[12px] h-[12px] text-[12px]' />{property.address}</button>
                    <div className="details pb-2 flex gap-[24px] items-center">
                        <p className='tex-[14px] pb-4 leading-[8px] font-normal text-[rgba(45,45,45,1)]'><HiOutlineOfficeBuilding   className='inline-block w-[12px] h-[12px] text-[12px]' />{property.type}</p>
                        

                    </div>
                    <div className="price pt-4 border-t border-t-[rgba(248,248,252,1)] flex justify-between items-center">
                            <div className="month">
                                <p className='text-[16px] leading-[17px] font-bold text-[rgba(45,45,45,1)]'>{property.price} EGP</p>
                                <p className='text-[12px] leading-[17px] font-normal text-[rgba(101,104,97,1)]'>{property.monthly} Monthly</p>
                            </div>
                            <button><GoArrowUpRight className='w-[20px] h-[20px] inline-block'/></button>
                        </div>
                </div>
            </div>
         
           </SwiperSlide>)} 
      </Swiper>
</div>
      </section>}
    </>
  )
}
