import React from "react";
import  { useState, useEffect } from 'react';
import image1 from '../Asserts/1.jpg';
import image2 from '../Asserts/2.jpg';
import image3 from '../Asserts/3.jpg';
import image4 from '../Asserts/4.jpg';
import image5 from '../Asserts/5.jpg';
import image6 from '../Asserts/6.jpg';
import image7 from '../Asserts/7.jpg';

const Banner = ({onprev,onNext}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ image1,image2,image3,image4,image5,image6,image7]; 
  const delay = 7000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images.length, delay]);
  const loadNextPageMovies=()=>{
    
    if(currentIndex>=images.length-1 ){
      setCurrentIndex(0);
    }else{
      setCurrentIndex((prevPage)=>prevPage+1);
    }
    
  }
  const loadPrevPageMovies=()=>{
    if(currentIndex>0){
      
      setCurrentIndex((prevPage)=>prevPage-1);
    }else{
      setCurrentIndex(images.length - 1);
    }
    
  }
  return (
    <div className="h-[20vh] md:h-[55vh]  bg-repeat-x bg-center bg-cover "
    style={{
      backgroundImage: `url(${images[currentIndex]})`, 
    }}
  >
      <div  >
        <button onClick={loadPrevPageMovies}
        className=" absolute left-0  h-[20vh] md:h-[55vh] rounded-lg text-white font-bold text-8xl hover:scale-110 duration-50 " >{"<"} </button>
       
        <button onClick={loadNextPageMovies}
        className=" absolute right-0  h-[20vh] md:h-[55vh] rounded-lg text-white font-bold text-8xl hover:scale-110 duration-50  " >{">"}</button>
    </div>
    </div>
  );
};

export default Banner;
