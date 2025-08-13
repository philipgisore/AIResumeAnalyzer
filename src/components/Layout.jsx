import React from "react";
import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";


export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#121e37] via-[#213a4b] to-[#2c344e] relative overflow-hidden">

            {children}
        </div>
    );
}