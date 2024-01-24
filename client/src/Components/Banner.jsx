import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
      <div className='max-w-[1240px] my-[100px] mx-auto font-bold text-center'>
        <div className='text-xl md:text-3xl md:p-[24px]'>Learn with us</div>
        <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'>Grow with us</h2>
        <div className='text-white text-[20px] md:text-[50px] md:p-[24px]'>
            
            <Typed
                    className='pl-3'
                    strings={['Eye Problems', 'Eye Working', 'Eye Cures']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                />
        </div>
        <button className="bg-black text-white p-3 rounded">Capture Image</button>
      </div>
    </div>
    
    
  )
}