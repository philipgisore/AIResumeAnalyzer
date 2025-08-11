import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
export default function NavbarPrimary({currentPage, onPageChange}) {
  return (
    <div className="px-4 py-2">
      <nav className="relative z-50 flex items-center justify-between py-4 px-6 
        bg-gradient-to-r  from-[#172f5e] via-[#1e355e] to-[#26385a] shadow-[0_0_12px_rgba(255,255,255,0.08)] 
        shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]
        rounded-3xl shadow-lg border border-[1.5px] border-white/10 overflow-hidden backdrop-blur-xl">

        {/* Nav border */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            borderTop: '1px solid transparent',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
            background: `linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.6), rgba(255,255,255,0)) top/100% 1px no-repeat`,
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Logo */}
        <div className="px-4 py-1 rounded-xl  
          text-[1.5rem] font-sans font-bold 
          text-transparent bg-clip-text bg-gradient-to-r from-[#2a65e5] via-[#1d4bd1] to-[#1e42b6]">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ResumeAI Pro</span>
          
        </div>

        {/* Links & Buttons */}
        <div className="flex space-x-4">
          <Link to="/dashboard" className="px-4 py-2 text-gray-300 text-md tracking-wide font-libertinus rounded-2xl bg-[#2f4365] hover:bg-[#3a5490] hover:shadow-[0_4px_10px_rgba(50,72,125,0.5)] hover:-translate-y-0.5 transition-all duration-200 border border-white/10">
            Dashboard
          </Link>
          <Link to="/signin" className="px-4 py-2 text-gray-300 text-md tracking-wide font-libertinus rounded-xl bg-[#344463] hover:bg-[#3a5490] hover:shadow-[0_4px_10px_rgba(50,72,125,0.5)] hover:-translate-y-0.5 transition-all duration-200 border border-white/10">
            Sign In
          </Link>
          <Link to="/get-started" className="px-4 py-2 bg-gradient-to-r from-[#3273ed] via-[#1d4bcf] to-[#1d44bb] text-white rounded-xl hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_3px_8px_rgba(255,255,255,0.3)] border border-blue-900">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
