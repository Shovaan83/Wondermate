import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderImage from '../assets/userProfile.jpg';
import { Link } from 'react-router-dom';
import { landingHeaderLinks, headerLinks } from '../helper/Data.js';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center relative">
      <RxHamburgerMenu
        size={30}
        color="black"
        className="cursor-pointer block md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className="absolute left-8 top-4 hidden md:block">
        <a href="/user/tours">
          <h1 className="text-4xl font-bold text-blue-600">WanderMate</h1>
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        {headerLinks.map((links) => (
          <Link
            key={links.link}
            className="p-4 font-bold text-black hidden md:block text-xl hover:border-b-2 cursor-pointer"
            to={links.link}
          >
            {links.linkTitle}
          </Link>
        ))}
      </div>

      <div className="relative">
        <img
          className="h-16 w-16 object-cover rounded-full cursor-pointer"
          src={HeaderImage}
          alt="Profile"
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            <Link
              to="/user/userprofile"
              className="block px-4 py-2 text-black hover:bg-gray-200"
              onClick={() => setDropdownOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={() => {
                console.log('Logged out');
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
            >
              Log Out
            </button>
          </div>
        )}
      </div>

      <motion.div
        initial={{ x: open ? 600 : 0 }}
        animate={{ x: open ? 0 : 600 }}
        transition={{ duration: 0.3 }}
        className="h-screen w-[40%] block md:hidden fixed top-0 right-0 bg-zinc-300 z-50 rounded-xl"
      >
        {headerLinks.map((links) => (
          <Link
            key={links.link}
            className="flex p-4 font-bold hover:bg-blue-300 cursor-pointer"
            to={links.link}
          >
            {links.linkTitle}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
