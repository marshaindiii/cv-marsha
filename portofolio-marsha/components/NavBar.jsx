"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from "./NavLink";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href='#about' className="text-white hover:text-gray-300">About</a>
        </li>
        <li>
          <a href='#education' className="text-white hover:text-gray-300">Education</a>
        </li>
        <li>
          <a href='#contact' className="text-white hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={'/'} className="text-1xl md:text-5xl text-white font-semibold">
          ACHA
        </Link>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XCircleIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
