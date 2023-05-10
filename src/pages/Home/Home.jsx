import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import About from './About/About';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <About></About>
            <Service></Service>      
            
        </div>
    );
};

export default Home;