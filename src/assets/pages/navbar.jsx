
import React from 'react'
import {FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
const navbar = () => {
  const Links =[
    {
        id: 1,
        child:<FaLinkedin size={30}/>,
        href: 'https:www.linkedin.com/in/lusung14/' },
    {
        id: 2,
        child: <FaGithub size={30}/>,

            href: 'https:www.linkedin.com/in/lusung14/' },
    {
        id: 3,
        child: <FaFacebook size={30}/>,
        href: 'mailto:lesterlusung1414@gmail.com',

    },
    {
      id: 4,
      child: <HiOutlineMail size={30}/>,
      href: 'mailto:lesterlusung1414@gmail.com',

  },
]
  return (
    <nav className=" mb-20 flex item-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            <img src=''/>
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
          {Links.map(({id, child, href}) =>(
          <a key={id} href={href} target='_blank' rel='norefferer'>{child}</a>
          ))}
{/* 
          <a href=""><FaGithub/></a>
          <a href=""><FaFacebook/></a> */}
        </div>
    </nav>
  )
}

export default navbar