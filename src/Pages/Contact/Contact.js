import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../utilities/image/contact.gif'
import { toast } from 'react-hot-toast';
import {FiSend} from 'react-icons/fi';
import {motion} from "framer-motion"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      const field = e.target;
      emailjs.sendForm("portfolio_service", "template_4jkxvft", form.current, "-90br3YZbVKmx0k2J")
        .then((result) => {
            console.log(result);
            if(result.text==='OK'){
                toast.success('Successfully Send!');
                field.reset();
            }

        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id='contact' className='my-20'>
            <h1 data-aos="fade-up" data-aos-duration="1500"  className="text-4xl text-blue-600 font-bold text-center mb-10">Contact Me Now!</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <img style={{width:"40rem"}} src={contact} alt="" className='rounded-xl' />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="card w-full max-w-md">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Write your full name here" className="input input-bordered" required/>
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
                                <textarea name='message' className="textarea textarea-info" placeholder="Write your message here" required/>
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
        </div>
    );
};

export default Contact;