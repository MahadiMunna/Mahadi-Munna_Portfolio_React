import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../utilities/image/logo.png'

const Navbar = () => {
    const navLinks = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="ml-5">
                    <div className="w-24">
                        <Link to='/'><img src={img} alt='Logo of Mahadi Munna' title='Mahadi Hasan Munna - Web developer'/></Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
                <div className="navbar-end">
                    <a className="btn btn-outline" href='https://drive.google.com/file/d/1_EoLGb9lYmn-ii8o5-gXZBKGWTIYh_Fi/view?usp=sharing' target='blank'>Resume</a>
                </div>
        </div>
    );
};

export default Navbar;