import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { TbBrandGithub, TbBrandLinkedin, TbRocket } from "react-icons/tb";

const techStack = [
    { name: "MongoDB", image: "/mongo.png" },
    { name: "Express", image: "/express.png" },
    { name: "Node.js", image: "/node.png" },
    { name: "React", image: "/react.png" },
    { name: "Groq API", image: "/groq.png" },
    { name: "LLaMA 3.1", image: "/llama.png" },
    { name: "Framer Motion", image: "/framer.png" },
    { name: "Langchain" , image : "langchain.png"},
    { name: "RAG" , image : "/rag.png"},
    { name: "Vector Database" , image : "/vector.png"},

]; 

const FooterCTA = () => {
    const [hoveredTech, setHoveredTech] = useState(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });
    
    useEffect(() => {
      const handleMouseMove = (e) => {
        // Offset by half the image size (48px / 2 = 24px) so it centers on the mouse
        mouseX.set(e.clientX - 24);
        mouseY.set(e.clientY - 24);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

  return (
    <div className="overflow-hidden w-full flex flex-col items-center justify-center relative mt-20">
        
        {/* Background Grids */}
        <div className="absolute -inset-28 z-0 pointer-events-none opacity-[0.12] rotate-[-10deg]" style={{ backgroundImage: 'linear-gradient(#ee8c31 1px, transparent 1px), linear-gradient(90deg, #ee8c31 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center' }}></div>

        {/* ========================================= */}
        {/* 1. THE MASSIVE CTA */}
        {/* ========================================= */}
        <div className="w-full max-w-4xl flex flex-col items-center text-center py-20 relative z-10 px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ee8c31]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 z-10"
            >
                The Blind Grind is <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">Dead.</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-400 font-mono tracking-widest mb-10 z-10"
            >
                Initialize your profile and let the Oracle build your blueprint.
            </motion.p>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 bg-[#ee8c31] text-black font-bold uppercase tracking-widest rounded-xl flex items-center gap-3 overflow-hidden group shadow-[0_0_40px_rgba(238,140,49,0.4)] z-10"
            >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out] pointer-events-none"></span>
                <TbRocket className="text-xl" />
                Enter The Forge
            </motion.button>
        </div>

        {/* ========================================= */}
        {/* 2. THE TECH STACK FLEX */}
        {/* ========================================= */}
        <div className="w-full border-y border-white/5 bg-black/50 py-8 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 px-6">
                <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">Engineered With</p>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs font-mono text-gray-500 uppercase tracking-widest relative">
                    
                    {techStack.map((tech, index) => (
                        <React.Fragment key={tech.name}>
                            <span 
                                onMouseEnter={() => setHoveredTech(tech.image)}
                                onMouseLeave={() => setHoveredTech(null)}
                                className="hover:text-[#ee8c31] transition-colors cursor-crosshair relative z-20"
                            >
                                {tech.name}
                            </span>
                            {index !== techStack.length - 1 && (
                                <span className="text-gray-700 pointer-events-none">•</span>
                            )}
                        </React.Fragment>
                    ))}
                
                </div>
            </div>
        </div>

        {/* ========================================= */}
        {/* 3. THE CYBER FOOTER */}
        {/* ========================================= */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-8 relative z-10">
            <div className="flex items-center group gap-3 mb-4 md:mb-0">
                <p className="text-[16px] text-gray-500 font-mono tracking-widest uppercase">
                    LeetoAI © 2026
                </p>
                <motion.div 
                    style={{ x: springX, y: springY }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: hoveredTech ? 1 : 0, 
                        scale: hoveredTech ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-50 flex items-center justify-center rounded-xl overflow-hidden bg-black/50 backdrop-blur-md border border-[#ee8c31]/30 shadow-[0_0_20px_rgba(238,140,49,0.3)]"
        
                    // className={`invisible group-hover:visible relative w-1 h-1 bg-[#ee8c31]`}
                >
                    <img src='img.png'/>
                </motion.div>
            </div>

            <div className="flex items-center gap-6">
                <a target="_blank" href="https://github.com/palakgupta5412/LeetoAI.git" className="text-gray-500 hover:text-[#ee8c31] transition-colors flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                    <TbBrandGithub size={16} /> Source
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/palakgupta5412/" className="text-gray-500 hover:text-[#ee8c31] transition-colors flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
                    <TbBrandLinkedin size={16} /> The Architect
                </a>
            </div>
        </div>

        {/* ========================================= */}
        {/* 4. THE FLOATING IMAGE (Fixed to Viewport) */}
        {/* ========================================= */}
        <motion.div
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: hoveredTech ? 1 : 0, 
                scale: hoveredTech ? 1 : 0,
             }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-50 flex items-center justify-center rounded-xl overflow-hidden bg-black/50 backdrop-blur-md border border-[#ee8c31]/30 shadow-[0_0_20px_rgba(238,140,49,0.3)]"
        >
            {hoveredTech && (
                <img src={hoveredTech} alt="tech preview" className="w-full h-full object-cover mix-blend-screen opacity-90" />
            )}
        </motion.div>

    </div>
  )
}

export default FooterCTA;