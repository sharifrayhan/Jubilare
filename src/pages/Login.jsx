import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from '../context/AllContext';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const {signIn} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            () => toast("Wow so easy!");
            navigate(location?.state ?  location.state : "/")

        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
<div className=" h-screen max-h-full max-width-full w-screen bg-[url(https://i.ibb.co/r2m5nR9/bg-color.png)] bg-cover  p-1">
            <div className=""><Navbar></Navbar></div>
            <div className="mx-auto rounded-md mt-12 max-w-[570px] max-h-[480px] glass p-12">
        <center className=" my-5"><h1 className=" text-2xl text-white font-bold">Login To Your Account</h1></center>
        <hr className=" my-3" />
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold" >Email</h1>
            <input className=" glass placeholder-slate-300 rounded-sm w-full py-3 px-3" type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <h1 className=" mb-2 text-slate-200 font-semibold">Password</h1>
            <input className=" glass  placeholder-slate-300 rounded-sm w-full py-3 px-3" type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button className=" glass text-white  py-3 bg-[#403F3F]" type="submit">Login</button>
        </form>
        <center><p className=" text-white mt-4">Dont have an account? <Link className=" text-red-600" to="/Register">Register</Link> </p></center>
      </div>
        </div>
    );
};

export default Login;