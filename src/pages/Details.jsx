import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Details = () => {

    const cards = useLoaderData();
    const [card, setCard] = useState();

    const getId = useParams();
  const { id } = getId;

  useEffect(() => {
    const matchingCard = cards?.find((card) => card.id == id);
    setCard(matchingCard);
  }, [id, cards]);

  

    return (
        <div className=" bg-[url(https://i.ibb.co/r2m5nR9/bg-color.png)] w-full bg-cover mx-auto ">
            <Navbar></Navbar>
            <div className='mt-4 mb-5 pb-24 mx-auto'>
                <div className=' w-80 lg:w-[1000px] mx-auto  glass flex flex-col items-center rounded-lg'>
                    <div>
                        <img className=' h-52 rounded-b-full ' src={card?.image} alt="" />
                    </div>
                    <div className=' p-6 flex flex-col gap-2 items-center text-center'>
                        <h1 className='text-white font-semibold text-xl'>{card?.title}</h1>
                        <p className='text-sm text-white'>{card?.price}</p>
                        <p className='text-white '>{card?.long_description}</p>

                        <p className='mt-3 text-white'>Want To See Some Examples of {card?.title}?</p>
                        <a href={
  card?.title === "Themed Parties"
    ? 'https://www.youtube.com/watch?v=FNy4aj_1Rqc'
    : card?.title === "Sports Events"
    ? 'https://www.youtube.com/watch?v=xcmjmKd63tw'
    : card?.title === "Art Exhibitions"
    ? 'https://www.youtube.com/watch?v=WO5tLtgTuCg'
    : card?.title === "Standup Comedy"
    ? 'https://www.youtube.com/watch?v=_-PVoyucBho'
    : card?.title === "Film Screenings and Premieres"
    ? 'https://www.youtube.com/shorts/4sB-LhN0Dyk'
    : card?.title === "Concerts & Musical Festivals"
    ? 'https://www.youtube.com/watch?v=bdDnUZh1Fmc'
    : undefined
}>
  <button className='text-white rounded-lg bg-[#dd5549] px-2 py-2'>See Examples</button>
</a>

                        
                      

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;