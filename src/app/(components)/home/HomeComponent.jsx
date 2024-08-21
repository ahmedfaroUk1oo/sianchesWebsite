"use client"
import React from 'react'
import { Provider} from 'react-redux'
import store from '@/app/store/store'
import HomeLayout from './HomeLayout'

export default function HomeComponent() {

  return (
    <>
    <Provider store={store}>
      <HomeLayout />
      </Provider>
    </>
  )
}


