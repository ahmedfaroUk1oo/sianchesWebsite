"use client"
import React, { useState } from 'react'
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
import {  IoIosArrowRoundUp } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Properties() {
    const {properties,error,isLoading} = useSelector(state=> state.homeApi);
    const [visibleProjectId, setVisibleProjectId] = useState(null);

    const toggleVisibility = (projectId) => {
      setVisibleProjectId(visibleProjectId === projectId ? null : projectId);
    };

    
    
  return (
    <>
      {isLoading ? <Loader /> : error ? <div>{error}</div> : <section className='my-8'>
<div className="container m-auto text-center my-6">
<Swiper
navigation={true}
pagination={{
    dynamicBullets: true,
  }}
  slidesPerView={1} // Default view
  spaceBetween={0}
  modules={[Pagination,Navigation]}
  breakpoints={{
            
               
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
            }
        }
        className="mySwiper py-6 m-auto max-w-[1142px] h-fit "
      >

    
        {properties?.map((property,index)=><SwiperSlide key={property.id} className='py-6 relative max-w-fit m-auto max-sm:[margin:auto_!important]'>
            
            <div className="img border border-[rgba(248,248,252,1)] bg-white w-fit m-auto  max-sm:min-h-[350px]">
                <Image src={property.image} priority alt={property.name} width={370} height={270} className='w-[370px] h-[270px] object-cover object-center inline-block'  />
                <div className="text p-4 flex justify-between items-center">
                    <p className='text-[20px] leading-[23.82px] font-normal text-[rgba(45,45,45,1]'>{property.name}</p>
                    <button onClick={() => toggleVisibility(property.id)}><IoIosArrowRoundUp className='inline-block w-[24px] h-[24px]' /></button>
                   
                </div>
            </div>
           {visibleProjectId=== property.id &&  <div className="flex flex-col transition-all duration-300 gap-[20px] my-4 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full p-4 bg-white">
             {property?.projects.map(project =>  <div key={project.id}  className='flex justify-between items-center'>
                    <p  className='text-[16px] leading-[13px] font-medium text-[rgba(45,45,45,1)] flex gap-1 items-center'><Image src={project.logo} alt={project.name} width={50} height={50} className='object-cover rounded-full object-center w-[32px] h-[32px] inline-block' /> {project.name}</p>
                    <button><MdOutlineArrowOutward className='inline-block w-[12px] h-[12px]' /></button>

                  </div> )} 
             </div>}
           </SwiperSlide>)}
        {properties?.map((property,index)=><SwiperSlide key={property.id} className='py-6 relative max-w-fit m-auto max-sm:[margin:auto_!important]'>
            
            <div className="img border border-[rgba(248,248,252,1)] bg-white w-fit m-auto  max-sm:min-h-[350px]">
                <Image src={property.image} priority alt={property.name} width={370} height={270} className='w-[370px] h-[270px] object-cover object-center inline-block'  />
                <div className="text p-4 flex justify-between items-center">
                    <p className='text-[20px] leading-[23.82px] font-normal text-[rgba(45,45,45,1]'>{property.name}</p>
                    <button onClick={() => toggleVisibility(property.id)}><IoIosArrowRoundUp className='inline-block w-[24px] h-[24px]' /></button>
                   
                </div>
            </div>
           {visibleProjectId=== property.id &&  <div className="flex flex-col transition-all duration-300 gap-[20px] my-4 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full p-4 bg-white">
             {property?.projects.map(project =>  <div key={project.id}  className='flex justify-between items-center'>
                    <p  className='text-[16px] leading-[13px] font-medium text-[rgba(45,45,45,1)] flex gap-1 items-center'><Image src={project.logo} alt={project.name} width={50} height={50} className='object-cover rounded-full object-center w-[32px] h-[32px] inline-block' /> {project.name}</p>
                    <button><MdOutlineArrowOutward className='inline-block w-[12px] h-[12px]' /></button>

                  </div> )} 
             </div>}
           </SwiperSlide>)}
        
       
        
      </Swiper>
</div>
      </section>}
    </>
  )
}
