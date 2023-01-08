import React from 'react';
import './About.css';
import img from '../../utilities/image/profile.jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const About = () => {
    return (
        <div id='about'  className='my-10'>
            <div className="hero lg:mx-10">
                <div data-aos="fade-up" data-aos-duration="1500" className="hero-content flex-col lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img style={{ width: '25rem' }} src={img} alt="" className='mask mask-squircle' />
                        </PhotoView>
                    </PhotoProvider>
                    <div className='lg:ml-10 lg:w-96'>
                        <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-4xl text-indigo-600 font-bold text-center lg:text-justify">About Me!</h1>
                        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="py-6 text-center lg:text-left">Currently I'am a student of Daffodil International University. I'm doing my BSc in Computer Science and Engineering. My graduation will be complete in 2024. I have learned full stack web development and now I want to engage my self with industries. Looking for internship/full time job.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;