import React from 'react';
import img1 from '../../utilities/image/profile.jpg';
import Skills from './Skills';

import { PhotoProvider, PhotoView } from 'react-photo-view';

const About = () => {
    return (
        <div id='about'  className='my-10'>
            <div className="hero">
                <div data-aos="fade-up" data-aos-duration="1500" className="hero-content flex-col lg:flex-row">
                    <div className='w-xs h-xs'>
                        <PhotoProvider>
                                            <PhotoView src={img1}>
                                                <img src={img1} alt='avatar' className='w-[25rem] rounded-3xl'></img>
                                            </PhotoView>
                                        </PhotoProvider>
                        
                    </div>
                    <div className='lg:ml-10 lg:w-96'>
                        <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-4xl text-indigo-600 font-bold text-center lg:text-justify ">About Me!</h1>
                        <p  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="py-6 md:w-96  text-center lg:text-left  font-semibold mt-4">I'am graduated from Daffodil International University in 2024. Currently I'm working as a <b>Software Engineer</b> at Newroz Technologies Ltd. Here I'm a full time employee in python team. Here my tasks are to build APIs using Django Rest Framework, testing and deploy it. I'm interested in Devops, ML, AI and Blockchain</p>  
                    </div>
                </div>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default About;