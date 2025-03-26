import React from 'react'
import MainPicture from '../assets/features.png'
import { IoCheckmarkCircle } from 'react-icons/io5'

function Features() {
  return <section className='mx-auto max-w-[128rem] pt-22 pb-22 px-15 flex items-center lg:flex-col lg:text-center gap-8'>
    <div className='w-1/2 lg:w-2/3 lg:mb-20'>
        <img src={MainPicture} alt="a happy guy when celebration behind laptop " />
    </div>
    <div className='w-1/2 space-y-10 lg:w-full'>
        <h2 className='text-black leading-20 font-medium text-6xl md:text-4xl md:leading-15'>We Provide Many <br /> Features You Can Use</h2>
        <p className='text-2xl md:text-[1.4rem] leading-11 lg:mb-20'>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <ul className='text-[1.4rem] space-y-5 grid lg:grid-cols-2 md:text-xl'>
            <li className='flex items-center gap-3'>
                <IoCheckmarkCircle size={24} className='text-secondary'/>
                <span>Powerfull online protection.</span>
            </li>
            <li className='flex items-center gap-3'>
                <IoCheckmarkCircle size={24} className='text-secondary'/>
                <span>Internet without borders.</span>
            </li>
            <li className='flex items-center gap-3'>
                <IoCheckmarkCircle size={24} className='text-secondary'/>
                <span>Supercharged VPN</span>
            </li>
            <li className='flex items-center gap-3'>
                <IoCheckmarkCircle size={24} className='text-secondary'/>
                <span>No specific time limits.</span>
            </li>
        </ul>
    </div>
  </section>
}

export default Features