import React from 'react';
import { useLoaderData, useParams } from 'react-router';



const AppDetails = () => {
    const data = useLoaderData();
    
    const {id} = useParams();
    const appId = parseInt(id)
    const singleApp = data.find(app => app.id === appId)
    const {image, title, companyName, downloads, ratingAvg, reviews, ratings, description, size} = singleApp;
    return (
        <div className='w-11/12 mx-auto flex flex-col justify-center items-center lg:flex-row gap-20 mt-10'>
            {/* img */}
            <div className="">
                <img className='' src={image} alt="" />
            </div>
            {/* details parent div */}
            <div className="">
                <div>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p className='text-purple-600 mt-2'><span className='text-gray-600'>Developed by</span> {companyName}</p>
                </div>
                <div className="flex gap-10 border-t-2 mt-6 p-6">
                    <div className="">
                        <img className='ml-2' src="/icon-downloads.png" alt="" />
                        <p className='text-gray-600 p-2'>Downloads</p>
                        <h1 className='text-2xl font-bold ml-2'>{downloads}</h1>
                    </div>
                    <div className="">
                        <img className='ml-2' src="/icon-ratings.png" alt="" />
                        <p className='text-gray-600 p-2'>Average Ratings</p>
                        <h1 className='text-2xl font-bold ml-2'>{ratingAvg}</h1>
                    </div>
                    <div className="">
                        <img className='ml-2' src="/icon-review.png" alt="" />
                        <p className='text-gray-600 p-2'>Total Reviews</p>
                        <h1 className='text-2xl font-bold ml-2'>{reviews}</h1>
                    </div>
                </div>
                <button className='bg-green-400 text-white p-3 rounded font-semibold'>Install Now ({size} MB)</button>
            </div>
        </div>
    );
};

export default AppDetails;