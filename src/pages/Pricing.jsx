
import { useEffect, useState } from 'react';
import EventCards from '../components/EventCards';
import Navbar from '../components/Navbar';
import PricingCards from '../components/PricingCards';


const Pricing = () => {


    const [cards, setCards] = useState([])

    
    useEffect(() => {
        fetch('pricing-plans.json')
            .then(result => result.json())
            .then(data => setCards(data) )
    }, []);


    return (
        <div className='bg-[url(https://i.ibb.co/r2m5nR9/bg-color.png)] bg-cover'>
            <Navbar></Navbar>
            <div className='  mx-auto px-5 md:px-10 lg:px-20 flex flex-col items-center'>
            
            {
                cards.map(card=>(
                    <PricingCards  key={card.id} card={card}></PricingCards>
                ))
            }
        </div>
        </div>
    );
};

export default Pricing;