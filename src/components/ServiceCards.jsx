import React from 'react';
import {  Link } from "react-router-dom";

const ServiceCards = ({card}) => {
    return (
        <div className=' w-80 lg:w-96 glass flex flex-col items-center rounded-lg'>
            <div>
                <img className=' h-52 rounded-b-full ' src={card?.image} alt="" />
            </div>
            <div className=' p-6 flex flex-col gap-2 items-center text-center'>
                <h1 className='text-white font-semibold text-xl'>{card?.title}</h1>
                <p className='text-sm text-white'>{card?.price}</p>
                <p className='text-white '>{card?.short_description}</p>
               <Link to={`/Details/${card?.id}`}><button className=' text-white rounded-lg bg-[#dd5549] px-2 py-2'>More Info</button></Link> 
            </div>
        </div>
    );
};

export default ServiceCards;