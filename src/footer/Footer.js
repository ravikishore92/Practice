import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function Footer() {
    const arr1 = ['Home','About Us','Contact Us','Get Started'];
    const arr2 = ['App design','Web design','Logo design','Banner design'];
    const arr3 = ['Profile','My Account','Logo design','Banner design'];


  return (
    <>
    <div className='one'>
    <div className='two'>
        <div className='three'>RKR IT</div>
        <div className='fb'><FacebookIcon size={32}/></div>
        <div className='tw'><TwitterIcon size={32}/></div>
        <div className='In'><FaInstagram size={25} /></div>
        <div className='Li'><FaLinkedin size = {25}/></div>
    </div>
    <div className = 'four'></div>
    <div className='flex'>
    <div>
        <div className='com'>Company</div>
        <div className='Gs'>Home</div>
        <div className='Gs'>Contact Us</div>
        <div className='Gs'>About Us</div>
        <div className='Gs'>Get Started</div>
    </div>
    <div>
        <div className='ser'>Services</div>
        <div className='Ad'>App design</div>
        <div className='Ad'>Web design</div>
        <div className='Ad'>Logo design</div>
        <div className='Ad'>Banner design</div>
    </div>
    <div>
         <div className='Acc'>Account</div>
         <div className='Pu'>Profile</div>
         <div className='Pu'>My account</div>
         <div className='Pu'>cd </div>
         <div className='Pu'>Purchase</div>
    </div>
    <div>
        <div className='Cou'>Courses</div>
        <div className='Ps'>HTML & CSS</div>
        <div className='Ps'>JavaScript</div>
        <div className='Ps'>Photography</div>
        <div className='Ps'>Photoshop</div>
    </div>
    <div>
        <div className='Sub'>Subscribe</div>
        <div><input type = "text" className='tf' placeholder = "Enter your email"></input></div>
        <div><button className='btn'>Subscribe</button></div>
    </div>
    </div>
    </div>
    <div className='bottom'>
        <div className='bottomone'>Copyright 2024 CodingStella</div>
        <div className='bottomtwo'>All rights reserved</div>
        <div className='bottomthree'>Privacy Policy</div>
        <div className='bottomfour'>Terms & Conditions</div>
    </div>
    </>
  )
}

export default Footer