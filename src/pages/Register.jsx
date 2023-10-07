import React from 'react';
import Navbar from '../components/Navbar';
import {  Link } from "react-router-dom";

const Register = () => {
    return (
<div className="  max-h-auto   bg-[url(https://i.ibb.co/r2m5nR9/bg-color.png)] bg-cover p-1">
            <div className=""><Navbar></Navbar></div>
            <div className="mx-auto  mb-9  w-[570px] h-[690px] glass p-12">
        <center className=" my-3"><h1 className=" text-white text-2xl font-bold">Register your account</h1></center>
        <hr className=" my-3" />
        <form onSubmit={""}  className="flex flex-col gap-4">
        <div>
            <h1 className=" mb-2 text-slate-200 font-semibold" >Your Name</h1>
            <input className=" glass w-full py-3 px-3" type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
        <div>
            <h1 className=" mb-2 text-slate-200 font-semibold" >Photo URL</h1>
            <input className=" glass w-full py-3 px-3" type="text" id="url" name="url" placeholder="Enter your photo url" />
          </div>
          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold" >Email</h1>
            <input className=" glass w-full py-3 px-3" type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold">Password</h1>
            <input className=" glass w-full py-3 px-3" type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" /> <p className=' text-white'>Accept Term & Conditions</p>
          </div>
          <button className=" glass text-white py-3 bg-[#403F3F]" type="submit">Login</button>
        </form>
        <center><p className=" text-white mt-4">Already have an account? <Link className=" text-red-600" to="/Login">Login</Link> </p></center>
      </div>
        </div>
    );
};

export default Register;