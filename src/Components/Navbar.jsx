import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiLightBulb } from "react-icons/hi";
import Button from './Button';
const Navbar = () => {
    const [isActive, setIsActive] = React.useState(false);

  return (
    <div className='bg-white/10  mx-auto items-center backdrop-blur-lg mt-3 fixed z-50 w-full h-14 flex justify-between px-10 py-3 rounded-full'>
        <div className='flex justify-center items-end text-[#ee8c31]'>
            <HiLightBulb size={44}/>
            <h1 className='tracking-widest text-3xl font-tourney text-[#ee8c31] ml-2'>LeetoAI</h1>
        </div>

        <div className='w-1/3 flex justify-end items-center gap-4 font-montserrat '>
            <NavLink to='/' className={({isActive}) => isActive ? 'text-[#ee8c31]' : 'text-[#e2e8f0] '} >Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-[#ee8c31] ' : 'text-[#e2e8f0] '} >About</NavLink>
            <NavLink to='/explore' className={({isActive}) => isActive ? 'text-[#ee8c31] ' : 'text-[#e2e8f0] '} >Explore</NavLink>
            <NavLink to='/services' className={({isActive}) => isActive ? 'text-[#ee8c31] ' : 'text-[#e2e8f0] '} >Services</NavLink>
            <NavLink to='/profile' className={({isActive}) => isActive ? 'text-[#ee8c31] ' : 'text-[#e2e8f0] '} >Profile</NavLink>
        </div>

    </div>
  )
}

export default Navbar