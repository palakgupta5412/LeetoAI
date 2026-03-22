import React, { useEffect, useState } from 'react';

const CustomScrollbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      
      // Calculate how far the user has scrolled (0 to 1)
      const scrollPercent = scrollY / (documentHeight - windowHeight);
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // The Track: Fixed at half screen height, positioned with m-4
    <div className="fixed right-0 top-1/4 h-1/2 w-1.5 m-4 bg-gray-200/20 rounded-full z-50 overflow-hidden">
      
      {/* The Thumb: Moves based on scroll percentage */}
      <div 
        className="w-full bg-white rounded-full transition-transform duration-75 ease-out"
        style={{ 
          height: '20%', // Size of the scroll thumb
          transform: `translateY(${scrollPercentage * 400}%)` 
          
        }}
      />
    </div>
  );
};

export default CustomScrollbar;