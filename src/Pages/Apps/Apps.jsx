import React, { Suspense, useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const Apps = ({data}) => {
      const [allApps, setAllApps] = useState([]);
    
    return (
        <div className='m-15 w-full mx-auto mb-10'>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-center mb-10 text-gray-500 m-2'>Explore All Trending Apps on the Market developed by us</p>
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Suspense fallback={<div><img src="/logo.png" alt="" /><span>Loading....</span></div>}>
             {
                data.map((app) => <SingleApp key={app.id} app={app}></SingleApp>)
             }
            
            </Suspense>
            
        </div>
        </div>
    );
};

export default Apps;