import React from 'react';

const Hero = () => {
    return (
        <div className='w-full mx-auto '>
                <div className="w-6/12 mx-auto">
                    <img className='mt-8' src="/hero.png" alt="" />
                </div>
                <div className='w-full mx-auto bg-gradient-to-r from-purple-600 to-purple-500'>
                   <h1 className='text-3xl text-white font-bold p-5 text-center pt-15'>Trusted by Millions, Built for You</h1>
                

                {/* 3 flex sec */}

                <div className="w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-3 ">
                   {/* 1 */}
                    <div className="text-white text-center p-5 mb-10">
                     <p>Total Downloads</p>
                     <span className='text-5xl font-bold'>29.6M</span>
                     <p>21% more than last month</p>
                    </div>
                    <div className="text-white text-center p-5">
                     <p>Total Reviews</p>
                     <span className='text-5xl font-bold'>906K</span>
                     <p>46% more than last month</p>
                    </div>
                    <div className="text-white text-center p-5">
                     <p>Active Apps</p>
                     <span className='text-5xl font-bold'>132+</span>
                     <p>31 more will Launch</p>
                    </div>
                    </div>
                </div>
            </div> 
    );
};

export default Hero;