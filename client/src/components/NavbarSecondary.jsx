import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarSecondary() {
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Upload', path: '/upload' },
        { name: 'Analysis', path: '/analysis' },
        { name: 'Export', path: '/export'}
    ];

    return (
        <div className="flex justify-center items-center bg-transparent z-50 mt-8">
         <nav className="relative z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-transparent backdrop-blur-md border border-white/10">
         {navItems.map((item) => {
            const isActive = location.pathname === item.path;
                return (
        <Link
          key={item.name}
          to={item.path}
          className={`px-4 py-2 rounded-xl text-sm font-light transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-[#3375ee] to-[#1d44bc] text-white shadow-lg shadow-blue-500/30'
              : 'text-gray-300 hover:text-white hover:bg-[#324362]'
          }`}
        >
          {item.name}
        </Link>
      );
    })}
  </nav>
</div>
    );
}
