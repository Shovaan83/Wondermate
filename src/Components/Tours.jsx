import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import userImg from "../assets/userProfile.jpg";
import HeadImg from "../assets/headerImg9.jpg";
import DestImg from "../assets/bg.jpg"

const Tours = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="h-[7vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center relative">
                <RxHamburgerMenu
                    size={30}
                    color="black"
                    className="cursor-pointer block md:hidden"
                    onClick={() => {
                        setOpen(!open);
                    }}
                />
                <img
                    className="h-10 w-10 object-cover rounded-full absolute right-4 top-1/2 transform -translate-y-1/2"
                    src={userImg}
                    alt="image"
                />
            </div>

            <div className="relative flex justify-center items-center mt-5">
                <img
                    className='w-full h-auto m-2 rounded-lg'
                    src={HeadImg}
                    alt="MainImg"
                />
                <input
                    type="text"
                    placeholder="Search Your Places,Destinations"
                    className="absolute p-2 rounded-lg border outline-none z-10 bg-zinc-50"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                />
            </div>

            <div className='h-[20vh] flex items-center ml-2 space-x-3'>
                <img
                    className='rounded-full w-12 h-12 object-cover'
                    src={DestImg}
                    alt="Destination Img"
                />
                <h1 className='text-black text-2xl font-bold'>Top Destinations</h1>
            </div>

        </>
    );
};

export default Tours;
