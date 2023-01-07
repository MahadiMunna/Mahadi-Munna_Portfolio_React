import React from 'react';
import Typewriter from 'typewriter-effect';
import img from '../../utilities/image/banner.jpeg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {FaFileDownload} from 'react-icons/fa';
import {MdContactMail} from 'react-icons/md';
import resume from '../../utilities/resume/Resume-Mahadi Hasan Munna.pdf'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center items-center my-16'>
            <div>
                <PhotoProvider>
                    <PhotoView src={img}>
                    <img style={{ width: '20rem' }} src={img} alt="" className='mask mask-squircle' />
                    </PhotoView>
                </PhotoProvider>
                
            </div>
            <div className='mt-8'>
                <h3 className='text-4xl text-center font-bold'>Welcome! <span className='text-2xl font-semibold'>I'm </span></h3>
                <h2 className='text-5xl my-4 text-center text-violet-900 font-extrabold'>Mahadi Hasan Munna</h2>
                <p className='text-4xl text-center font-bold text-blue-800'>
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
            <div className='my-5'>
                <a href={resume} download className='btn btn-outline shadow-2xl shadow-indigo-300 text-indigo-700 mr-3'>Resume<FaFileDownload className='ml-1'/></a>
                <a href='#contact' className='btn btn-outline shadow-2xl shadow-red-300 text-red-700 ml-3'>Contact<MdContactMail className='ml-1'/></a>
            </div>
        </div>
    );
};

export default Banner;