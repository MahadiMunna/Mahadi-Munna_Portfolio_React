import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Pages/Footer/Footer';
import Banner from '../Pages/Home/Banner';
import Projects from '../Pages/Projects/Projects';
import Navbar from '../Pages/Navbar/Navbar';
import Services from '../Pages/Services/Services';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;