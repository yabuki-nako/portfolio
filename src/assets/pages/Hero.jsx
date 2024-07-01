import React from 'react';
import picture from  '../image/herobannerpic.JPG';
import { motion } from 'framer-motion';
const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Lester Lee</motion.h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-900
                    to-purple-500 bg-clip-text text-4xl tacking-light text-transparent">Front End Developer</span>
                
                    <p className='my-2 max-w-xl py-6 font-light tracking-lighter'>A recently graduated student in Bachelor of Science in Information system. As an
                    aspiring young professional, I am eager to showcase my technical skills to the IT
                    Industry, knowledgeable in SQL, JavaScript, and CSS. also have an experience in
                    Content Management System development using CoreMedia. I am very passionate
                    about learning new languages and tools needed for modern web development.
                    Moreover, I possess strong communication and collaboration skills.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center lg:h-2/3">
                    <img src={picture} alt="Banner Picture"/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default hero