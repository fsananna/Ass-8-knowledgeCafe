// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-row justify-between m-7 border-2 border-b-indigo-200 '>
               <h1 className='text-start font-bold text-2xl mx-3'>Knowledge Cafe</h1> 
               <img className='w-10 h-10 me-3' src="circle-profile-pic.jpg" alt="" /> 
        </div>
    );
};

export default Header;