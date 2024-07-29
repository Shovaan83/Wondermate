import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { adminSidebar } from '../helper/Data';
import "../index.css"

const DashBoardSideLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SideBar */}
      <motion.div
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className=" flex-1 bg-blue-600"
      >
        <div className='bg-transparent h-96 w-full sticky top-0 left-0'>
          <RxHamburgerMenu
            size={30}
            color="black"
            className="cursor-pointer block md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <h1 className="font-bold text-4xl mt-3 ml-3 mb-10 hidden md:block cursor-pointer">
            WanderMate
          </h1>
          {adminSidebar.map((links) => (
            <Link
              key={links.id}
              className="text-xl text-black p-4 font-bold hover:bg-blue-300 hidden md:block hover:text-white cursor-pointer"
              to={links.to}
            >
              {links.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default DashBoardSideLayout;
