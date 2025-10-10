import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AllApps from '../AllApps/AllApps';
import Loader from '../Loader/Loader';

const Apps = () => {
    const allData = useLoaderData();
     const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term? allData.filter(data => data.title.toLocaleLowerCase().includes(term)) : allData;

    
    
     
    useEffect(() =>{
      setTimeout(() => {
        if(allData && allData.length > 0) {
          setLoading(false)
        }
        
      }, 2000)
    }, [allData]);


     if(loading){
      return <Loader></Loader>
     } 
    

    if(searchedApps.length === 0){
        return(
            <div className='w-11/12 mx-auto flex flex-col justify-center items-center mt-10'>
                <img className='col-span-3' src="/App-Error.png" alt="" />
                 <h1 className='text-4xl font-semibold p-3'>OPPS!! APP NOT FOUND</h1>
                 <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                 <Link to= '/'>
                 <button className='btn bg-gradient-to-r from-purple-600 to-purple-500 text-white mt-3 cursor-pointer mb-10'>Go Back!</button>
                 </Link>
            </div>
        )
    }

    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h1 className='text-center text-3xl font-semibold'>Our All Applications</h1>
            <p className='text-center p-2 text-gray-700'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="flex justify-between mt-10">
                <h3 className='font-bold'>({searchedApps.length}) Apps Found</h3>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search" />
</label>
            </div>
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-5 '>
                    
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                  {
                    searchedApps.map(data => <AllApps key={data.id} data={data}></AllApps>)
                  }
               </Suspense>
            </div>
            
        </div>
    );
};

export default Apps;