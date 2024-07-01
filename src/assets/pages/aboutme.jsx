import React from 'react'
import picture1 from  '../image/aboutus1.jpg';
import picture from  '../image/herobannerpic.JPG';

const aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className='my-20 text-center text-4xl'>About 
        <span className='text-neutral-500'> Me</span></h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className = "rounded-2xl" src={picture1}/>
                </div>
            </div>
            
            <div className="w-full lg:w-1/2 py-6">
                <p className='mt-2 mb-5 max-w-xl text-4xl '>Educational Background</p>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                  <div className=' w-full lg:w-1/4 '>  
                          <p className='mb-2 text-m font-bold text-neutral-400 '>2024-2022</p>
                  </div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='font-bold text-neutral-50 text-xl'>National University - Laguna </h6> 
                    <span className='text-neutral-300 block mb-5'>Bachelor's degree, Information System</span>
                  </div>
                  <div className=' w-full lg:w-1/4 '>  
                          <p className='mb-2 text-m font-bold text-neutral-400 '>2024-2022</p>
                  </div>
                  <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='font-bold text-neutral-50 text-xl'>STI College Calamba </h6> 
                    <span className='text-neutral-300 block'>Senior High School Diploma</span>
                  </div>
                </div>
                <p className='mt-2 mb-5 max-w-xl text-4xl '>Technical Skills</p>
                <div className=' w-full  break-words flex flex-wrap'>  
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-fuchsia-400'>Content Management System                </span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-fuchsia-400'>CoreMedia Development</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-fuchsia-400'>Front end Development</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-fuchsia-400'>Content Loading</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-fuchsia-400'>Agile Methodology</span>
                </div>
                <p className='mt-2 mb-5 max-w-xl text-4xl '>Soft Skill</p>
                <div className=' w-full  break-words flex flex-wrap'>  
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-pink-500'>Trustworthy</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-pink-500'>Communication</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-pink-500'>Hardworking</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-pink-500'>Team Player</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-pink-500'>Time management</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-pink-500'>Reliable</span>
                </div>
                <p className='mt-2 mb-5 max-w-xl text-4xl '>Hobbies</p>
                <div className=' w-full  break-words flex flex-wrap'>  
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-rose-500'>Studying</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-rose-500'>Coding</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-rose-500'>Video Editing</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-rose-500'>Learning new Programming Language</span>
                <span className='mr-2 mb-3 mt-0 rounded bg-neutral-800 px-2 py-1 text-xl text-rose-500'>Gaming</span>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default aboutme