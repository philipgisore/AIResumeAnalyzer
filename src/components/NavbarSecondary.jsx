import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarSecondary() {
    console.log("NavbarSecondary rendered");
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Upload', path: '/upload' },
        { name: 'Analysis', path: '/analysis' },
        { name: 'Export', path: '/export'}
    ];

    return (
        <div className='flex justify-center items-center bg-gradient-to-br from-[#1f344c] to-[#263249] z-50 mt-8'>
            <nav className='relative z-50 flext items-center space-x-6 bg-transparent border border-white/10 px-4 py-5 rounded-2xl shadow-lg shadow-white/5 text-sm'>
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link 
                        key={item.name}
                        to={item.path}
                        className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                            isActive
                                ? 'bg-gradient-to-r from-[#3375ee] to-[#1d44bc] text-white shadow-lg'
                                : 'text-gray-300 hover:text-white hover:bg-[#324362]'
                        }`}
                    >
                        {item.name}
                    </Link>
                )
            })}</nav>
        </div>
    );
}
