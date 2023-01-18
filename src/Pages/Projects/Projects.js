import React from 'react';
import img1 from '../../utilities/projects/easy-phones.jpg'
import img11 from '../../utilities/projects/easy2.jpg'
import img12 from '../../utilities/projects/easy3.jpg'
import img2 from '../../utilities/projects/dream-travel.jpg'
import img21 from '../../utilities/projects/dream2.jpg'
import img22 from '../../utilities/projects/dream3.jpg'
import img3 from '../../utilities/projects/quiz-challenger.jpg'
import img31 from '../../utilities/projects/quiz2.jpg'
import img32 from '../../utilities/projects/quiz3.jpg'
import { motion } from 'framer-motion';
import Slider from "react-slick";
import {TbListDetails} from 'react-icons/tb'
import {FaGithub} from 'react-icons/fa'
import {SiKdenlive} from 'react-icons/si'

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
            
            <div style={{ width: "92vw", left: "50%", transform: "translate(-50%)" }} className='grid lg:grid-cols-3 gap-14 justify-center justify-items-center' >

                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" style={{width:"22rem", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className="hover:bg-indigo-50">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <figure><img src={img1} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img11} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img12} alt="" /></figure>
                            </div>
                        </Slider>
                    </div>

                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center text-sky-500">Easy Phones</h2>
                        <p className='text-center font-semibold text-sm'>Second Hand phone buy and sell project</p>
                        <p className='font-semibold text-lg text-center text-red-800'>Technologies</p>
                        <p className='justify-items-center text-center'>
                            <button className="btn btn-success btn-xs ml-1">React</button>
                            <button className="btn btn-success btn-xs ml-1">Tailwind</button>
                            <button className="btn btn-success btn-xs ml-1">DaisyUI</button>
                            <button className="btn btn-success btn-xs ml-1">React-Form</button>
                            <button className="btn btn-success btn-xs ml-1">React-Query</button>
                            <button className="btn btn-success btn-xs ml-1">Express</button>
                            <button className="btn btn-success btn-xs ml-1">MongoDb</button>
                            <button className="btn btn-success btn-xs ml-1">Firebase</button>
                            <button className="btn btn-success btn-xs ml-1">Dotenv</button>
                        </p>
                        <div className="card-actions justify-center mt-5">
                            <motion.a href="https://easy-phones.web.app/" target='blank' className=' btn btn-sm btn-primary shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Live<SiKdenlive className='ml-1'/></motion.a>
                            <motion.a href="https://github.com/MahadiMunna/Easy-phones-client" target='blank' className=' btn btn-sm btn-outline shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Github<FaGithub className='ml-1'/></motion.a>
                            <motion.a href="#" target='blank' className=' btn btn-sm btn-info shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Details<TbListDetails className='ml-1'/> </motion.a>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" style={{width:"22rem", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className="hover:bg-indigo-50">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <figure><img src={img2} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img21} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img22} alt="" /></figure>
                            </div>
                        </Slider>
                    </div>

                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center text-sky-500">Dream Travel</h2>
                        <p className='text-center font-semibold text-sm'>Online tour package sells project</p>
                        <p className='font-semibold text-lg text-center text-red-800'>Technologies</p>
                        <p className='justify-items-center text-center'>
                            <button className="btn btn-success btn-xs ml-1">React</button>
                            <button className="btn btn-success btn-xs ml-1">React-Dom</button>
                            <button className="btn btn-success btn-xs ml-1">Tailwind</button>
                            <button className="btn btn-success btn-xs ml-1">DaisyUI</button>
                            <button className="btn btn-success btn-xs ml-1">Express</button>
                            <button className="btn btn-success btn-xs ml-1">MongoDb</button>
                            <button className="btn btn-success btn-xs ml-1">Firebase</button>
                            <button className="btn btn-success btn-xs ml-1">Dotenv</button>
                        </p>
                        <div className="card-actions justify-center mt-5">
                            <motion.a href="https://dream-travel-c5cbb.web.app/" target='blank' className=' btn btn-sm btn-primary shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Live<SiKdenlive className='ml-1'/></motion.a>
                            <motion.a href="https://github.com/MahadiMunna/dream-travel" target='blank' className=' btn btn-sm btn-outline shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Github<FaGithub className='ml-1'/></motion.a>
                            <motion.a href="#" target='blank' className=' btn btn-sm btn-info shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Details<TbListDetails className='ml-1'/> </motion.a>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" style={{width:"22rem", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className="hover:bg-indigo-50">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <figure><img src={img3} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img31} alt="" /></figure>
                            </div>
                            <div>
                                <figure><img src={img32} alt="" /></figure>
                            </div>
                        </Slider>
                    </div>

                    <div className="card-body">
                        <h2 className="font-bold text-2xl text-center text-sky-500">Quiz Challenger</h2>
                        <p className='text-center font-semibold text-sm'>Online quiz challenger, educational project</p>
                        <p className='font-semibold text-lg text-center text-red-800'>Technologies</p>
                        <p className='justify-items-center text-center'>
                            <button className="btn btn-success btn-xs ml-1">React</button>
                            <button className="btn btn-success btn-xs ml-1">Tailwind</button>
                            <button className="btn btn-success btn-xs ml-1">React-Dom</button>
                            <button className="btn btn-success btn-xs ml-1">React-Router-Dom</button>
                            <button className="btn btn-success btn-xs ml-1">React-toastify</button>
                            <button className="btn btn-success btn-xs ml-1">Rechart</button>
                        </p>
                        <div className="card-actions justify-center mt-5">
                            <motion.a href="https://calm-sable-2614f4.netlify.app/" target='blank' className=' btn btn-sm btn-primary shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Live<SiKdenlive className='ml-1'/></motion.a>
                            <motion.a href="https://github.com/MahadiMunna/quiz-challenger" target='blank' className=' btn btn-sm btn-outline shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Github<FaGithub className='ml-1'/></motion.a>
                            <motion.a href="#" target='blank' className=' btn btn-sm btn-info shadow-2xl shadow-indigo-300'
                                whileHover={{
                                    scale: 1.1
                                }}>Details<TbListDetails className='ml-1'/> </motion.a>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Projects;