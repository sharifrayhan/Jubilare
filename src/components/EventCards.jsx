import React from 'react';
import {  Link } from "react-router-dom";
import Swal from 'sweetalert2';

const EventCards = ({card}) => {

    const handleBuy = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank You For Purchasing',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div className=' w-80 lg:w-96 glass flex flex-col items-center rounded-lg'>
            <div className='p-4'>
                <img className=' rounded-md h-[500px]  ' src={card?.image} alt="" />
            </div>
            <div className=' p-6 flex flex-col gap-2 items-center text-center'>
                <h1 className='text-white font-semibold text-xl'>{card?.event_name}</h1>
                <p className='text-white '>{card?.description}</p>
                <p className='text-white '><span className=' font-bold text-orange-500'>Date: </span>{card?.date}</p>
                <p className='text-white '><span className=' font-bold text-orange-500'>Time: </span>{card?.time}</p>
                <p className='text-white '><span className=' font-bold text-orange-500'>Venue: </span>{card?.venue}</p>
                <p className=' text-white'><span className=' font-bold text-orange-500'>Ticket Price: </span>{card?.ticket_price}</p>
              
               <Link ><button onClick={handleBuy} className=' text-white rounded-lg bg-[#dd5549] px-2 py-2'>Buy Ticket</button></Link> 
            </div>
        </div>
    );
};

export default EventCards;