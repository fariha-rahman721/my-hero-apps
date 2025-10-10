
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle
} from "recharts";
import { addInstalledToDB } from '../../assets/utility/addToDb';


const AppDetails = () => {
    const data = useLoaderData();

    
    
    const {id} = useParams();
    const appId = parseInt(id)
    const singleApp = data.find(app => app.id === appId)
    const {image, title, companyName, downloads, ratingAvg, ratings, reviews, description, size} = singleApp;

    const [installed, setInstalled] = useState(false);

    const handleInstall = (id) =>{
        toast.success(`Installed successfully!`)
        setInstalled(true);

   addInstalledToDB(id)
        
    }

   

    
    return (
        <div className='w-11/12 mx-auto  mt-10'>
            <div className="w-11/12 mx-auto grid justify-between items-center lg:grid-cols-11 gap-10 pb-10 border-b-2 border-gray-400">
            {/* img */}
            <div className="col-span-2">
                <img className=' bg-none' src={image} alt="" />
            </div>
            {/* details parent div */}
            <div className="col-span-9">
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
                
                <button onClick={() => handleInstall(id)} disabled={installed} className={` text-white p-3 rounded font-semibold cursor-pointer ${installed? 'bg-pink-900 cursor-not-allowed': 'bg-green-500 hover:bg-purple-700'} `}
                >{installed? `Installed` : `Install Now (${size} MB)`} 
                </button>
                <ToastContainer></ToastContainer>
            </div>
            </div>

            {/* barchart */}
            
            <div className='mt-10 border-b-2 border-gray-300'>
                <h1 className='mt-8 text-xl font-semibold mb-5'>Ratings</h1>
                <div className='bg-base-100 h-150 rounded mb-5'>
                   <ResponsiveContainer width="100%" height="100%">
      <BarChart
      layout='vertical'
        width={500}
        height={300}
        data={ratings}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        
        <XAxis dataKey="count" type='number' domain={[0, 100]}/>
        <YAxis dataKey="name" type='category' reversed />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill='orange' activeBar={<Rectangle fill="red" stroke="#FF8C00" />} />
        <Bar dataKey="name" fill="blue" activeBar={<Rectangle fill="gold" stroke="purple" />} />
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