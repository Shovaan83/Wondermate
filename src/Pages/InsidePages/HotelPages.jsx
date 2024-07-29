import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getHotel, getReview } from "../../api/index";
// import Map from '../../Components/Map';
import { StarRating } from '../../Components/StarRating';
import userProfile from '../../assets/userProfile.jpg';
import Template from '../../Components/Template'; 

const HotelPages = () => {
  const { id } = useParams();
  console.log(id);

  const [hotel, setHotelData] = useState(null);
  const [review, setReviewData] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const data = await getHotel(id);
        setHotelData(data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };
    fetchHotelData();

    const fetchHotelReviews = async () => {
      try {
        const data = await getReview(id);
        console.log(data);
        setReviewData(data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };
    fetchHotelReviews();
  }, [id]);

  if (!hotel) return <div>Loading...</div>;
  return (
    // <div className='h-full w-full flex flex-col items-center'>
    //   <div className='h-full w-full sm:h-[55%] sm:w-[80%] grid sm:grid-cols-2'
    //     style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
    //   >
    //     <div className='h-full w-full bg-zinc-100 flex items-center justify-center'>
    //       <img 
    //         className='object-cover w-full h-full rounded-lg'
    //         src={hotel.img[0]}
    //         alt="hotel image" 
    //       />
    //     </div>

    //     <div className='bg-zinc-100 grid grid-rows-2 gap-4 p-4'>
    //       <div className='flex gap-4'>
    //         <div className='flex-1'>
    //           <img 
    //             className='object-cover w-full h-full rounded-lg'
    //             src={hotel.img[1]} 
    //             alt="hotelImg" 
    //           />
    //         </div>
    //         <div className='flex-1'>
    //           <img 
    //             className='object-cover w-full h-full rounded-lg'
    //             src={hotel.img[2]} 
    //             alt="hotelImg" 
    //           />
    //         </div>
    //       </div>
    //       <div className='flex gap-4'>
    //         <div className='flex-1'>
    //           <img 
    //             className='object-cover w-full h-full rounded-lg'
    //             src={hotel.img[3]} 
    //             alt="hotelImg" 
    //           />
    //         </div>
    //         <div className='flex-1'>
    //           <img 
    //             className='object-cover w-full h-full rounded-lg'
    //             src={hotel.img[4]} 
    //             alt="hotelImg" 
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='flex gap-4 mt-8 ml-[35%] mr-[100%]'>
    //     <h1 className='font-bold text-black text-xl cursor-pointer hover:border-b-4 hover:border-blue-400'>About</h1>
    //     <h1 className='font-bold text-black text-xl cursor-pointer hover:border-b-4 hover:border-blue-400'>Location</h1>
    //     <h1 className='font-bold text-black text-xl cursor-pointer hover:border-b-4 hover:border-blue-400'>Reviews</h1>
    //   </div>

    //   <div
    //     style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    //     className='bg-white mt-4 mx-auto w-[80%] rounded-lg p-6'
    //   >
    //     <h1 className='font-bold text-black text-4xl mb-4'>{hotel.id}</h1>
    //     <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
    //       <p className='text-lg font-semibold text-gray-700 flex-1'>{hotel.desc}</p>
    //       <button className='bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105'>
    //         Book Now
    //       </button>
    //     </div>
    //   </div>

    //   <div className='h-[50vh] w-[80%] my-4 rounded id="location"'>
    //     <Map />
    //   </div>

    //   <div className=' h-full w-[80%] shadow-lg p-5 rounded-lg mt-5 mb-5'>
    //     <h1 className='font-bold text-xl'>Write a Review</h1>

    //     <div className='mb-5'>
    //       <label className='block text-sm md:text-base mb-2'>
    //         Your Review
    //       </label>
    //       <textarea className='w-full p-2 border rounded focus:outline-none focus:border-blue-200' rows={4} required></textarea>
    //     </div>

    //     <div className='mb-5'>
    //       <label className='font-bold text-xl'>Your Rating </label>
    //       <div className='ml-20  mr-[100%] mt-5'>
    //         <StarRating />
    //       </div>

    //       <button className='bg-blue-500 hover:bg-blue-700 mt-5 text-white text-lg font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105'>
    //         Submit Review
    //       </button>
    //     </div>
    //   </div>

    //   <div className="h-full w-[80%] shadow-lg mb-8" id="reviews">
    //           <h2 className="p-4 font-semibold text-sm md:text-xl lg:2xl">
    //             Reviews
    //           </h2>
    //           {console.log(review)}
    //           {!review ? (
    //             <p className="text-xs md:text-base p-4">No Reviews Yet</p>
    //           ) : (
    //             review.map((review) => (
    //               <div
    //                 key={review.id}
    //                 className="h-20vh w-full flex flex-col p-8 gap-2"
    //               >
    //                 <div className="h-full w-full flex items-center gap-4">
    //                   <img
    //                     src={userProfile}
    //                     alt={review?.user}
    //                     className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
    //                   />
    //                   <p className="w-96 font-semibold text-sm md:text-xl lg:2xl">
    //                     {review.user}
    //                   </p>
    //                   <StarRating rating={review.rating} />
    //                 </div>
    //                 <p className="font-medium text-xs md:text-base">
    //                   {review.comment}
    //                 </p>
    //                 <p className="font-bold text-xs md:text-base">
    //                   {review.date}
    //                   {/* {new Date(review.createdOn).toLocaleString()} */}
    //                 </p>{" "}
    //                 <div className="flex justify-center pt-4">
    //                   <hr className="border-b-1 border-gray-500 w-[80%]" />
    //                 </div>
    //               </div>
    //             ))
    //           )}
    //         </div>
    // </div>
    <>
        <Template details={hotel}/> 

        <div className="h-full w-[80%] shadow-lg ml-auto mr-auto mb-8"  id="reviews">
              <h2 className="p-4 font-semibold text-sm md:text-xl lg:2xl">
                Reviews
              </h2>
              {console.log(review)}
              {!review ? (
                <p className="text-xs md:text-base p-4">No Reviews Yet</p>
              ) : (
                review.map((review) => (
                  <div
                    key={review.id}
                    className="h-20vh w-full flex flex-col p-8 gap-2"
                  >
                    <div className="h-full w-full flex items-center gap-4">
                      <img
                        src={userProfile}
                        alt={review?.user}
                        className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
                      />
                      <p className="w-96 font-semibold text-sm md:text-xl lg:2xl">
                        {review.user}
                      </p>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="font-medium text-xs md:text-base">
                      {review.comment}
                    </p>
                    <p className="font-bold text-xs md:text-base">
                      {review.date}
                      {/* {new Date(review.createdOn).toLocaleString()} */}
                    </p>{" "}
                    <div className="flex justify-center pt-4">
                      <hr className="border-b-1 border-gray-500 w-[80%]" />
                    </div>
                  </div>
                ))
              )}
            </div>
    
    </>


    
  );
}

export default HotelPages;
