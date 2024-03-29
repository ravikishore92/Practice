import React, { useState } from 'react';
import './App.css';


import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

import Subjects from './Subjects/Subjects';
import Courses from './courses/Courses';
import VideoPlayer from './videoPlayer/VideoPlayer';
import HomePage from './HomePage/HomePage';
import CourseList from './courselist/CourseList';
import AfterSubmit from './AfterSubmit';
cd


function App() {
  
   return (
    <div >
      
      <Navbar></Navbar>

      {/* <HomePage></HomePage> */}
      {/* <VideoPlayer></VideoPlayer> */}
       {/* <Subjects></Subjects> */}
       {/* <Courses></Courses> */}

       {/* <CourseList></CourseList> */}

       {/* <AfterSubmit></AfterSubmit> */}
       
       
       <Footer></Footer>
       
    </div> 

    
  );
}

export default App;
