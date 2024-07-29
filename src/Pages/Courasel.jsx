import React, { useState, useEffect } from 'react';
import { destination } from '../helper/Data';

const Courasel = () => {
    const [ItemId, setItemId] = useState(1);
    const [seeMore, setSeeMore] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setItemId((prevId) => (prevId % destination.length) + 1);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (ItemId < 5) {
                setItemId((prevId) => prevId + 1);
            }
            else {
                setItemId(1);
            }
        }, 5000)

        return () => clearInterval(interval);
    }, [ItemId]);



    return (
        <>
            <div className="flex flex-col items-center h-full w-full">
                {destination
                    .filter((item) => item.id === ItemId)
                    .map((item) => (
                        <div key={item.id} className="flex flex-col items-center h-full w-full relative">
                            {/* Image */}
                            <div className="h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh] w-full mt-8 shadow-xl relative transition-all ease-in-out duration-300">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                                <h1 className="absolute top-[2%] lg:top-[3%] right-[2%] lg:right-[1%] py-4 lg:py-6 px-2 bg-gray-50 backdrop-blur-sm rounded-xl font-bold lg:text-3xl cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-300">
                                    Explore <span className="text-orange-500">{destination.find((item) => item.id === ItemId)?.title}</span>
                                </h1>
                            </div>
                            {/* Indicator Buttons */}
                            <div className="flex justify-center mt-4 space-x-2">
                                {destination.map((dest) => (
                                    <button
                                        key={dest.id}
                                        className={`w-4 h-4 border border-orange-300 cursor:pointer hover:bg-orange-400  rounded-full ${ItemId === dest.id ? 'bg-orange-400' : 'bg-gray-300'}`}
                                        onClick={() => setItemId(dest.id)}
                                    />
                                ))}
                            </div>
                            {/* Title */}
                            <div className="text-center text-2xl font-bold mb-4">
                                {item.title}
                            </div>
                            {/* Weather */}
                            <div className="text-center text-lg mt-4">
                                Weather: {item.weather}
                            </div>
                            {/* Description */}
                            <div className="mt-4 p-4 text-center">
                                <p className={`${seeMore ? "line-clamp-none" : "line-clamp-4"} transition-all duration-250`}>
                                    {item.desc}</p>
                                <button className='font-bold text-blue-500  flex justify-end ml-[85%]'
                                    onClick={() => { setSeeMore(!seeMore) }}
                                >
                                    {`${seeMore ? "See Less" : "See More"}`}
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Courasel;