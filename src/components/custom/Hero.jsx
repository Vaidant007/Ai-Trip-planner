import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center mx-57 gap-9">
      <h1
      className="font-extrabold text-[50px] text-center mt-16">
        <span className='text-[#6B21A8]'>Discover Your Next Adventure with AI:</span> <br></br> Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Bespoke travel experiences, perfectly tailored to your passions and budget — your journey, your way.</p>
        <Link to={'/create-trip'}>
          <Button>Get Started Now!</Button>
        </Link>
        <img src='/landingg.png' className='-mt-30 width-[120px] height-[120px]'/>
    </div>
  )
}

export default Hero
