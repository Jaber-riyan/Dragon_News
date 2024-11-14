import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center mt-5 mb-5'>
            <div>
                <img className='w-[330px] mb-3' src={logo} alt="" />
            </div>
            <div className='text-center'>
                <p className='font-normal text-[1.1rem] text-[#706F6F] mb-2'>Journalism Without Fear or Favour</p>
                {/* <p className='font-medium text-[1rem] text-[#706F6F]'><span className='text-[#403F3F]'>Sunday</span>, November 27, 2025</p> */}
                <p className='font-medium text-[1rem] text-[#706F6F]'>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;