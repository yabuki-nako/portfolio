import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPhp  } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";




const techstack = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className='my-20 text-center text-5xl'>Tech Stack</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <RiReactjsLine className='text-8xl text-cyan-400 '/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center text-cyan-400'>
                    React
                  </div>
                </div>
              </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <IoLogoJavascript className='text-8xl text-yellow-400 '/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center text-yellow-400'>
                    JavaScript
                  </div>
                </div>
              </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <FaBootstrap className='text-8xl text-violet-400 '/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center text-violet-400'>
                    BootStrap
                  </div>
                </div>
              </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <FaHtml5 className='text-8xl text-orange-400 '/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center text-orange-400'>
                    HTML5
                  </div>
                </div>
              </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <FaCss3Alt className='text-8xl text-orange-400 '/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center text-orange-400'>
                    CSS
                  </div>
                </div>
              </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <RiTailwindCssFill className='text-8xl text-teal-400 '/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center text-teal-400'>
                    Tailwind
                  </div>
                </div>
              </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <BsFiletypeSql className='text-8xl text-White '/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center'>
                    SQL
                  </div>
                </div>
              </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className='rounded-2xl  border-4 border-l-neutral-800 p-4 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <FaPhp className='text-8xl text-white'/>
                <div className='absolute inset-0 h-full w-full text-center bg-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] text-2xl'>
                  <div className='flex min-h-full flex-col items-center justify-center'>
                    PHP
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default techstack