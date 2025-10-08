
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { addInstalledToDB } from '../../assets/utility/addToDb';


const AppDetails = () => {
    const data = useLoaderData();
    
    const {id} = useParams();
    const appId = parseInt(id)
    const singleApp = data.find(app => app.id === appId)
    const {image, title, companyName, downloads, ratingAvg, reviews, ratings, description, size} = singleApp;

    const [installed, setInstalled] = useState(false);

    const handleInstall = (id) =>{
        toast.success(`Installed successfully!`)
        setInstalled(true);

   addInstalledToDB(id)
        
    }

    
    return (
        <div className='w-11/12 mx-auto  mt-10'>
            <div className="flex flex-col justify-center items-center lg:flex-row gap-20 pb-10 border-b-2 border-gray-400 ">
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
                <div className="flex gap-10 border-t-2 border-gray-400 mt-6 p-6">
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
                
                <button onClick={() => handleInstall(id)} disabled={installed} className='bg-green-500 text-white p-3 rounded font-semibold cursor-pointer hover:bg-green-400'
                >{installed? `Installed` : `Install Now (${size} MB)`} 
                </button>
                <ToastContainer></ToastContainer>
            </div>
            </div>

            {/* barchart */}
            
            <div className='mt-10 border-b-2 border-gray-400'>
                <h1>Ratings</h1>
                <div>
                    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#4F46E5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
                </div>
            </div>



            {/* description */}
            <div className="mt-10">
              <h2 className='text-xl font-semibold'>Description</h2>
              <p className='text-gray-700 mt-5'>{description}</p>
            </div>
           
        </div>
    );
};

export default AppDetails;