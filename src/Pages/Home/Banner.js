import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../utilities/image/profile.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} />
                <div>
                    <h1 className="text-5xl font-bold">Welcome!</h1>
                    <p className="py-6">Hi, I'm a professional web developer. If you want to build your website you are on the right track. Contact me how can I help you? </p>
                    <button className="btn btn-outline"><Link t0='/contact'>Contact</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;