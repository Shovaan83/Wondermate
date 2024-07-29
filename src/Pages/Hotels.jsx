import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { StarRating } from "../Components/StarRating";
import { getHotels } from "../api";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getHotels();
      setHotels(data);
    };
    fetchHotels();
  }, []);

  // const handleViewDeal = (id) => {
  //   navigate(`/user/hotels/${id}`);
  // };

  return (
    <div className="flex flex-col items-center h-full w-full">
      {hotels.map((packageItem) => (
        <div
          key={packageItem.id}
          className="h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-1 m-4"
          style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
        >
          <div className="bg-zinc-100 h-[45vh] shadow-lg flex flex-col md:flex-row">
            
            <img
              src={packageItem.img[0]}
              alt={packageItem.name}
              className="object-cover items-center p-3 w-full md:w-1/2 h-full rounded-lg"
            />
            <div className="p-6 flex flex-col mt-auto mb-auto gap-5 md:w-1/2">
              <h1 className="text-2xl text-center mt-2 font-bold text-blue-700">
                {packageItem.name}
              </h1>
              <p className="text-black text-2xl font-bold text-center mt-1">
                ${packageItem.price}
              </p>
              <a 
            key={hotels.id}
            href={`./hotels/${packageItem.id}`}
            >
                        <button 
                className="mt-1 ml-auto mr-auto tracking-wider font-semibold bg-blue-500 text-gray-100 w-1/2 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                View Deal
              </button>    
                
            </a>
              <div className="mt-2">
                <p className="text-green-600 text-center flex justify-center items-center">
                  {packageItem.freeCancellation ? "✔️ Free Cancellation" : "❌ No Free Cancellation"}
                </p>
                <p className="text-green-600 text-center flex justify-center items-center">
                  {packageItem.reserveNow ? "✔️Reserve now, pay at stay" : "❌Pay at stay not available"}
                </p>
              </div>
              <StarRating rating={packageItem.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
