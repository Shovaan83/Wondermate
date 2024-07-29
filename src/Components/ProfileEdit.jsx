import React from 'react';
import Img from '../assets/bg6.jpg';

const ProfileEdit = () => {
  return (
    <div className='min-h-screen w-full max-w-4xl mx-auto flex flex-col justify-center items-center bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='flex justify-between w-full items-center mb-5'>
        <p className='cursor-pointer font-bold'>Back</p>
        <h1 className='font-bold'>Edit Profile</h1>
        <button className='cursor-pointer font-bold bg-gray-200 text-black rounded-full px-4 py-1'>
          Save
        </button>
      </div>

      <div className='w-full flex items-center justify-center mb-4'>
        <input
          type="file"
          className='hidden'
        />
      </div>

      <div className='relative mb-8'>
        <img
          className='h-28 w-28 border-2 border-white rounded-full'
          src={Img} alt="Profile"
        />
      </div>

      <form className='flex flex-col space-y-4 w-full max-w-lg'>
        <input
          type="text"
          placeholder='Name'
          className='w-full h-12 border border-slate-200 bg-black rounded-md p-2'
        />

        <textarea
          placeholder='Bio'
          className='w-full h-24 border border-slate-200 bg-black rounded-md p-2 resize-none'
        />

        <input
          type="text"
          placeholder='Location'
          className='w-full h-12 border border-slate-200 bg-black rounded-md p-2'
        />

        <input
          type="text"
          placeholder='Website'
          className='w-full h-12 border border-slate-200 bg-black rounded-md p-2'
        />
      </form>

      <div className='mt-10 w-full max-w-lg text-center'>
        <p className='text-gray-600 text-lg'>Birth date . <span className='text-blue-600 cursor-pointer'>Edit</span></p>
        <h1 className='font-semibold text-xl mt-5'>September 29, 2005</h1>
      </div>
    </div>
  );
};

export default ProfileEdit;
