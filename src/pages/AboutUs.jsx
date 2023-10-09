import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className=" bg-[url(https://i.ibb.co/tKq7M9F/bg-ab.jpg)] bg-cover">
      <Navbar></Navbar>
      <center>
        <h1 className="text-white  mt-3 font-bold text-2xl">About Us</h1>
      </center>
      <div className="mt-4 mb-5 pb-24 mx-auto">
        <div className=" max-w-80 lg:w-[1000px] mx-auto  glass flex flex-col items-center rounded-lg">
          <div
            className="border-l-2 border-r-2 border-b-2 rounded-b-full border-white pb-2 pl-2 pr-2"
            data-aos="fade-down"
          >
            <img
              className="  max-h-[300px] rounded-b-full "
              src="https://i.ibb.co/JpLxSGf/us.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="flip-left"
            className=" p-6 flex flex-col gap-2 items-center text-center"
          >
            <p className="text-white ">
              {" "}
              <span className=" text-2xl">J</span>ubilare, founded in 2019 in
              the vibrant city of Khulna, Bangladesh, is more than just an event
              management company; we are a passionate team of five individuals
              dedicated to transforming ordinary moments into extraordinary
              memories. Meet our dynamic crew: Sarah, Emily, and Mia, our
              talented and creative visionaries, bring a touch of elegance to
              every event. Then there is Ethan, the master of logistics and
              operations, and Liam, our tech wizard who ensures seamless
              experiences. With unwavering enthusiasm, weve been curating
              unforgettable experiences in the world of entertainment. From
              Concerts & Musical Festivals that resonate with your soul to
              Themed Parties that transport you to fantastical worlds, we craft
              events that are as unique as you are. Our Art Exhibitions showcase
              diverse talents, fostering a deep connection between artists and
              enthusiasts, while our Sports Events and Comedy Shows create
              electric atmospheres of excitement and laughter. Film Screenings
              and Premieres are transformed into cinematic masterpieces,
              capturing the essence of storytelling. Our journey so far has been
              exhilarating, and we can not wait to share more incredible moments
              with you. At Jubilare, we are not just event managers; we are
              memory makers, and we are thrilled to create magic together.
              Welcome to a world where every event is an experience and every
              experience is unforgettable.
            </p>

            <Link to="/Contact-us">
              <button className="text-white rounded-lg bg-[#dd5549] px-2 py-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
