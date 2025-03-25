import React from 'react'
import Button from './Button'
// Import Assets
import HeroPicture from '../assets/hero.png'

function Hero() {
  return <section className='container mx-auto flex items-center gap-12 justify-between pt-12 px-15'>
    {/* ContentBox */}
    <div className='w-1/2'>
        {/* Heading And description for website */}
        <h1 className='leading-20 text-6xl mb-6 font-bold'>Want anything to be easy with LaslesVPN.</h1>
        <p className='leading-11 mb-20 text-2xl'>Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> discover interesting features from us.</p>
        {/* Call to action button (from custom component) */}
        <Button type={'cta'}>Get Started</Button>
    </div>
    {/* ImageBox */}
    <div className='w-1/2'>
        <img className='w-[100%]' src={HeroPicture} alt="a guy vector when he working with laptop" />
    </div>
  </section>
}

export default Hero