import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div id='services' className='p-10'>
            <h1 data-aos="fade-up" data-aos-duration="1500" className="text-4xl text-blue-600 font-bold text-center mb-10">Services</h1>
            <h3 data-aos="fade-up" data-aos-duration="1500" className="text-2xl font-bold text-orange-800 text-center mb-10">What I Do</h3>
            <div style={{ width: "80vw", left: "50%", transform: "translate(-50%)" }} className="mt-10 grid grid-cols-1 lg:grid-cols-3 justify-around justify-items-center gap-14">

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <motion.div className='grid justify-center justify-items-center p-6 rounded-xl shadow-xl border border-b-4 shadow-indigo-200 border-indigo-600  bg-indigo-50' style={{ width: "20rem",height:"20rem"}}
                        whileHover={{
                            scale: 1.1
                        }}>
                        <h3 className='text-indigo-800 text-2xl text-center font-bold'>Frontend Web development</h3>
                        <p className='text-sm font-semibold text-center mt-4'>Being a front-end web developer,I have experience in building complex, innovative, responsive, and user-centric webpage. I designed interface with detail and look great on both desktop screens and mobile devices.</p>
                    </motion.div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <motion.div className='grid justify-center justify-items-center p-6 rounded-xl shadow-xl border border-b-4 shadow-indigo-200 border-indigo-600  bg-indigo-50' style={{ width: "20rem",height:"20rem"}}
                        whileHover={{
                            scale: 1.1
                        }}>
                        <h3 className='text-indigo-800 text-2xl text-center font-bold'>Fullstack Web development</h3>
                        <p className='text-sm font-semibold text-center mt-4'>As a fullstack web developer, I will design, develop, and maintaining the entire web application, including the front-end (client-side) and back-end (server-side) components.</p>
                    </motion.div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <motion.div className='grid justify-center justify-items-center p-6 rounded-xl shadow-xl border border-b-4 shadow-indigo-200 border-indigo-600  bg-indigo-50' style={{ width: "20rem", height:"20rem"}}
                        whileHover={{
                            scale: 1.1
                        }}>
                        <h3 className='text-indigo-800 text-2xl text-center font-bold'>MERN stack Web development</h3>
                        <p className='text-sm font-semibold text-center mt-4'>MERN stack web developer specializes in using the MERN stack, which is a combination of technologies for building web applications. The acronym stands for MongoDB, Express.js, React.js, and Node.js.</p>
                    </motion.div>
                </div>
                

            </div>
            
        </div>
    );
};

export default Services;