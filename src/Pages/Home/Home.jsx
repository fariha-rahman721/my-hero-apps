
import Banner from '../../Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';

import { useLoaderData } from 'react-router';
import HomeApp from '../HomeApp/HomeApp';
import Loader from '../Loader/Loader';



const Home = () => {
    const data = useLoaderData();
   
    
    return (
        <div className='bg-gray-100'>
            
            <Banner></Banner>
            <Hero></Hero>
            <HomeApp data ={data}></HomeApp>
            
        </div>
    );
};

export default Home;