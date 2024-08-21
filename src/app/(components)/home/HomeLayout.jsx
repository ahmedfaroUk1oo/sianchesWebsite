"use client"
import React, { useLayoutEffect, lazy, Suspense, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { homeApi } from '@/app/store/HomeApiSlice'
import { profileApi } from '@/app/store/showProfileSlice'
import Loader from '../loader/Loader'

const HomeHeader = lazy(() => import('./HomeHeader'));
const WeHelpYou = lazy(() => import('./WeHelpYou'));
const Properties = lazy(() => import('./Properties'));
const SellUnit = lazy(() => import('./SellUnit'));
const RecentlyAdded = lazy(() => import('./RecentlyAdded'));
const Ambassador = lazy(() => import('./Ambassador'));
const OurPartners = lazy(() => import('./OurPartners'));
const ContactUs = lazy(() => import('./ContactUs'));
const FooterLayout = lazy(()=> import('@/app/layout/footer/FooterLayout'));

export default function HomeLayout() {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    dispatch(homeApi()).then((res) => {
      if (localStorage.getItem('sianchesToken')) {
        dispatch(profileApi());
      }
    });
  }, [dispatch]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <Suspense fallback={<Loader />}>
      <HomeHeader />
      <WeHelpYou />
      <Properties />
      <SellUnit />
      <RecentlyAdded />
      <Ambassador />
      <OurPartners />
      <ContactUs />
      <FooterLayout />
    </Suspense>
  );
}