import React, { useState, useEffect } from "react";
import { getHotels, getTravelPackages, getThingsToDos, getTopDestinations } from "../api/index";
import SimpleImageSlider from "react-simple-image-slider";
import DestImg from "../assets/bg.jpg";
import { destination, hotels, travelPackages, topDestinations, thingsToDo } from "../helper/Data";
import Cards from "../Components/Card";
import Courasel from "../Pages/Courasel";

const Destination = ({ data }) => {

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
    <div className="h-full w-full flex flex-col items-center">
      <Courasel />
      <div className="h-full w-full flex flex-col pt-4 xl:px-10">
        {/* Destinations */}
        <div className="h-full w-full flex flex-col pt-4 xl:px-10">
          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Destination</h1>
          </div>
          <Cards data={destinations} url={topDestinationsUrl} />

          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Hotels</h1>
          </div>
          <Cards data={hotels} url={hotelUrl} />

          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Travel Packages</h1>
          </div>
          <Cards data={travelPackages} url={travelPackagesUrl} />

          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Things To Do</h1>
          </div>
          <Cards data={thingsToDo} url={thingsToDoUrl} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
