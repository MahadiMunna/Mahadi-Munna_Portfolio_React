import React from 'react';
import Typewriter from 'typewriter-effect';
import img from '../../utilities/image/banner.jpeg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaFileDownload } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import resume from '../../utilities/resume/Resume-Mahadi Hasan Munna.pdf';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center items-centermy-16 p-10 '>
            <div data-aos="zoom-in-down" data-aos-duration="1500">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img style={{ width: '20rem' }} src={img} alt="" className='mask mask-squircle' />
                    </PhotoView>
                </PhotoProvider>

            </div>
            <div className='mt-8'>
                <h3 data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500"
                    className='text-2xl md:text-4xl text-center font-bold'>Welcome! <span className='text-xl md:text-2xl font-semibold'>I'm </span></h3>
                <h2 data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500" 
                    className='text-3xl md:text-5xl my-4 text-center text-violet-900 font-extrabold'>Mahadi Hasan Munna</h2>
                <p className='text-2xl md:text-4xl text-center font-bold text-blue-800'>
                    <Typewriter
                        options={{
                            strings: ['Fullstack Web Developer', 'MERN Stack Web Developer', 'Frontend Web Developer', 'Backend Web Developer'],
                            autoStart: true,
                            loop: true,
                            cursor: '_',
                        }}
                    />
                </p>
            </div>
            <div className='my-5' data-aos="fade-up" data-aos-duration="1500">
                <motion.a href={resume} download className='btn btn-outline shadow-2xl shadow-indigo-300 text-indigo-700 mr-3'
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(0,0,0,0.1)",
                    }}
                >Resume<FaFileDownload className='ml-1' /></motion.a>
                <motion.a href='#contact' className='btn btn-outline shadow-2xl shadow-red-300 text-red-700 ml-3'
                    whileHover={{
                        scale: 1.1,
                        dur:3,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(0,0,0,0.1)",
                    }}
                >Contact<MdContactMail className='ml-1' /></motion.a>
            </div>
        </div>
    );
};

export default Banner;