import {useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import Avatar from './Avatar'


const MenuDropdown = () => {
  



  return (
    <div>
      <Link
        to='/login'
        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
        Login
    </Link>
    </div>
  )
}



export default MenuDropdown;