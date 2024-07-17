import React, { useState, useEffect } from 'react';
import { destination } from '../helper/Data';

const Courasel = () => {
    const [ItemId, setItemId] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setItemId((prevId) => (prevId % destination.length) + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex flex-col items-center h-full w-full">
                {destination
                    .filter((item) => item.id === ItemId)
                    .map((item) => (
                        <div key={item.id} className="flex flex-col items-center h-full w-full">
                            {/* Image */}
                            <div className="w-[80%] h-[40rem] flex justify-center bg-gray-200">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            {/* Indicator Buttons */}
                            <div className="flex justify-center mt-4 space-x-2">
                                {destination.map((dest) => (
                                    <button
                                        key={dest.id}
                                        className={`w-4 h-4 rounded-full ${ItemId === dest.id ? 'bg-blue-500' : 'bg-gray-300'}`}
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
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Courasel;