import React from 'react'
import { FaGithub, FaLinkedin,FaArrowUp } from "react-icons/fa";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
     <div className='h-full items-center justify-center  flex w-275 '>
      <div className='tracking-widest text-xl ml-50 mt-27 mb-9'>
          
         <h1 className='bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent text-6xl sm:font-serif animate-pulse
        hover:cursor-default'>Contact</h1>
        <div className='bg-white/5 border border-purple-400/30
            rounded-2xl p-6  mt-6
            hover:border-purple-400 hover:shadow-xl
            hover:shadow-purple-500/10 transition duration-300 mb-6'>
              <h2 className="font-bold">Contact with me</h2>
      <ul className="flex  justify-center gap-10 mt-5">
        <li className="hover:opacity-55">
          <a href="#">
            <FaGithub size='25'/>
          </a>
        </li>
        <li className="hover:opacity-55">
          <a href="#">
            <FaLinkedin size='25' />
          </a>
        </li>
        <li className="hover:opacity-55">
          <a href="#">
            <Mail size='25'/>
          </a>
        </li>
      </ul>
            </div>
      </div>
    </div>
  )
}

export default Contact