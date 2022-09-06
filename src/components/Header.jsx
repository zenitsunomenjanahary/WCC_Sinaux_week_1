import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {FaArrowRight } from "react-icons/fa"
import {FaCaretDown} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai"

const headerItems = [
  {
    id:1,
    label: "home",
    link: "#",
    icon:''
  },
  {
    id:2,
    label: "Courses",
    link: "#",
    icon: <FaCaretDown/>
  },
  {
    id:3,
    label: "Blog",
    link: "#",
    icon:''
  },
  {
    id:4,
    label: "Pricing",
    link: "#",
    icon:''
  },
  {
    id:5,
    label: "Sign up",
    link: "#",
    icon:<FaArrowRight/>
  },
]

const Header = () => {
  const [visible, setVisible] = useState(true);
  
  return (
    <div className='sticky py-8 sm:py-0 text-white  md:text-black text-4xl flex flex-col rounded-lg bg-orange-400 md:bg-transparent md:flex-row justify-between my-6 z-40'>
        <div className="flex justify-center items-center space-x-2">
          <img className='w-11 hover:animate-spin' src={logo}  alt="logo"/>
          <h1 className='text-3xl font-bold'>Sinaux</h1>
        </div>
        {        
          visible && <div className="xl:text-white flex flex-col justify-center items-center md:flex-row md:space-x-6 lg:space-x-16">
            {
              headerItems.map((item)=>(
                <div key={item.id} className="flex items-center hover:text-orange-400 before:border-b-0 after:border-b-4 after:border-orange-400 transition-all">
                  <a href={item.link} className="text-xl font-medium ">{item.label}</a>
                  <span>{item.icon}</span>
                </div>
              ))
            }
          </div>
        }
        <AiOutlineMenu className='absolute right-0 cursor-pointer md:hidden' onClick={()=>setVisible(!visible)}/>
    </div>
  )
}

export default Header