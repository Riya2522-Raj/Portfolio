import { Html } from "@react-three/drei";
import React from "react";
import gif from './load.gif'; 
import './Loader.css';

const Loader = () => {
  return (
    <Html fullscreen>
      <div className='loader-container'>
        <div className='relative flex flex-col items-center'>
          <img
            src={gif}
            alt="Loading Animation"
            className='loader-gif animate-bounce'
          />
          <span className='loading-text animate-fadeIn'>Loading...</span>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
