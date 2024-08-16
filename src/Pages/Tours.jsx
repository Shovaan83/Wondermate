import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { getHotels, getTravelPackages, getThingsToDos, getTopDestinations } from "../api/index";
import userImg from "../assets/userProfile.jpg";
import HeadImg from "../assets/headerImg9.jpg";
import DestImg from "../assets/bg.jpg"
import Card from "../Components/Card";
import { IoSearch } from "react-icons/io5";
import { hotels, travelPackages, topDestinations } from "../helper/Data";
import Footer from '../Components/footer';

const Tours = () => {
  const [open, setOpen] = useState(false);

  const hotelUrl = "/user/hotels";
  const travelPackagesUrl = "/user/travelPackages";
  const thingsToDoUrl = "/user/thingsToDo";
  const topDestinationsUrl = "/user/topDestinations";
  const [hotels, setHotels] = useState([]);
  const [travelPackages, setTravelPackages] = useState([]);
  const [thingsToDo, setThingsToDo] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getHotels();
      setHotels(data);
    };
    fetchHotels();

    const fetchTravelPackages = async () => {
      const data = await getTravelPackages();
      setTravelPackages(data);
    };
    fetchTravelPackages();

    const fetchThingsToDo = async () => {
      const data = await getThingsToDos();
      setThingsToDo(data);
    };
    fetchThingsToDo();

    const fetchDestinations = async () => {
      const data = await getTopDestinations();
      setDestinations(data);
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    console.log("Hotels:", hotels);
    console.log("Travel Packages:", travelPackages);
    console.log("Things To Do:", thingsToDo);
    console.log("Destinations:", destinations);
  }, [hotels, travelPackages, thingsToDo, destinations]);


  return (
    <>
      {/* Main Div */}
      <div className="px-2 sm:px-4 md:px-8 lg:px-20">

        {/* Header Div
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
        </div> */}

        {/* Search Bar and Image*/}
        <div
          className="h-[40vh] relative sm:h-[55vh] md:h-[70vh] lg:h-[75vh] mt-8 w-full transition-all duration-300 ease-in-out rounded-lg"
          style={{
            background: `url(${HeadImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[12%] lg:w-[39%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white flex justify-center items-center gap-2 p-1 md:p-4 rounded-lg">
            <input
              className="h-[90%] w-[80%] lg:w-[90%] border-none outline-none text-xs sm:text-sm md:text-base lg:text-lg"
              placeholder="Search Your Places, Destination..."
              type="text"
            />
            <div className="h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10 lg:h-11 lg:w-11 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer">
              <IoSearch
                className="lg:flex xs:hidden hidden"
                size={22}
                color="white"
              />
              <IoSearch
                className="md:flex lg:hidden hidden"
                size={18}
                color="white"
              />
              <IoSearch
                className="sm:flex md:hidden hidden"
                size={16}
                color="white"
              />
              <IoSearch className="flex sm:hidden" size={12} color="white" />
            </div>
          </div>
        </div>

        {/* Card Component Div */}

        <div className="h-full w-full flex flex-col">

          {/* Destinations */}

          <div className='h-full w-full flex flex-col pt-4 xl:px-10'>

            <div className='flex gap-3 items-center pt-8'>
              <img
                className='h-9 w-9 rounded-full cursor-pointer'
                src={DestImg}
                alt="Destination Image"
              />

              <h1 className='font-bold text-lg'>Top Destination</h1>
            </div>

            <Card data={destinations } url={topDestinationsUrl} />

            <div className='flex gap-3 items-center pt-8'>
              <img
                className='h-9 w-9 rounded-full cursor-pointer'
                src={DestImg}
                alt="Destination Image"
              />

              <h1 className='font-bold text-lg'>Top Hotels</h1>
            </div>

            <Card data={hotels} url={hotelUrl}/>

            <div className='flex gap-3 items-center pt-8'>
              <img
                className='h-9 w-9 rounded-full cursor-pointer'
                src={DestImg}
                alt="Destination Image"
              />

              <h1 className='font-bold text-lg'>Top Travel Packages</h1>
            </div>

            <Card data={travelPackages} url={travelPackagesUrl}/>


          </div>

        </div>



      </div>
    </>
  );
};

export default Tours;