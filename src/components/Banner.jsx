import React from 'react'
import {FaStar} from "react-icons/fa";
import girl from "../assets/girl.png";
import mentor1 from "../assets/mentor1.png";
import mentor2 from "../assets/mentor2.png";
import mentor3 from "../assets/mentor3.png";
import mentor4 from "../assets/mentor4.png";

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between'>
      <div className='mt-16 space-y-10 lg:w-1/2'>
        <div className="flex space-x-2">
          <h1 className='text-4xl md:text-5xl lg:text-6xl'>Grow your skill</h1>
          <img src={mentor1} alt="mentor1"/>
        </div>
        <div className="flex space-x-2 items-center">
          <span className='p-1 w-20 bg-orange-400 h-2 an'/>
          <h1 className='text-4xl md:text-5xl lg:text-6xl'>and find your </h1>
        </div>
        <div className="flex space-x-2">
          <h1 className='text-4xl md:text-5xl lg:text-6xl'>perfect tutor.</h1>
          <svg className='hover:animate-spin animate-bounce' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0686 0.254181L32.5657 15.7905L48.102 24.2876L32.5657 32.7847L24.0686 48.321L15.5716 32.7847L0.0352478 24.2876L15.5716 15.7905L24.0686 0.254181Z" fill="#DD9855"/>
        </svg>
        </div>
        <div className='md:w-2/3'>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil vero inventore recu...</p>
        </div>
        <div className='space-y-2 md:space-x-6'>
          <button className='py-2 px-8 rounded-2xl text-white bg-orange-400 hover:bg-orange-600'>Get Started</button>
          <button className=' py-2 px-8 rounded-2xl text-orange-400 border border-orange-400 hover:bg-slate-200'>Browse Course</button>
        </div>
        <div className='flex space-x-2 md:w-2/3'>
          <div className='p-2 bg-neutral-700 rounded'>
            <FaStar className='text-4xl text-orange-400 animate-pulse hover:animate-spin'/>
          </div>
          <p className='font-semibold'>Over five thounsand students have given a 5 star reviwe to their tutor</p>
        </div>
      </div>
      <div className=' mt-0 lg:w-1/2 xl:absolute xl:top-0 xl:right-8 xl:px-16'>
        <div className='flex flex-col bg-neutral-800'>
          <div className=' p-4 relative flex flex-col justify-end text-white lg:ml-[16rem] xl:ml-[32rem] bg-amber-600 w-[200px] h-[300px] '>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.436 0L23.6005 11.2714L34.872 17.436L23.6005 23.6005L17.436 34.872L11.2714 23.6005L0 17.436L11.2714 11.2714L17.436 0Z" fill="white"/>
            </svg>
            <h1 className='text-xl'>Define your future with Sinaux</h1>
          </div>
          <div className='flex lg:justify-end'>
            <img src={girl} alt="girl"/>
          </div>
          <div className='relative'>
            <div className=" m-8 lg:absolute lg:left-[-150px] lg:top-[-60px] rounded-xl shadow-xl bg-white lg:w-1/2 p-5">
              <h1 className='text-xl'>99 + Certified Mentors</h1>
              <div className="flex">
                <img className='w-16 h-16 z-0 hover:z-40 hover:mr-2' src={mentor1} alt="mentor1"/>
                <img className='w-16 h-16 ml-[-20px] z-10 hover:z-40 hover:mr-2' src={mentor2} alt="mentor2"/>
                <img className='w-16 h-16 ml-[-20px] z-10 hover:z-40 hover:mr-2' src={mentor3} alt="mentor3"/>
                <img className='w-16 h-16 ml-[-20px] z-10 hover:z-40 hover:mr-2' src={mentor4} alt="mentor4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner