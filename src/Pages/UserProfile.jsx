import React from 'react'
import { useState, useEffect } from 'react';
import coverImg from '../assets/Spa.jpg';
import profileImg from '../assets/bg6.jpg';
import { getUsers } from '../api/index';


const UserProfile = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          const data = await getUsers();
          setUsers(data);
        };
        fetchUsers();
      }, []);
  return (

    <>
        {users.map((user) => (
            <div className='h-screen w-full flex flex-col  border border-blue-300'>
            <div className='h-72 w-full border-blue-200  rounded-xl'
            style={{backgroundImage: `url(${user.coverImage})`, backgroundSize: "cover", backgroundPosition: "center"}}
            >
            </div >
            <div className='flex justify-between  border'>
            <img className='rounded-full h-32 w-32 sm:h-48 sm:w-48 ml-18 sm:ml-48 border border-white -mt-16' src={user.img} alt="Profile pic" />
            <div className='mt-10'>
                <button className='border border-black rounded-full p-3 w-48 hover -mt-16 sm:mr-[350px]'>
                    <a href="/user/editProfile">Edit Profile</a>
                </button>
            </div>
            </div>
            
            <div className='h-36 w-full border border-blue-600 mt-4'>
                <h1 className='text-3xl font-bold'>{user.name}</h1>
                <p className='font-semibold text-md mt-2'>{user.bio}</p>
            </div>

            <div>
                <h1 className='text-2xl font-bold mt-3'>Hotel Bookings</h1>
            </div>

            <div>
                <h1 className='text-2xl font-bold mt-3'>Travel Package Booking</h1>
            </div>
        </div>
        ))}
      

    </>
  )

}

export default UserProfile