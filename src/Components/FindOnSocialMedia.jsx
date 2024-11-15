import React from 'react';
import facebookLogo from '../assets/fb.png'
import twitterLogo from '../assets/twitter.png'
import instagramLogo from '../assets/instagram.png'

const FindOnSocialMedia = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-[1.1rem] mb-3">Find Us On</h2>
            <div className='*:w-full'>
                <button className='flex items-center justify-center gap-3 px-6 py-3 border-2 font-medium text-[#706F6F] hover:bg-gray-300'><img src={facebookLogo} alt="" /><span>Facebook</span></button>
                <button className='flex items-center justify-center gap-3 px-6 py-3 border-b-2 border-r-2 border-l-2 font-medium text-[#706F6F] hover:bg-gray-300'><img src={twitterLogo} alt="" /><span>Twitter</span></button>
                <button className='flex items-center justify-center gap-3 px-6 py-3 border-b-2 border-r-2 border-l-2 font-medium text-[#706F6F] hover:bg-gray-300'><img src={instagramLogo} alt="" /><span>Instagram</span></button>
            </div>
        </div>
    );
};

export default FindOnSocialMedia;