import React from 'react'
import { NavLink } from './NavLink';

export const MenuOverlay = ({links}: {links:{title: string, link: string}[]}) => {
  return (
    <div>
        <ul className='flex flex-col py-4 items-center'>
            {
                links.map((link, index) => <NavLink key={index} link={link.link} title={link.title} />)
            }
        </ul>
    </div>
  )
}
