import React from 'react'
import Map from './Map';
import { StarRating } from './StarRating';
import userProfile from '../assets/userProfile.jpg';


const Template = ({details}) => {
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <div className='h-full w-full sm:h-[55%] sm:w-[80%] grid sm:grid-cols-2'
        style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
      >
        <div className='h-full w-full bg-zinc-100 flex items-center justify-center'>
          <img 
            className='object-cover w-full h-full rounded-lg drop-shadow-xl'
            src={details.img[0]}
            alt="details image" 
          />
        </div>

        <div className='bg-zinc-100 grid grid-rows-2 gap-4 p-4'>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <img 
                className='object-cover w-full h-full rounded-lg drop-shadow-xl'
                src={details.img[1]} 
                alt="detailsImg" 
              />
            </div>
            <div className='flex-1'>
              <img 
                className='object-cover w-full h-full rounded-lg drop-shadow-xl'
                src={details.img[2]} 
                alt="detailsImg" 
              />
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <img 
                className='object-cover w-full h-full rounded-lg drop-shadow-xl'
                src={details.img[3]} 
                alt="detailsImg" 
              />
            </div>
            <div className='flex-1'>
              <img 
                className='object-cover w-full h-full rounded-lg drop-shadow-xl'
                src={details.img[4]} 
                alt="detailsImg" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4 mt-8 ml-[35%] mr-[100%]'>
        <h1 className='font-bold text-black text-xl cursor-pointer hover:border-b-4 hover:border-blue-400'>About</h1>
        <h1 className='font-bold text-black text-xl cursor-pointer hover:border-b-4 hover:border-blue-400'>Location</h1>
        <h1 className='font-bold text-black text-xl cursor-pointer hover:border-b-4 hover:border-blue-400'>Reviews</h1>
      </div>

      <div
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        className='bg-white mt-4 mx-auto w-[80%] rounded-lg p-6'
      >
        <h1 className='font-bold text-black text-4xl mb-4'>{details.id}</h1>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-lg font-semibold text-gray-700 flex-1'>{details.desc}</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105'>
            Book Now
          </button>
        </div>
      </div>

      <div className='h-[50vh] w-[80%] my-4 rounded id="location"'>
        <Map />
      </div>

      <div className=' h-full w-[80%] shadow-lg p-5 rounded-lg mt-5 mb-5'>
        <h1 className='font-bold text-xl'>Write a Review</h1>

        <div className='mb-5'>
          <label className='block text-sm md:text-base mb-2'>
            Your Review
          </label>
          <textarea className='w-full p-2 border rounded focus:outline-none focus:border-blue-200' rows={4} required></textarea>
        </div>

        <div className='mb-5'>
          <label className='font-bold text-xl'>Your Rating </label>
          <div className='ml-20  mr-[100%] mt-5'>
            <StarRating />
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 mt-5 text-white text-lg font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105'>
            Submit Review
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default Template