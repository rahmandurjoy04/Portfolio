import React from 'react';
import myImage from '../assets/my-img.png'

const MyImage = () => {
    return (
        <div className='w-full  flex justify-center items-center'>
            <img src={myImage} className='w-full rounded-xl' alt="My Image" />
        </div>
    );
};

export default MyImage;