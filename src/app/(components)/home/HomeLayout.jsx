"use client"
import React, { useLayoutEffect } from 'react'
import HomeHeader from './HomeHeader'
import {  useDispatch } from 'react-redux'
import { homeApi } from '@/app/store/HomeApiSlice'
import WeHelpYou from './WeHelpYou'
import Properties from './Properties'
import SellUnit from './SellUnit'
import RecentlyAdded from './RecentlyAdded'
import Ambassador from './Ambassador'
import OurPartners from './OurPartners'
import { profileApi } from '@/app/store/showProfileSlice'
import ContactUs from './ContactUs'


export default function HomeLayout() {
  const dispatch =useDispatch()
  


useLayoutEffect(() => {
    dispatch(homeApi()).then((res)=>{
      if(localStorage.getItem('sianchesToken')) {
        dispatch(profileApi())
      }
    })
},[])
  return (
    <>
   
      <HomeHeader />
      <WeHelpYou />
      <Properties />
      <SellUnit />
      <RecentlyAdded />
      <Ambassador />
      <OurPartners />
      <ContactUs />
     
    </>
  )
}
