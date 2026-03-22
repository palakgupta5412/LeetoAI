import React from 'react'
import Navbar from '../Components/Navbar'
const Homepage = () => {
  return (
    <div className='z-10 flex flex-col min-h-screen justify-center items-center'>
        <Navbar />

        <div className='w-full h-[80%] flex flex-col justify-center items-center'>
            <h1>Stop Grinding Blindly</h1>
        </div>
        
    </div>
  )
}

export default Homepage