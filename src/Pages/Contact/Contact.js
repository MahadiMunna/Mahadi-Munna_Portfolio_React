import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../utilities/image/contact.gif'
import { toast } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { motion } from "framer-motion"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const field = e.target;
        emailjs.sendForm("portfolio_service", "template_4jkxvft", form.current, "-90br3YZbVKmx0k2J")
            .then((result) => {
                console.log(result);
                if (result.text === 'OK') {
                    toast.success('Successfully Send!');
                    field.reset();
                }

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='my-20'>
            <h1 data-aos="fade-up" data-aos-duration="1500" className="text-4xl text-blue-600 font-bold text-center mb-10">Contact Me Now!</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <img style={{ width: "40rem" }} src={contact} alt="" className='rounded-xl' />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="card w-full max-w-md">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Write your full name here" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">You Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Write your email here" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Message</span>
                                </label>
                                <textarea name='message' className="textarea textarea-info" placeholder="Write your message here" required />
                            </div>
                            <div className="form-control mt-6">
                                <motion.button type="submit" download className='btn btn-outline shadow-2xl shadow-indigo-300 text-indigo-700'
                                    whileHover={{
                                        scale: 1.1,
                                        textShadow: "0px 0px 8px rgb(255,255,255)",
                                        boxShadow: "0px 0px 8px rgb(0,0,0,0.1)",
                                    }}
                                >Send<FiSend className='ml-1' /></motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ width:"80vw", left: "50%", transform: "translate(-50%)" }} className="mt-10 grid grid-cols-1 md:grid-cols-3 justify-around justify-items-center gap-5">
                <motion.div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='grid justify-center justify-items-center p-6 border border-b-4 border-cyan-500 shadow-2xl shadow-indigo-300 rounded-xl bg-indigo-100' whileHover={{
                                        scale: 1.1
                                    }}>
                    <p><AiOutlineMail className='text-2xl text-red-600'/></p>
                    <h3 className='font-bold'>Email</h3>
                    <a className='text-red-600 hover:text-blue-900' href="mailto:mahadimunna.official@gmail.com" target="blank">Send a message<FiSend className='ml-1 inline' /></a>
                </motion.div>
                <motion.div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className='grid justify-center justify-items-center p-6 border border-b-4 border-cyan-500 shadow-2xl shadow-indigo-300 rounded-xl bg-indigo-100' whileHover={{
                                        scale: 1.1
                                    }}>
                    <p><BsMessenger style={{color:"#006AFF"}} className='text-2xl'/></p>
                    <h3 className='font-bold'>Messenger</h3>
                    <a className='text-blue-600 hover:text-blue-900' href="https://m.me/mahedi.munna.77" target="blank">Send a message<FiSend className='ml-1 inline' /></a>
                </motion.div>
                <motion.div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='grid justify-center justify-items-center p-6 border border-b-4 border-cyan-500 shadow-2xl shadow-indigo-300 rounded-xl bg-indigo-100' whileHover={{
                                        scale: 1.1
                                    }}>
                    <p><BsWhatsapp className='text-2xl text-green-600'/></p>
                    <h3 className='font-bold'>Whats App</h3>
                    <a className='text-green-600 hover:text-blue-700' href="https://api.whatsapp.com/qr/YX3HUHNFWVGLB1" target="blank">Send a message<FiSend className='ml-1 inline' /></a>
                </motion.div>
                
            </div>
        </div>
    );
};

export default Contact;