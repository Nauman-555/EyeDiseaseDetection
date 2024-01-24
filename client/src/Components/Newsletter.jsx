import React from 'react'
import eyeImg2 from '../assets/eyeImg2.jpg'
export default function Newsletter() {
  return (
    <div className='w-full bg-[#2699fb] '>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className='m-2'>
          <h1 className='text-white font-bold text-[20px] md:text-[40px]'>Want to Learn Latest IT Skills?</h1>
          <span className='text-white'>
            Sign Up and Stay Up to date
          </span>
        </div>
        <div className='w-full md:w-[80%] text-center m-2'>
          <img src={eyeImg2} alt="error404" className='inline h-[300px]'/>
        </div>
      </div>
    </div>
  )
}
