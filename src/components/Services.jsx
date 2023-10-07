
import { useContext, useEffect, useState } from 'react';
import ServiceCards from './ServiceCards';
import AllContext from '../context/AllContext';

const Services = () => {
    // const {cards} = useContext(AllContext)
    // console.log(cards)

    const [cards, setCards] = useState([])

    
    useEffect(() => {
        fetch('services.json')
            .then(result => result.json())
            .then(data => setCards(data) )
    }, []);


    return (
        <div className=' bg-[url(https://i.ibb.co/r2m5nR9/bg-color.png)] bg-cover mx-auto p-5 md:p-10 lg:p-20 -mt-2 flex flex-wrap gap-3'>
            {
                cards.map(card=>(
                    <ServiceCards key={card.id} card={card}></ServiceCards>
                ))
            }
        </div>
    );
};

export default Services;