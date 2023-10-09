import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/AllContext";

const Navbar = () => {
  const { user, logOut, registerSuccess, loginSuccess } = useContext(Context);

  console.log(registerSuccess.photoURL)
  const userName = user?.displayName
  const userPhoto = user?.photoURL


  const handleLogOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li className=" text-white ">
        <Link to="/">Home</Link>
      </li>
      <li className=" text-white  ">
        <Link to="/About-us">About Us</Link>
      </li>
      <li className=" text-white  ">
        <Link to="/Upcoming-events">Upcoming Events</Link>
      </li>
      <li className=" text-white ">
        <Link to="/Pricing">Pricing</Link>
      </li>
    </>
  );

  return (

    // <div className=" sticky z-20 bg-transparent">
    //     <div className=" flex flex-col">
    //         <div className=" flex items-center bg-transparent justify-between">
    //             <div>
    //             <img className=" h-4 w-6" src="https://i.ibb.co/GvkDr8K/menu.png" alt="" /> 
    //             </div>
    //             <div>
    //                 <ul>
    //                 {navLinks}
    //                 </ul>
    //             </div>

    //             <div>

    //             </div>


    //         </div>
    //         <div>
    //             <ul>
    //             {navLinks}
    //             </ul>
    //         </div>
    //     </div>
    // </div>



    <div className=" sticky z-20">
      <div className="navbar p-0  glass  flex items-center px-2 md:px-9 lg:px-10 mx-auto bg-gray-500 md:bg-transparent  lg:bg-transparent ">
        <div className="navbar-start">
          
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              {/* <img className=" h-4 w-6" src="https://i.ibb.co/GvkDr8K/menu.png" alt="" /> */}
            </label>

            <ul
              tabIndex={0}
              className="menu menu-xs dropdown-content  mt-3 z-[1] p-2 shadow glass rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <img
              className=" h-3 md:h-5 lg:h-7"
              src="https://i.ibb.co/47f18NR/jubilare-white.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          {/* <label tabIndex={0} className="btn btn-ghost btn-circle"> */}
            
              {user && userName && userPhoto && (
               <div className=" flex items-center gap-2 glass px-3 p-1 rounded-md">
               <img
                className=" w-9 h-9 avatar rounded-full "
                src={userPhoto}
                alt=""
              />
              <h1 className=" text-white text-xs">{userName}</h1>
              </div>)}
              {/* // )}
              // {user && userName && ( */}
              {/* // <h1 className=" text-white text-xs">{userName}</h1>)} */}
              
           
          {/* </label> */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#883aac]  to-[#da1d93] text-white"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/Login">
              <button className=" py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#883aac]  to-[#da1d93] text-white">
                Log In
              </button>
            </Link>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
