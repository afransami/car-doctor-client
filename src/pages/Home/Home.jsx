import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>            
            <Outlet></Outlet>

        </div>
    );
};

export default Home;