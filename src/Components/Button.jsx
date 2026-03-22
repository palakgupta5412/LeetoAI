import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, onclick, className, type, Icon }) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onclick}
      type={type}
      className={`relative px-8 py-4 bg-transparent text-white font-montserrat uppercase tracking-widest text-sm transition-colors group overflow-hidden ${className}`}
    >
      
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-[#ee8c31]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top Left Corner */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ee8c31] transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-30" />
      
      {/* Top Right Corner */}
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ee8c31] transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-30" />
      
      {/* Bottom Left Corner */}
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ee8c31] transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-30" />
      
      {/* Bottom Right Corner */}
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ee8c31] transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:opacity-30" />

      {/* Button Text & Icon Container */}
      <span className="relative z-10 font-bold flex items-center justify-center gap-3">
        {text}
        
        {/* Render the icon if it exists, add hover translation */}
        {Icon && (
          <Icon className="text-xl hidden hover:unhide invisible hover:visible text-[#ee8c31] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        )}
      </span>   
      
    </motion.button>
  )
}

export default Button;