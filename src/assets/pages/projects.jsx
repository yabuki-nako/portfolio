import React from 'react'
import { PROJECTS } from '../constants'

const projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            {PROJECTS.map((project,index) =>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                    <img 
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className='mb-6 rounded'/>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                  <h6 className='mb-2 font-semibold'>{project.title}</h6>
                  <p className='mb-4 text-neutral-400'>{project.description}</p>
                  {project.technologies.map((tech, index) =>(
                            <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800' key ={index} >{tech}</span>
                        ))}
                  <button className='block mb-4 mt-2 my-2 rounded bg-green-900 px-2 py-1 text-m font-bold text-neutral-400'>Source Code</button>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default projects