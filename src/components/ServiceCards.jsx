import React from 'react';

const ServiceCards = ({card}) => {
    return (
        <div className=' rounded-md'>
            <div>
                <img src={card?.image} alt="" />
            </div>
            <div>
                <h1>{card?.title}</h1>
                <p>{card?.price}</p>
                <p>{card?.short_description}</p>
                <button className=' bg-[#dd5549] px-2 py-3'>More Info</button>
            </div>
        </div>
    );
};

export default ServiceCards;