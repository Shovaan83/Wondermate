import React from 'react'
import  {footerLinks}  from '../helper/Data.js'
import { Link } from 'react-router-dom'

const Footer = () => {
    const aboutLinks = footerLinks.filter((items,index) => index < 5);
    const exploreLinks = footerLinks.filter((items,index) => index >=5 && index < 9 );
    const tripLinks = footerLinks.filter((items,index) => index >= 10);
    // console.log(aboutLinks);
  return (
    <>
       <div className='rounded-3xl mt-5 mb-3 w-[85%] ml-auto mr-auto'
        style={{
            backgroundColor:"#FFFFFF",
            background: `radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)`
        }}>
            <div className='grid grid-cols-2 gap-7 p-2 border-none md:flex md:justify-evenly border border-gray-400 md:p-4'>
            <div className='h-40'>
                <h1 className='font-bold ml-3'>About WanderMate</h1>
                <div className='flex flex-col ml-5 text-md gap-1 '>
                    {aboutLinks.map((item) => (
                            <Link to={item.link} key={item.id} className='list-none hover:border-b-2 cursor-pointer'>
                                {item.name}
                            </Link>
                    ))}
                </div>
               
            </div>

            <div>
                <div className='h-40'>
                    <h1 className='font-bold ml-3'>Explore</h1>
                    <div className='flex flex-col ml-4 text-md gap-1 '>
                        {exploreLinks.map((item) => (
                                <Link to={item.link} key={item.id} className='list-none hover:border-b-2 cursor-pointer'>
                                    {item.name}
                                </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div>
            <div className='h-39'>
                    <h1 className='font-bold ml-3'>Trip-Advisior Sites</h1>
                    <div className='flex flex-col ml-4 text-md gap-1  '>
                        {tripLinks.map((item) => (
                                <Link to={item.link} key={item.id} className='list-none hover:border-b-2 cursor-pointer'>
                                    {item.name}
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
            </div>

            <div className='font-medium ml-20  md:flex md:justify-evenly p-1'>@2024 WanderMate LLC All rights reserved</div>
       </div>

      
    </>

  )
}

export default Footer