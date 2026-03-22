import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiLightBulb } from "react-icons/hi";
const Navbar = () => {
    const [isActive, setIsActive] = React.useState(false);

  return (
    <div className='mt-3 w-full h-16 flex justify-between px-12 py-3'>
        <div className='flex justify-center items-end text-[#ee8c31]'>
            <HiLightBulb size={44}/>
            <h1 className='tracking-widest text-3xl font-tourney text-[#ee8c31] ml-2'>LeetoAI</h1>
        </div>

        <div className='w-1/2 flex gap-4 font-montserrat'>
            <NavLink to='/' className={({isActive}) => isActive ? 'text-[#ee8c31] font-bold' : 'text-[#e2e8f0] font-bold'} >Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-[#ee8c31] font-bold' : 'text-[#e2e8f0] font-bold'} >About</NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-[#ee8c31] font-bold' : 'text-[#e2e8f0] font-bold'} >Contact</NavLink>
            <NavLink to='/services' className={({isActive}) => isActive ? 'text-[#ee8c31] font-bold' : 'text-[#e2e8f0] font-bold'} >Services</NavLink>
        </div>
    </div>
  )
}

export default Navbar