import React from 'react';
import Swal from 'sweetalert2';

const PricingCards = ({card}) => {

    const {image,title,pricing_plans} = card;
    const firstPackage = pricing_plans[0];
    const secondPackage = pricing_plans[1];
    const thirdPackage = pricing_plans[2];


    const handleInterested = () =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank You For Choosing Us <br /> We will contact to you soon',
            showConfirmButton: false,
            timer: 2500 
          })
    }
    return (
        <div>
<center className='text-white font-bold text-xl my-2'><h1>{title}</h1></center>
<div className=' w-80 lg:w-full glass flex flex-col items-center rounded-lg'>
            <div className='p-4'>
                <img className=' rounded-md h-[300px]  ' src={image} alt="" />
            </div>
            <div className='flex flex-wrap p-5 gap-2'>

                <div className=' p-6 glass rounded-lg flex  w-[250px] md:w-[300px] lg:w-[350px] flex-col gap-2 items-center text-center'>
                    <h1 className='text-white mb-3 font-semibold text-xl'>{firstPackage?.name}</h1>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Price: </span>{firstPackage?.price}</p>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Includes: </span>{firstPackage?.includes}</p>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Additional Options: </span>{firstPackage?.additional_options}</p>
                    <button onClick={ handleInterested}  className=' mt-auto text-white rounded-lg bg-[#dd5549] px-2 py-2'>Interested</button>
                </div>

                <div className=' p-6 glass  rounded-lg flex w-[250px] md:w-[300px] lg:w-[350px] flex-col gap-2 items-center text-center'>
                    <h1 className='text-white mb-3 font-semibold text-xl'>{secondPackage?.name}</h1>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Price: </span>{secondPackage?.price}</p>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Includes: </span>{secondPackage?.includes}</p>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Additional Options: </span>{secondPackage?.additional_options}</p>
                    <button onClick={ handleInterested}  className='  mt-auto text-white rounded-lg bg-[#dd5549] px-2 py-2'>Interested</button>
                </div>

                <div className=' p-6 glass  rounded-lg flex w-[250px] md:w-[300px] lg:w-[350px] flex-col gap-2 items-center text-center'>
                    <h1 className='text-white mb-3 font-semibold text-xl'>{thirdPackage?.name}</h1>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Price: </span>{thirdPackage?.price}</p>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Includes: </span>{thirdPackage?.includes}</p>
                    <p className='text-white '><span className=' font-bold text-orange-500'>Additional Options: </span>{thirdPackage?.additional_options}</p>
                    <button onClick={ handleInterested}  className='  mt-auto text-white rounded-lg bg-[#dd5549] px-2 py-2'>Interested</button>
                </div>


            </div>
        </div>

        </div>
    );
};

export default PricingCards;