import React, { useState } from 'react';
import './Navbar.css';
import {FiHome} from 'react-icons/fi';
import {MdOutlinePersonPin} from 'react-icons/md';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {MdMiscellaneousServices} from 'react-icons/md';
import {MdOutlineContactMail} from 'react-icons/md';


const Navbar = () => {
    const [active,setActive] = useState('#')
    return (
        <nav>
            <a href="#home" onClick={()=>setActive('#home')} className={active==='#home'?'active':''}><FiHome/></a>
            <a href="#about" onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><MdOutlinePersonPin/></a>
            <a href="#projects" onClick={()=>setActive('#projects')} className={active==='#projects'?'active':''}><AiOutlineAppstoreAdd/></a>
            <a href="#services" onClick={()=>setActive('#services')} className={active==='#services'?'active':''}><MdMiscellaneousServices/></a>
            <a href="#contact" onClick={()=>setActive('#contact')} className={active==='#contact'?'active':''}><MdOutlineContactMail/></a>
        </nav>
    );
};

export default Navbar;