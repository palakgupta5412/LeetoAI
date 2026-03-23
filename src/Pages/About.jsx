import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TbCube, TbFileText, TbMap, TbCode, TbTerminal2, TbCpu, TbRobot } from "react-icons/tb";
import StraightAnglePieChart from '../Components/StraightAnglePieChart';

const About = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  return (
    <div className='relative bottom-4 px-4 w-full h-[400px] flex justify-center items-end gap-3'>
        
        {/* CARD 1: Onboarding Nexus + Draggable Cube */}
        <div ref={card1Ref} className='p-6 w-1/5 h-[300px] bg-white/5 backdrop-blur-md flex flex-col justify-between border border-white/10 rounded-3xl shadow-2xl overflow-hidden group'>
            <div>
              <h3 className="text-gray-400 text-sm font-medium tracking-wider uppercase">Welcome</h3>
              <h2 className="text-[#ee8c31] text-lg font-bold uppercase">PALAK GUPTA</h2>
            </div>

            <div className='flex-1 flex justify-center items-center w-full relative z-10'>
              <motion.div
                drag
                dragConstraints={card1Ref}
                dragElastic={0.2}
                whileHover={{ scale: 1.1 }}
                whileDrag={{ scale: 1.2, rotate: 20, cursor: "grabbing" }}
                className="cursor-grab p-4"
              >
                <TbCube className="text-7xl text-[#ee8c31]" strokeWidth={1} />
              </motion.div>
            </div>

            <div className="flex gap-2 w-full justify-between items-end relative z-0 mt-2 border-t border-white/10 pt-4">
              <div className="text-center w-1/3">
                  <span className="block text-green-400 font-bold text-xl">110</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest">Easy</span>
              </div>
              <div className="text-center w-1/3 border-l border-r border-white/10">
                  <span className="block text-yellow-500 font-bold text-xl">190</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest">Med</span>
              </div>
              <div className="text-center w-1/3">
                  <span className="block text-red-500 font-bold text-xl">42</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest">Hard</span>
              </div>
            </div>
        </div>

        {/* CARD 2: THE ORACLE (Knowledge Base Data Core) */}
        <div ref={card2Ref} className='w-1/5 h-[350px] bg-gradient-to-t from-[#ee8c31]/10 to-[#000000] backdrop-blur-md border border-[#ee8c31]/20 rounded-3xl p-6 flex flex-col overflow-hidden relative shadow-lg shadow-[#ee8c31]/5'>
            <div className="flex justify-between items-center z-10">
                <h3 className="text-gray-400 text-sm font-medium tracking-wider uppercase">The Oracle</h3>
                <span className="text-[9px] bg-red-500/10 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold animate-pulse">
                    Online
                </span>
            </div>

            <div className="flex-1 flex justify-center items-center relative w-full h-full">
                <div className="absolute w-32 h-32 bg-[#ee8c31]/20 rounded-full blur-2xl pointer-events-none"></div>
                
                <motion.div
                    drag
                    dragConstraints={card2Ref}
                    dragElastic={0.1}
                    whileHover={{ scale: 1.15 }}
                    whileDrag={{ scale: 0.95, rotate: 45, cursor: "grabbing" }}
                    className="cursor-grab relative z-10 w-24 h-24 rounded-full flex justify-center items-center"
                >
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }} 
                        className="absolute inset-0 border-2 border-dashed border-[#ee8c31]/60 rounded-full" 
                    />
                    <div className="w-16 h-16 bg-black/80 backdrop-blur-sm border border-[#ee8c31] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(238,140,49,0.4)]">
                        <TbCpu className="text-3xl text-[#ee8c31]" />
                    </div>
                </motion.div>
            </div>

            {/* Changed Text: Focusing on the massive Data/PDF aspect */}
            <div className="text-center z-10 border-t border-white/10 pt-3">
                 <p className="text-[9px] text-gray-400 uppercase tracking-widest">Master Knowledge Base</p>
                 <p className="text-[8px] text-[#ee8c31] mt-1">Indexing core DSA concepts & formulas...</p>
            </div>
        </div>
        
        {/* CARD 3: CORE ENGINE (Scrollable Features - 'Arsenal' changed to 'Engine') */}
        <div className='w-1/5 h-full bg-gradient-to-br from-[#1a0f0a] to-[#000000] backdrop-blur-md border border-[#ee8c31]/30 rounded-3xl p-6 relative overflow-y-auto shadow-2xl shadow-[#ee8c31]/20 flex flex-col justify-start custom-scrollbar'>
            
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ee8c31]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col gap-4 pb-4">
                <div className="text-center mb-2 mt-4">
                    {/* Changed 'Arsenal' to 'Engine' */}
                    <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ee8c31] to-[#ffb74d] tracking-tight uppercase">Platform Engine</h2>
                    <p className="text-[10px] text-gray-400 tracking-widest uppercase mt-1">System Capabilities</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-[#ee8c31]/10 hover:border-[#ee8c31]/30 transition-all shrink-0">
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                        <TbFileText className="text-[#ee8c31] text-lg"/> Master RAG
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Instant, zero-latency context retrieval from a unified DSA knowledge base.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-[#ee8c31]/10 hover:border-[#ee8c31]/30 transition-all shrink-0">
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                        <TbCode className="text-[#ee8c31] text-lg"/> The Blueprint
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Analyzes LeetCode history to forge personalized, reusable code templates.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-[#ee8c31]/10 hover:border-[#ee8c31]/30 transition-all shrink-0">
                    <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                        <TbMap className="text-[#ee8c31] text-lg"/> Pathfinder
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Agentic AI routing connects isolated problem sets into a fluid learning path.</p>
                </div>
            </div>
        </div>
        
        {/* CARD 4: LIVE MENTOR CHAT (Completely New Chatbot Interface) */}
        <div className='w-1/5 h-[350px] bg-[#0a0a0f] backdrop-blur-md border border-white/10 rounded-3xl p-5 relative overflow-hidden flex flex-col shadow-inner'>
            
            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-3 z-10">
                <h3 className="text-gray-400 text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
                    <TbRobot size={18} className="text-[#ee8c31]" />
                    Live Mentor
                </h3>
            </div>
            
            {/* Chat Interface Area */}
            <div className="flex-1 w-full relative z-10 flex flex-col justify-end gap-3 pb-3">
                
                {/* User Message Bubble */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="self-end bg-white/10 px-3 py-2 rounded-xl rounded-tr-none text-gray-300 text-[10px] max-w-[85%] shadow-md border border-white/5"
                >
                    What are the ways to represent Graphs in DSA?
                </motion.div>

                {/* AI Mentor Bubble (Strict/Roast mode) */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                    className="self-start bg-[#ee8c31]/15 border border-[#ee8c31]/30 px-3 py-2 rounded-xl rounded-tl-none text-white text-[10px] max-w-[90%] shadow-md relative"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#ee8c31] rounded-l-xl"></div>
                    <span className="text-[#ee8c31] font-bold mr-1">AI:</span> 
                    <span>There are 5 types of graphs in DSA: Adjacency Matrix, Adjacency List, Edge List, Incidence Matrix, and Incidence List.</span>
                </motion.div>
                
            </div>

            {/* Fake Chat Input Box */}
            <div className="w-full bg-black/60 border border-white/10 rounded-full px-3 py-2 mt-auto flex justify-between items-center z-10 shadow-inner">
                <span className="text-gray-500 text-[9px] tracking-wide">Ask for a hint...</span>
                <div className="w-4 h-4 bg-[#ee8c31] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-black text-[10px] font-bold">↑</span>
                </div>
            </div>
        </div>
        
        {/* CARD 5: Labeled Pie Chart (Analytics Profile) */}
        <div className='w-1/5 h-[300px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 py-7 '>
            <div className="w-full text-center ">
              <h3 className="text-[#ee8c31] font-bold text-sm tracking-wider uppercase">Dominant Patterns</h3>
              <p className="text-[10px] text-gray-500 mt-1">AI-detected topical focus based on recent submissions.</p>
            </div>
            <div className="flex-1 w-full relative">
              <StraightAnglePieChart />
            </div>
        </div>

    </div>
  )
}

export default About;