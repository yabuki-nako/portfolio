
import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
const navbar = () => {
  return (
    <nav className=" mb-20 flex item-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img src=''/>
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaFacebook/>
        </div>
    </nav>
  )
}

export default navbar