import React from 'react';
import { motion } from 'framer-motion';
import { TbBook, TbCode, TbTargetArrow } from "react-icons/tb";

// Reusable component for the animated connecting lines
const AnimatedConnector = () => {
  return (
    <div className="hidden md:flex items-center justify-center w-24 relative">
      <div className="w-full h-[2px] border-t-2 border-dashed border-white/20"></div>
      <motion.div 
        className="absolute left-0 w-3 h-3 bg-[#ee8c31] rounded-full shadow-[0_0_10px_#ee8c31]"
        animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", times: [0, 0.5, 1] }}
      />
    </div>
  );
};

const Flow = () => {
  return (
    <div className="w-full min-h-[600px] flex flex-col items-center justify-center py-20 relative overflow-hidden mt-10">
        {/* Giant abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ee8c31]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="text-center z-10 mb-16">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee8c31] to-[#ffb74d]">Revision Workflow</span>
            </h2>
            <p className="text-gray-400 text-sm tracking-widest uppercase font-mono">From Theory to Execution</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-6 z-10 gap-6 md:gap-0">
            
            {/* STAGE 1: Theory & Oracle */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="w-full md:w-1/3 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl"
            >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <TbBook className="text-3xl text-gray-300" />
                </div>
                <h3 className="text-white font-bold text-lg tracking-wider uppercase mb-3">1. RAG Consultation</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-mono">
                    Select a topic and instantly retrieve context from the Master PDF. Converse side-by-side with the AI mentor to clarify concepts before writing a single line of code.
                </p>
            </motion.div>

            <AnimatedConnector />

            {/* STAGE 2: Pattern Extraction (Highlighted Engine) */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="w-full md:w-1/3 bg-gradient-to-b from-[#1a0f0a] to-[#ee8c31]/10 backdrop-blur-md border border-[#ee8c31]/40 p-8 rounded-3xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(238,140,49,0.15)] relative transform md:scale-105 z-10"
            >
                <div className="absolute top-8 w-16 h-16 rounded-full border-2 border-[#ee8c31] animate-ping opacity-20"></div>
                <div className="w-16 h-16 rounded-full bg-black border border-[#ee8c31] flex items-center justify-center mb-6 shadow-[0_0_15px_#ee8c31]">
                    <TbCode className="text-3xl text-[#ee8c31]" />
                </div>
                <h3 className="text-[#ee8c31] font-bold text-lg tracking-wider uppercase mb-3">2. Pattern Extraction</h3>
                <p className="text-[11px] text-gray-300 leading-relaxed font-mono">
                    The engine scans your previously accepted LeetCode submissions on the chosen topic to extract core logic and forge personalized, reusable code snippets.
                </p>
            </motion.div>

            <AnimatedConnector />

            {/* STAGE 3: Agentic Routing & Practice */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="w-full md:w-1/3 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center shadow-xl"
            >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <TbTargetArrow className="text-3xl text-white" />
                </div>
                <h3 className="text-white font-bold text-lg tracking-wider uppercase mb-3">3. Smart Routing</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-mono">
                    After analyzing your history, the AI suggests the exact next "level-up" question to practice and redirects you straight to LeetCode to execute.
                </p>
            </motion.div>

        </div>
    </div>
  )
}

export default Flow;