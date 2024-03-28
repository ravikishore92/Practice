import React, { useState } from 'react';
import './App.css';
import Video from './video/Video';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Sidebar from './Sidebar/Sidebar';
import SimpleImageSlider from "react-simple-image-slider";
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Content from './content/Content';
import Subjects from './Subjects/Subjects';
const images = [
  { url: "slide1.jpg" },
  { url: "slide2.webp" },
  { url: "slide3.png" },
  
];
function App() {
  const [currentVideoId,setCurrentVideoId] = useState('bm0OyhwFDuY');
 
 
  const handleVideoClick = (id) => {
    setCurrentVideoId(id);
  };

   return (
    <div >
      
      <Navbar></Navbar>
      {/* <div className="App">
        <div className="flexone">
        <Video presentVideoId={currentVideoId}></Video>
        </div>
        <div className="flextwo">
        <Sidebar videoHandler={handleVideoClick}></Sidebar>
        </div>
      </div> */}
      {/* <div className='slide'>
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
       <Content></Content> */}
       <Subjects></Subjects>
       <Footer></Footer>
    </div> 

    
  );
}

export default App;
