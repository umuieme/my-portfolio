import Link from 'next/link'
import React from 'react'

export const NavLink = ({ link,  title} : {link: string, title: string}) => {
  return (
    <Link 
        href={link} 
        className='block py-2 pl-3 pr-4 text-gray-400 sm:text-xl rounded md:p-0 hover:text-white'>
            {title}
    </Link>
  )
}
