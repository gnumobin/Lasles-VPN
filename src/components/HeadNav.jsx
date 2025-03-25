import React from 'react'
// Import assets
import Logo from '../assets/logo.png'

function HeadNav() {
  return <nav className='container flex items-center justify-between py-6 px-15'>
    <div className='flex items-center gap-4'>
        <img src={Logo} alt="website logo" />
        <span className='text-4xl font-medium'>Lasles<strong className='font-extrabold'>VPN</strong></span>
    </div>
    <ul className='flex gap-[4rem] text-2xl'>
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Help</a></li>
    </ul>
    <div className='text-2xl font-medium'>
        <button className='py-4.5 px-15 cursor-pointer'>Sign In</button>
        <button className='py-4.5 px-15 border-1 rounded-full  cursor-pointer'>Sign Up</button>
    </div>
  </nav>
}

export default HeadNav