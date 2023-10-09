import { useEffect, useState } from "react";
import EventCards from "../components/EventCards";
import Navbar from "../components/Navbar";

const UpcomingEvents = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("upcoming_events.json")
      .then((result) => result.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="bg-[url(https://i.ibb.co/r2m5nR9/bg-color.png)] bg-cover">
      <Navbar></Navbar>
      <div className="  mx-auto p-5 md:p-10 lg:p-20 -mt-2 flex flex-wrap gap-3">
        {cards.map((card) => (
          <EventCards key={card.id} card={card}></EventCards>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
