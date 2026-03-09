import React from "react";
import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#121e37] via-[#213a4b] to-[#2c344e] relative overflow-hidden">
      {/* Primary Navbar */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <NavbarPrimary />
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <NavbarSecondary />
        </div>
      </div>

      {/* Page Content */}
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
