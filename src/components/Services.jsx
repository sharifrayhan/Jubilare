import React, { useContext } from 'react';
import AllContext from '../context/AllContext';
import ServiceCards from './ServiceCards';

const Services = () => {
    const {cards} = useContext(AllContext)

    return (
        <div className=' grid grid-cols-3 gap-3'>
            {
                cards?.map(card=>(
                    <ServiceCards key={card.id} card={card}></ServiceCards>
                ))
            }
        </div>
    );
};

export default Services;