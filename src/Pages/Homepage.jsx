import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import { MdSubdirectoryArrowRight, MdOutlineArrowOutward } from "react-icons/md";
import About from './About';
import Flow from '../Components/Flow';
import FooterCTA from '../Components/FooterCTA';

const Homepage = () => {
  return (
    <div className='z-10 flex flex-col min-h-screen justify-start items-center bg-background'>
        <Navbar />

        <div className='w-full tracking-widest font-alfa h-[400px] flex flex-col gap-2 justify-center items-center mt-20 overflow-hidden'>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-6xl z-50 text-white'
            >
              Stop Grinding Blindly
            </motion.h1>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-6xl z-50 text-white'
            >
              Start <span className='font-tourney text-[#ee8c31] text-6xl'>orchestrating</span> your prep.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-xl mt-3 font-montserrat z-50 text-gray-400'
            >
              ~ The Agentic Workflow for the LeetCode Grind ~
            </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex gap-10 pb-24'
        >
            <Button 
              text="Go to Oracle" 
              Icon={MdSubdirectoryArrowRight} 
              type="button" 
            />
            <Button 
              text="Start Practicing" 
              Icon={MdOutlineArrowOutward} 
              type="button" 
            />
        </motion.div>
        

        <About />

        <div className='w-full mt-16 opacity-35 h-1/2 bg-cover bg-center'>
          <img src='/img.png'/>
        </div>

        <Flow />
        <FooterCTA />   
    </div>
  )
}

export default Homepage;