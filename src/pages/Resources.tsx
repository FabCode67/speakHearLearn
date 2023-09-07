import React from 'react';
import NavBar from '../components/NavBar';
import vid3 from '../assets/vid3.mp4';

const Resources = () => {
  return (
    <>
      <NavBar />
      <div className='flex justify-center text-center m-auto bg-blue-500 items-center min-h-screen h-fit'>
        <div className='flex justify-center w-full text-center m-auto bg-blue-500 items-center min-h-screen h-fit'>
          <div className='w-1/2 flex h-screen'>
        <video controls>
          <source src={vid3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className='w-1/2 flex bg-orange-100 h-screen'>
</div>
        </div>
      </div>
    </>
  );
};

export default Resources;
