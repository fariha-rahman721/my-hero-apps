import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp } from '../../assets/utility/addToDb';
import { FaArrowDown, FaStar } from 'react-icons/fa';

const Installation = () => {
    const [myinstalledApp, setMyInstalledApp] = useState([])
    const [sortApp, setSortApp] = useState('none')
    const data = useLoaderData();
    
    useEffect(()=> {
        const installedAppData = getInstalledApp();
        const convertedInstaaledApp = installedAppData.map(id => parseInt(id));
         const installedList = data.filter(app => convertedInstaaledApp.includes(app.id));
         setMyInstalledApp(installedList);

    },[])


    const sortedApp = () =>{
        if(sortApp === 'size-asc'){
            return [...myinstalledApp].sort((a, b) => a.size - b.size)
    } else if(sortApp === 'size-desc'){
        return [...myinstalledApp].sort((a, b) => b.size - a.size)
    } else{
       return myinstalledApp;
    }

        }

        const handleUninstall = (id) =>{
            const updatedApps = myinstalledApp.filter(app => app.id !== id)
            setMyInstalledApp(updatedApps)
        }
    


    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h1 className='text-3xl font-semibold text-center'>Your Installed Apps</h1>
            <p className='text-gray-600 text-center mt-3'>Explore All Trending Apps on the Market developed by us</p>
            <div className="flex justify-between mt-8">
                <h3 className='font-bold text-xl'>({myinstalledApp.length}) Apps Found</h3>
            

            <label className='form-control w-full max-w-xs'>
                <select value={sortedApp} onChange={e => setSortApp(e.target.value)} className='select select-bordered'>
                    <option value="none">Sort by size</option>
                    <option  value='size-asc'>Low &gt; High</option>
                    <option value='size-desc'>High &gt; Low</option>
                </select>
            </label>
                        </div>
                        {
                           sortedApp().map(app =>(
                                <div className="card card-side bg-base-100 shadow-md mt-8">
  <figure className='ml-5'>
    <img className='w-[90px] h-[90px]'
      src={app.image}
      alt="Movie" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title ">{app.title}</h2>
    <div className="flex space-x-4 p-1 flex-1">
        <span className="font-semibold text-[#00D390] border-none rounded-xl "><FaArrowDown className="text-[#00D390]"/>{app.downloads}</span>
                <span className=" text-orange-500 border-none rounded-xl"><FaStar />{app.ratingAvg}</span>
                <span className=' text-gray-500 mt-2.5'>{app.size} MB</span>
    </div>
    <div className="card-actions justify-end">
      <button onClick={() => handleUninstall(app.id)} className="btn bg-[#00D390] text-white hover:bg-pink-600 hover:shadow-amber-400">Uninstall</button>
    </div>
  </div>
</div>
                            ))
                        }
                    </div>
    );
}

export default Installation;