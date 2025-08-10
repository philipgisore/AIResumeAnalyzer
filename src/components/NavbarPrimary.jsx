import React from "react";
import { Link } from 'react-router-dom';

export default function NavbarPrimary() {
    return (
        <div className="px-4 py-2">
               <nav className="flex items-center justify-between py-4 px-6 
                bg-gradient-to-r from-[#0d2f66] to-[#0a3266]
                shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]
                rounded-3xl shadow-lg border border-[1.5px] border-white/40"
                relative>
        {/* Nav border */}
          <div className="absolute inset-0 rounded-xl pointer-events-none" 
            style={{
                borderTop: '1px solid transparent',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                background: `
                linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.6), rgba(255,255,255,0)) top/100% 1px no-repeat
                `,
                backgroundRepeat: 'no-repeat',
             }}/>

            {/* Logo */}
            <div className="px-4 py-1 rounded-xl bg-gradient-to-r from-[#0e1a3a] to-[#102652] 
                            text-[25px] font-sans font-bold 
                            text-transparent bg-clip-text bg-gradient-to-r from-[#3d6cff] via-[#3d5fff] to-[#1a47ff]">
            ResumeAI Pro
            </div>

            {/* Links & Buttons */}
            <div flex space-x-4>
                <Link to="/dashborad" className="px-4 py-2 text-gray-300 text-sm tracking-wide font-libertinus rounded-xl bg-[#32487d] hover:bg-[#3a5490] transition border border-white/10">
                    Dashboard
                </Link>
            </div>
        </nav>
        </div>
     
    );
}