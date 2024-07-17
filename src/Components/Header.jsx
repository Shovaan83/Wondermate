import React from 'react'
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderImage from "../assets/userProfile.jpg";
import { Link } from "react-router-dom";
import {landingHeaderLinks, headerLinks } from "../helper/Data.js";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
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
    <img
      className="h-16 w-16 object-cover rounded-full absolute right-4 top-1/2 transform -translate-y-1/2" 
      src={HeaderImage}
      alt="image"
    />
    <div className="absolute left-8 top-4 hidden md:block">
      <a href="/SignUp">
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

    <motion.div
          initial={{ x: open ? 600 : 0 }}
          animate={{ x: open ? 0 : 600 }}
          transition={{ duration: 0.3 }}
          className="h-screen w-[40%] block md:hidden fixed top-0 right-0 bg-zinc-300 z-50 rounded-xl"
        >
          {landingHeaderLinks.map((links) => (
            <Link
              key={links.id}
              className="flex p-4 font-bold hover:bg-blue-300 cursor-pointer"
              to={links.link}
            >
              {links.title}
            </Link>
          ))}
        </motion.div>
  </div>
  )
}

export default Header