import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiGooglechrome } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiDocker } from 'react-icons/si';

import html from '../../utilities/tech-logo/html.png'
import css from '../../utilities/tech-logo/css3.png'
import bootstrap from '../../utilities/tech-logo/Bootstrap.png'
import tailwind from '../../utilities/tech-logo/Tailwind.png'
import js from '../../utilities/tech-logo/JavaScript-logo.png'
import react from '../../utilities/tech-logo/React-icon.svg.png'
import node from '../../utilities/tech-logo/Node.js.png'
import express from '../../utilities/tech-logo/expressjs.png'
import mongodb from '../../utilities/tech-logo/mongodb.png'
import firebase from '../../utilities/tech-logo/firebase.png'
import vscode from '../../utilities/tech-logo/Visual_Studio_Code.png'
import git from '../../utilities/tech-logo/github.png'
import chromedev from '../../utilities/tech-logo/chrome.png'
import netlify from '../../utilities/tech-logo/netlify.png'
import figma from '../../utilities/tech-logo/figma.png'
import vercel from '../../utilities/tech-logo/vercel.png'
import python from '../../utilities/tech-logo/Python.png'
import django from '../../utilities/tech-logo/django.png'
import drf from '../../utilities/tech-logo/drf.png'
import docker from '../../utilities/tech-logo/docker.png'

const Skills = () => {
    return (
        <div id='skills' className='my-10 p-10'>
            <h1 data-aos="fade-up" data-aos-duration="1500"  className="text-4xl text-blue-600 font-bold text-center">Skills</h1>

            <div style={{ width: "70vw", left: "50%", transform: "translate(-50%)" }} className="mt-10">
                <h2 data-aos="fade-up" data-aos-duration="1500" className="text-2xl text-blue-800 font-bold text-center mb-5">Frontend Development</h2>
                <div className='grid lg:grid-cols-6 grid-cols-3 justify-center justify-items-center gap-5'>

                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={html} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>HTML <AiOutlineHtml5 style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={css} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>CSS <IoLogoCss3 style={{display:"inline"}} /></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={bootstrap} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Bootstrap <FaBootstrap style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={tailwind} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Tailwind <SiTailwindcss style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={js} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Java Script <SiJavascript style={{display:"inline"}} className=""/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={react} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>React <SiReact style={{display:"inline"}}/></span>
                    </div>


                </div>
            </div>
            <div style={{ width: "70vw", left: "50%", transform: "translate(-50%)" }} className="mt-10">
                <h2 data-aos="fade-up" data-aos-duration="1500" className="text-2xl text-blue-800 font-bold text-center mb-5">Backend Development</h2>
                <div className='grid grid-cols-3 lg:grid-cols-4 justify-around justify-items-center gap-5' >
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={node} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Node JS <DiNodejsSmall style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='grid justify-center justify-items-center'>
                        <img style={{ width: "2rem" }} src={express} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Express JS <SiExpress style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className='grid justify-center justify-items-center'>
                        <img style={{ width: "2rem" }} src={mongodb} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>MongoDB <SiMongodb style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" className='grid justify-center justify-items-center'>
                        <img style={{ width: "1.5rem" }} src={firebase} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Firebase <SiFirebase style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" className='grid justify-center justify-items-center'>
                        <img style={{ width: "1.5rem" }} src={python} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Python <SiPython style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" className='grid justify-center justify-items-center'>
                        <img style={{ width: "1.5rem" }} src={django} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Django <SiDjango style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" className='grid justify-center justify-items-center'>
                        <img style={{ width: "1.5rem" }} src={drf} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Django Rest Framework <SiDjango style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" className='grid justify-center justify-items-center'>
                        <img style={{ width: "1.5rem" }} src={docker} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Docker <SiDocker style={{display:"inline"}}/></span>
                    </div>
                </div>
            </div>
            <div style={{ width: "70vw", left: "50%", transform: "translate(-50%)" }} className="mt-10">
                <h2 data-aos="fade-up" data-aos-duration="1500" className="text-2xl text-blue-800 font-bold text-center mb-5">Tools</h2>
                <div className='grid lg:grid-cols-6 grid-cols-3 justify-center justify-items-center gap-5'>

                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={vscode} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>VS Code <SiVisualstudiocode style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={git} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Github <SiGithub style={{display:"inline"}} /></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2.5rem' }} src={chromedev} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Chrome dev <SiGooglechrome style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={netlify} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Netlify <SiNetlify style={{display:"inline"}}/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={figma} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Figma <SiFigma style={{display:"inline"}} className=""/></span>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600" className='grid justify-center justify-items-center'>
                        <img style={{ width: '2rem' }} src={vercel} alt="" />
                        <span className='text-xs text-indigo-800 font-semibold'>Vercel <SiVercel style={{display:"inline"}}/></span>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Skills;