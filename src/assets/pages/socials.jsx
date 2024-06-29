import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

const socials = () => {

    const Links =[
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>

                </>
            ),
            href: 'www.linkedin.com/in/lusung14',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30}/>

                </>
            ),
            href: 'https://github.com/yabuki-nako',
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={30}/>

                </>
            ),
            href: 'mailto:lesterlusung1414@gmail.com',
        },
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>

                </>
            ),
            href: 'https://github.com/yabuki-nako',
            style: 'rounded-br-md'
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top=[35%] left-0 fixed'>
        <ul>
            {Links.map(({id, child, href, style}) =>(
                <li key ={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-400
                ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300`+ ` `+style} >
                    <a href={href} className='flex justify-between items-center w-full text-white'
                    target='_blank'
                    rel='norefferer'>

                        {child}

                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default socials