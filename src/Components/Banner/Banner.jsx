import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
const Banner = () => {

    const handleGPS = () =>{
        window.open('https://play.google.com/', '_blank')
    }

    const handleAS = () =>{
        window.open('https://www.apple.com/app-store/', '_blank')
    }
    return (
        <div className='w-11/12 lg:w-6/12 mx-auto flex flex-col justify-center items-center p-10'>
            <h1 className='text-5xl font-bold text-center'>We Build <br />
            <span className='text-purple-600 font-extrabold m-1'>Productive</span> Apps</h1>
            <p className='m-5 text-center'><small>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</small></p>
            <div className='flex gap-3'>
                <button onClick={()=> handleGPS()} className='btn '><img className='w-7 h-7 bg-none' src="/g-playstore.png" alt="" />
               Google Play</button>
            <button onClick={()=> handleAS()} className='btn '><img className='w-5 h-5 bg-none' src="/appstore.jpeg" alt="" />App Store</button>
            </div>
            
        </div>
    );
};

export default Banner;