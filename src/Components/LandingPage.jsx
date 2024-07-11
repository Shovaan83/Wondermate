import { useState } from "react";
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx";
import BGImg from "../assets/bg8.jpg";
import HeaderImage from "../assets/headerImg5.jpg";
import { landingFooterLinks, LandingHeaderLinks, NavLinks } from "../helper/Data.js";
import { Link } from "react-router-dom"

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* encapsulates all */}
      <div
        className="h-screen w-full flex flex-col justify-between"
        style={{
          background: `linear-gradient(rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0.6)),url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* header */}
        <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center relative">
          <RxHamburgerMenu
            size={25}
            color="white"
            className="cursor-pointer sm:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}
            className="h-52 w-40 object-cover absolute right-0"
            src={HeaderImage}
            alt="image"
          />
          <div className="absolute left-8 top-4 hidden sm:block md:block">
            <h1 className="text-4xl font-bold text-orange-500">Explore.</h1>
          </div>
          <div className="flex justify-center items-center   gap-4">
            {NavLinks.map((links) => (
              <Link key={links.id} className="p-4 font-bold text-white hidden sm:block md:block text-lg hover:border-b-2 cursor-pointer">
                <a href={links.link}>{links.title}</a>
              </Link>
            ))}
          </div>
        </div>


        {/* side menu */}
        <motion.div
          initial={{ x: open ? 600 : 0 }}
          animate={{ x: open ? 0 : 600 }}
          transition={{ duration: 0.3 }}
          className={`
            h-screen w-[40%] sm:hidden fixed top-0 right-0 bg-zinc-300 z-50 rounded-xl`}
        >
          {
            LandingHeaderLinks.map((links) => (
              <>
                <Link key={links.id}
                  className="flex p-4 font-bold hover:bg-blue-300 cursor-pointer "
                >
                  <a href="{links.link}">{links.title}</a>
                </Link>
              </>
            ))
          }
        </motion.div>

        {/* hero */}
        <div className="w-full text-center text-white">
          <p className="text-lg font-bold md:text-xl lg:text-2xl bg-gradient-to-b from-gray-400 to-gray-100 text-transparent bg-clip-text">
            The Country of Himalays
          </p>
          <h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-yellow-600">NEP</span>AL
          </h1>
        </div>
        {/* footer */}
        <div className="w-full grid grid-cols-2">
          {/* first side */}
          <div className="h-full w-full">
            <p className="leading-6 pl-6 md:pl-12 pb-6 md:pb-12 text-white font-semibold">
              Visit Nepal, You will never regret it. <br /> This is something
              incredible, fantastic, <br /> mesmerizing and lifetime experience.{" "}
            </p>
          </div>
          {/* second side */}
          <div className="h-full w-full flex flex-col-2 ">
            <div className="h-20 w-full items-center flex gap-4 flex-wrap ml-[35%]  backdrop-blur-sm right-0 bottom-0">
              {landingFooterLinks.map((link) => (
                <>
                  <li
                    key={link.id}
                    className="text-white font-bold list-none hover:border-b-4 border-yellow-400 "
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;