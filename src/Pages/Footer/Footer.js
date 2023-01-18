import React from 'react';
import img from '../../utilities/image/logo.png'
import { motion } from 'framer-motion';
import {FaGithubSquare, FaLinkedin, FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#CAD5E2", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className="pb-20 grid justify-center justify-items-center" >

            <div className='font-semibold grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-center justify-items-center gap-5 my-6'>
                <motion.a href="#home" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        color:"#1877F2"
                        }}>Home</motion.a>
                <motion.a  href="#about" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        color:"#1877F2"
                        }}>About</motion.a>
                <motion.a  href="#skills" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        color:"#1877F2"
                        }}>Skills</motion.a>
                <motion.a  href="#projects" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        color:"#1877F2"
                        }}>Projects</motion.a>
                <motion.a  href="#services" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        color:"#1877F2"
                        }}>Services</motion.a>
                <motion.a  href="#contact" whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        color:"#1877F2"
                        }}>Contact</motion.a>
            </div>
            <img src={img} style={{ width: '100px' }} alt='Logo of Mahadi Munna' title='Mahadi Hasan Munna - Web developer' />
            <div className='grid grid-cols-5 justify-center justify-items-center gap-5 mb-8'>
                <motion.a href="https://github.com/MahadiMunna" target="blank" className='text-3xl' whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 8px rgb(0,0,0,0.4)",
                    }}><FaGithubSquare/></motion.a>
                <motion.a style={{color:"#0A66C2"}} href="https://www.linkedin.com/in/mahadi-hasan-munna/" target='blank' className='text-3xl' whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 8px rgb(0,0,0,0.4)",
                    }}><FaLinkedin/></motion.a>
                <motion.a style={{color:"#1877F2"}} href="https://www.facebook.com/mahedi.munna.77/" target='blank' className='text-3xl' whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 8px rgb(0,0,0,0.4)",
                    }}><FaFacebookSquare/></motion.a>
                <motion.a style={{color:"#1A8CD8"}} href="https://twitter.com/mahadi_munna_" target='blank' className='text-3xl' whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 8px rgb(0,0,0,0.4)",
                    }}><FaTwitterSquare/></motion.a>
                <motion.a style={{color:"#1BD741"}} href="https://wa.me/qr/YX3HUHNFWVGLB1" target='blank' className='text-3xl' whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 8px rgb(0,0,0,0.4)",
                    }}><FaWhatsappSquare/></motion.a>
                
            </div>
            <p className='font-bold'>Mahadi Hasan Munna</p>
            <p style={{ fontSize: "10px" }} className="font-semibold">Copyright © 2023 - All right reserved</p>
        </footer>
    );
};

export default Footer;