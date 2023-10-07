import React from "react";

const Banner = () => {
  return (
    <div className=" mt-0 md:-mt-24 lg:-mt-24 z-0">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/rySNxb0/Banner-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle glass">
              ❮
            </a>
            <center className=" text-white text-6xl ease-in-out ">
                <button className="btn btn-secondary btn-sm">Your Ultimate Event Partner</button>
        <h1>Experience the Magic of <br /> <span>Jubilare Events</span> </h1>
        </center>
            <a href="#slide2" className="btn btn-circle glass">
              ❯
            </a>
            
            
          </div>
          
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/7bbRmNg/banner-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/bsSWXzW/banner-3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

       
           
        


    </div>
  );
};
export default Banner;
