import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import DestImg from "../assets/bg.jpg";
import { destination, hotels, travelPackages, topDestinations, thingsToDo } from "../helper/Data";
import Cards from "../Components/Card";
import Courasel from "../Pages/Courasel";

const Destination = ({data}) => {

  const [ItemId, setItemId] = useState(1);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleSlideChange = (index) => {
  //   setCurrentIndex(index - 1);
  // };



  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* <div className="w-full relative flex justify-center pt-4">
        <SimpleImageSlider
          width={896}
          height={504}
          images={destination.map(item => item.img)}
          showBullets={true}
          onStartSlide={handleSlideChange}
        />

        <div>
          <h1 className="font-bold text-2xl h-[12%] lg:w-[15%] absolute top-0 right-96 m-4 mr-10 mt-6 bg-white flex justify-center items-center gap-2 p-1 md:p-4 rounded-lg">
            Explore <span className="text-orange-500">{destination[currentIndex]?.title}</span>
          </h1>

        </div>
      </div>


      <div className="pt-4 text-center bg-slate-50 mt-5 rounded-lg">
        <h2 className="font-bold text-lg">{destination[currentIndex]?.title}</h2>
        <h3 className="font-semibold text-md">Common Weather : {destination[currentIndex]?.weather}</h3>
        <p className="">{destination[currentIndex]?.desc}</p>
      </div> */}
      {/* {data
      .filter((item) => item.id === ItemId)
      .map((item) => (
              <div key={item.id} className="flex flex-col h-full w-full">
              {/* Images */}

      <Courasel/>


      <div className="h-full w-full flex flex-col pt-4 xl:px-10">
        {/* Destinations */}
        <div className="h-full w-full flex flex-col pt-4 xl:px-10">
          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Destination</h1>
          </div>
          <Cards data={topDestinations} />

          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Hotels</h1>
          </div>
          <Cards data={hotels} />

          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Travel Packages</h1>
          </div>
          <Cards data={travelPackages} />

          <div className="flex gap-3 items-center pt-8">
            <img className="h-9 w-9 rounded-full cursor-pointer" src={DestImg} alt="Destination Image" />
            <h1 className="font-bold text-lg">Top Things To Do</h1>
          </div>
          <Cards data={thingsToDo} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
