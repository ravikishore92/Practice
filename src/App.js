import React, { useState } from 'react';
import './App.css';
import Video from './video/Video';

import Sidebar from './Sidebar/Sidebar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SimpleImageSlider from "react-simple-image-slider";
import Content from './content/Content';
import Footer from './footer/Footer';
const images = [
  { url: "slide1.jpg" },
  { url: "slide2.webp" },
  { url: "slide3.png" },
  
];
function App() {
  const [currentVideoId,setCurrentVideoId] = useState('bm0OyhwFDuY');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVideoClick = (id) => {
    setCurrentVideoId(id);
  };

   return (
    <div >
      <div className='nav'>
        <img src='rkr1.jpg' className='img5'></img>
        <div className='subject'>Java Spring Framework 6 with Spring Boot 3 - RK</div>
         <div className='flexbox'  onClick={handleClick}><AccountCircleIcon style={{fontSize:'30px'}}></AccountCircleIcon><div className='name'>Ravi Kishore</div><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
         <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className='item'>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Courses</MenuItem>
        <MenuItem onClick={handleClose}>Test Series</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
         
      </div>
      {/* <div className="App">
        <div className="flex1">
        <Video presentVideoId={currentVideoId}></Video>
        </div>
        <div className="flex2">
        <Sidebar videoHandler={handleVideoClick}></Sidebar>
        </div>
      </div> */}
      <div className='slide'>
      <SimpleImageSlider
        width={1519}
        height={604}
        slideDuration={0.5}
        autoPlay={true}
        images={images}
        showBullets={true}
        showNavs={true}
       //i will the code here when i wany
      />
      </div>
       <Content></Content>
       <Footer></Footer>
    </div> 

    
  );
}

export default App;
