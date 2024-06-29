import React from 'react'
import picture1 from  '../image/nana1.jpg';
import picture from  '../image/herobannerpic.JPG';
import { motion } from 'framer-motion';
const aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className='my-20 text-center text-4xl'>About 
        <span className='text-neutral-500'> Me</span></h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className = "rounded-2xl" src={picture}/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                  <p className='my-2 max-w-xl py-6'>A recently graduated student in Bachelor of Science in Information system. As an
                  aspiring young professional, I am eager to showcase my technical skills to the IT
                  Industry, knowledgeable in SQL, JavaScript, and CSS. also have an experience in
                  Content Management System development using CoreMedia. I am very passionate
                  about learning new languages and tools needed for modern web development.
                  Moreover, I possess strong communication and collaboration skills.</p>
                </div>
              </div>
        </div>
    </div>

    
  )
}

export default aboutme