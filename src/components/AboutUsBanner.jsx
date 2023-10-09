import { Link } from "react-router-dom";

const AboutUsBanner = () => {
  return (
    <div className=" flex flex-col gap-7 md:flex-col lg:flex-row  px-9 py-28 bg-[url(https://i.ibb.co/4SW8Jpz/bg-white.jpg)] bg-cover -mt-2">
      <div
        className="mr-24 w-[280px] md:w-[350px] lg:w-[350px]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="font-bold text-4xl mb-1">
          Trusted By Over <br /> 150+ Clients
        </h1>
        <p className="mb-1">With Jubilare Celebrations Come to Life</p>
        <Link to="/Contact-us">
          <button className=" py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md bg-gradient-to-r from-[#883aac]  to-[#da1d93] text-white">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row lg:flex-row gap-5">
          <div
            className="flex gap-2 w-[250px] md:w-[450px] lg:w-[450px]"
            data-aos="zoom-in-up"
          >
            <img
              className=" h-8"
              src="https://i.ibb.co/w6PfLg8/magic-wand.png"
              alt=""
            />
            <div>
              <h1 className="font-bold">
                Exceptional Creativity and Innovation
              </h1>
              <p>
                Unparalleled creativity shapes our events, making Jubilare the
                premier choice for unforgettable experiences.
              </p>
            </div>
          </div>

          <div
            className="flex gap-2 w-[250px] md:w-[450px] lg:w-[450px]"
            data-aos="zoom-in-up"
          >
            <img
              className=" h-8"
              src="https://i.ibb.co/NZHmq1Q/search.png"
              alt=""
            />
            <div>
              <h1 className="font-bold">Meticulous Attention to Detail</h1>
              <p>
                Every detail meticulously planned, Jubilare crafts seamless
                events where precision meets perfection.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-5">
          <div
            className="flex gap-2 w-[250px] md:w-[450px] lg:w-[450px]"
            data-aos="zoom-in-up"
          >
            <img
              className=" h-8"
              src="https://i.ibb.co/3R0wY9F/deal.png"
              alt=""
            />
            <div>
              <h1 className="font-bold">Professionalism and Reliability</h1>
              <p>
                Professionalism and reliability define us; clients trust
                Jubilare for exceptional event execution and unwavering
                commitment.
              </p>
            </div>
          </div>

          <div
            className="flex gap-2 w-[250px] md:w-[450px] lg:w-[450px]"
            data-aos="zoom-in-up"
          >
            <img
              className=" h-8"
              src="https://i.ibb.co/TbPHjdY/social-care.png"
              alt=""
            />
            <div>
              <h1 className="font-bold">
                Passionate and Customer-Centric Team
              </h1>
              <p>
                Passionate, customer-centric teamwork drives Jubilare, ensuring
                every event is a uniquely tailored masterpiece of joy and
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
