import React from 'react'
import styles from './Loader.module.css'
export default function Loader() {
  return (
    <>
    <div className="loader flex justify-center items-center min-h-[100vh]">
    <div className ={`${styles.loader} m-auto my-12  `}></div>
    </div>
    </>
  )
}
