import React from 'react';
import img1 from '../../utilities/projects/easy-phones.jpg'
import img2 from '../../utilities/projects/dream-travel.jpg'
import img3 from '../../utilities/projects/quiz-challenger.jpg'
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div id='projects' className='my-20'>
            <h2 data-aos="fade-up" data-aos-duration="1500"  className="text-4xl text-blue-600 font-bold text-center mb-20">My recent projects</h2>
            <div className='grid md:grid-cols-2 gap-5 justify-center justify-items-center' >
            <div className="card w-96 glass">
                <figure><img src={img1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Easy Phones</h2>
                    <p>Second Hand phone buy and sell service<br />
                        <b>Features:</b> Login with user role | Admin can delete buyer and seller | User different route according to role | Seller can
                        add product and buyer can buy product | Private Route | Firebase Authentication <br />
                        <b>Technologies:</b> React | Tailwind | DaisyUI | React-Form | React-Query | Express | Cors | MongoDb | Dotenv</p>
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
            <div className="card w-96 glass">
                <figure><img src={img2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Dream Travel</h2>
                    <p>E-commerce based travel company <br />
                    <b>Features:</b> User can comment on service | Can add service on his profile | Firebase authentication | Dynamic <br />
                    <b>Technologies:</b> React | Tailwind |DaisyUI | MongoDb |Express | Dotenv |Cors</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline"><a href="https://dream-travel-c5cbb.web.app/" target='blank'>Live</a></button>
                    </div>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src={img3} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Quiz Challenger</h2>
                    <p>Educational - Quiz App <br />
                    <b>Features:</b> MCQ options checker | Correct and wrong answer counter | React Router <br />
                    <b>Technologies:</b> React | Tailwind | Rechart</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline"><a href="https://calm-sable-2614f4.netlify.app/" target='blank'>Live</a></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;