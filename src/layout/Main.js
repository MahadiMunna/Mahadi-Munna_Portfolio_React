import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../Pages/About/About';
import Footer from '../Pages/Footer/Footer';
import Banner from '../Pages/Home/Banner';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;