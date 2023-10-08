import React from 'react';
import Swal from 'sweetalert2'

const Newsletter = () => {

    const handleSubscribe = () =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank You For Subscribing',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
       <center className=' px-9 py-28 bg-[url(https://i.ibb.co/4SW8Jpz/bg-white.jpg)] bg-cover '>
<h1 className='font-bold text-2xl'>Subscribe To Get Event Updates, News & Offers</h1>
            <div className='mt-3'>
                <input type="email" className='py-3 px-3 mb-3 rounded-md' placeholder='Your Email Here' />
                <button onClick={handleSubscribe} className="  py-1 md:py-3 lg:py-3 ml-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md bg-gradient-to-r from-[#883aac]  to-[#da1d93] text-white">Subscribe</button>
            </div>

       </center>
            
       
    );
};

export default Newsletter;