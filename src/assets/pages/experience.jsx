import React from 'react';
import { EXPERIENCES } from '../constants'

const experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Experience</h1>
        <div>
            {EXPERIENCES.map((experience, index ) =>(
                <div key ={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className=' w-full lg:w-1/4'>  
                        <p className='mb-2 text-m font-bold text-neutral-400'>{experience.year}</p>
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'> 
                        <h6 className='mb-2 font-bold text-purple-100'>{experience.role} 
                            <span className='text-neutral-300 block'>{experience.company}</span>
                        </h6> 
                        {experience.description.map((exp,index) =>(
                        <li className='mb-1 text-neutral-400 list-style-type: disc;' key ={index}>{exp}</li>
                        ))}
                        {experience.technologies.map((tech, index) =>(
                            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800' key ={index} >{tech}</span>
                        ))}
                    </div>
                </div>            
                ))}
        </div>
    </div>
  )
}

export default experience