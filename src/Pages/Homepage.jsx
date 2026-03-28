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
      <div className='z-10 flex flex-col min-h-screen justify-start items-center bg-transparent'>
          <Navbar />

          <div className='relative w-full tracking-widest font-alfa h-[500px] flex flex-col gap-2 justify-center items-center mt-20'>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] pointer-events-none z-0 flex items-center justify-center">
                  
                  {/* Is box ko horizontally stretch kiya hai taaki wave jaisa lage */}
                  <div className="relative w-full h-full flex items-center justify-center scale-x-150 scale-y-75 opacity-50">
                      
                      {/* Sweeping Beam 1 (Clockwise) */}
                      <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen"
                          style={{
                              background: "conic-gradient(from 0deg at 50% 50%, transparent 0%, #ee8c31 15%, transparent 40%, transparent 80%, #ff6b35 100%)",
                              filter: "blur(30px)" // Blur bohot kam kiya hai taaki beams dikhein!
                          }}
                      />

                      {/* Sweeping Beam 2 (Counter-Clockwise, Inner) */}
                      <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                          className="absolute w-[450px] h-[450px] rounded-full mix-blend-color-dodge"
                          style={{
                              background: "conic-gradient(from 180deg at 50% 50%, transparent 0%, #ffb74d 20%, transparent 50%, transparent 70%, #ee8c31 90%)",
                              filter: "blur(25px)"
                          }}
                      />

                      {/* Pulsing Core to ground the effect */}
                      <motion.div
                          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute w-[300px] h-[150px] mix-blend-screen rounded-full"
                          style={{
                              background: "radial-gradient(ellipse at center, #ee8c31 0%, transparent 70%)",
                              filter: "blur(5px)"
                          }}
                      />
                  </div>
              </div>
              {/* ========================================= */}
              {/* MAIN TEXT */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-6xl z-30 text-white relative'
              >
                Stop Grinding Blindly
              </motion.h1>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-6xl z-30 text-white relative'
              >
                Start <span className='font-tourney text-[#ee8c31] text-6xl'>orchestrating</span> your prep.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-xl mt-3 font-montserrat z-30 text-gray-400 relative'
              >
                ~ The Agentic Workflow for the LeetCode Grind ~
              </motion.p>
          </div>

          {/* BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex gap-10 pb-24 relative z-30'
          >
              <Button 
                text="Go to Oracle" 
                Icon={MdSubdirectoryArrowRight} 
                type="button" 
                onclick='/oracle'
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