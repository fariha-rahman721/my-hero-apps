import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <Hero></Hero>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;