import React from 'react';
import img1 from '../../utilities/projects/easy-phones.jpg'
import img2 from '../../utilities/projects/dream-travel.jpg'
import img3 from '../../utilities/projects/quiz-challenger.jpg'
import { motion } from 'framer-motion';
import Slider from "react-slick";

const Projects = () => {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false

    };
    return (
        <div id='projects' className='my-20'>
            <h2 data-aos="fade-up" data-aos-duration="1500" className="text-4xl text-blue-600 font-bold text-center mb-16">My recent projects</h2>
            
            <div className='grid lg:grid-cols-3 gap-4 justify-center justify-items-center' >

                <div style={{ backgroundColor: "#CAD5E2", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className="max-w-sm">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <figure><img src={img1} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img2} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img3} alt="" /></figure>
                            </div>
                        </Slider>
                    </div>

                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center">Easy Phones</h2>
                        <p className='text-center font-semibold text-sm'>Second Hand phone buy and sell service</p>
                        <p className='font-semibold text-lg'>Technologies: </p>
                        <p>
                            <button className="btn btn-success btn-xs ml-1">React</button>
                            <button className="btn btn-success btn-xs ml-1">Tailwind</button>
                            <button className="btn btn-success btn-xs ml-1">DaisyUI</button>
                            <button className="btn btn-success btn-xs ml-1">React-Form</button>
                            <button className="btn btn-success btn-xs ml-1">React-Query</button>
                            <button className="btn btn-success btn-xs ml-1">Express</button>
                            <button className="btn btn-success btn-xs ml-1">MongoDb</button>
                            <button className="btn btn-success btn-xs ml-1">Dotenv</button>
                        </p>
                        <div className="card-actions justify-end">
                            <motion.a href="https://easy-phones.web.app/" target='blank' className='btn btn-outline shadow-2xl shadow-indigo-300 text-indigo-700 mr-3'
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(0,0,0,0.1)",
                                }}>Live</motion.a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#CAD5E2", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className="max-w-sm">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <figure><img src={img1} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img2} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img3} alt="" /></figure>
                            </div>
                        </Slider>
                    </div>

                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center">Easy Phones</h2>
                        <p className='text-center font-semibold text-sm'>Second Hand phone buy and sell service</p>
                        <p className='font-semibold text-lg'>Technologies: </p>
                        <p>
                            <button className="btn btn-success btn-xs ml-1">React</button>
                            <button className="btn btn-success btn-xs ml-1">Tailwind</button>
                            <button className="btn btn-success btn-xs ml-1">DaisyUI</button>
                            <button className="btn btn-success btn-xs ml-1">React-Form</button>
                            <button className="btn btn-success btn-xs ml-1">React-Query</button>
                            <button className="btn btn-success btn-xs ml-1">Express</button>
                            <button className="btn btn-success btn-xs ml-1">MongoDb</button>
                            <button className="btn btn-success btn-xs ml-1">Dotenv</button>
                        </p>
                        <div className="card-actions justify-end">
                            <motion.a href="https://easy-phones.web.app/" target='blank' className='btn btn-outline shadow-2xl shadow-indigo-300 text-indigo-700 mr-3'
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(0,0,0,0.1)",
                                }}>Live</motion.a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#CAD5E2", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className="max-w-sm">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <figure><img src={img1} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img2} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img3} alt="" /></figure>
                            </div>
                        </Slider>
                    </div>

                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center">Easy Phones</h2>
                        <p className='text-center font-semibold text-sm'>Second Hand phone buy and sell service</p>
                        <p className='font-semibold text-lg'>Technologies: </p>
                        <p>
                            <button className="btn btn-success btn-xs ml-1">React</button>
                            <button className="btn btn-success btn-xs ml-1">Tailwind</button>
                            <button className="btn btn-success btn-xs ml-1">DaisyUI</button>
                            <button className="btn btn-success btn-xs ml-1">React-Form</button>
                            <button className="btn btn-success btn-xs ml-1">React-Query</button>
                            <button className="btn btn-success btn-xs ml-1">Express</button>
                            <button className="btn btn-success btn-xs ml-1">MongoDb</button>
                            <button className="btn btn-success btn-xs ml-1">Dotenv</button>
                        </p>
                        <div className="card-actions justify-end">
                            <motion.a href="https://easy-phones.web.app/" target='blank' className='btn btn-outline shadow-2xl shadow-indigo-300 text-indigo-700 mr-3'
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(0,0,0,0.1)",
                                }}>Live</motion.a>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Projects;