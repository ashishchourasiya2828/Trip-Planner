import React, { useContext } from 'react'
import { userContext } from '../../context/AppProvider'

const NavBar = () => {

    const {user} = useContext(userContext)

    
  return (
    <div className='w-full text-zinc-100  px-6 py-6  border-b-[2px] border-zinc-700 ' >
        <h2 className='text-2xl font-semibold  ' >Hellyoo {user?.firstName}👋...</h2>
    </div>
  )
}

export default NavBar