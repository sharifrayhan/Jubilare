import { useRef } from "react";
import Navbar from "../components/Navbar";

import Swal from "sweetalert2";

const ContactUs = () => {
  const getForm = useRef();

  const handleSend = () => {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message Send Successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    getForm.current.reset();
  };

  return (
    <div className=" bg-[url(https://i.ibb.co/tKq7M9F/bg-ab.jpg)] bg-cover">
      <Navbar></Navbar>
      <center>
        <h1 className="text-white  mt-3 font-bold text-2xl">Contact Us</h1>
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
            className=" p-11 flex flex-col gap-2 items-center text-center"
            data-aos="flip-right"
          >
            <p className="text-white text-md font-bold ">
              Have questions or ready to start planning your next unforgettable
              event with Jubilare Entertainment Event Management? Reach out to
              us today! We are here to make your dreams a reality.{" "}
            </p>

            <h1 className="text-white ">
              <span className=" font-bold text-orange-500">Email:</span>{" "}
              contact@jubilareevents.com
            </h1>
            <h1 className="text-white ">
              <span className="font-bold text-orange-500">phone:</span> +1 (123)
              456-7890
            </h1>
            <h1 className="text-white ">
              <span className="font-bold text-orange-500 ">Address:</span> 124
              Naser Road, Khulna, Bangladesh
            </h1>
            <p className="text-white ">
              Feel free to drop us a message using the form below, and we will
              get back to you as soon as possible. Thank you for considering
              Jubilare for your event needs. We can not wait to create magic
              with you!
            </p>
          </div>
        </div>
        <div className="mx-auto mt-2  mb-9  max-w-[1000px] max-h-[320px] glass p-12">
          <form
            className="flex flex-col gap-4"
            ref={getForm}
            onSubmit={handleSend}
          >
            <input
              className=" glass placeholder-slate-800 w-full py-3 px-3"
              required
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
            <input
              className=" glass placeholder-slate-800 rounded-sm w-full py-3 px-3"
              required
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
            <textarea
              className="placeholder-slate-800 glass h-24 py-3 px-3"
              name="message"
              required
              placeholder="Write Your Message Here...."
              id=""
              cols="5"
              rows="10"
            ></textarea>
            <button
              className=" mx-auto glass rounded-md text-white w-24 py-3 bg-[#403F3F]"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
