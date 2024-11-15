import React from 'react';
import { GrGithub, GrGoogle } from 'react-icons/gr';

const SocialLogin = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] font-semibold text-[1.1rem] mb-3">Login With</h2>
            <div className='space-y-2 *:w-full'>
                <button className='flex justify-center items-center gap-3 border-2 border-black btn hover:text-blue-400 hover:border-blue-500 font-bold hover:bg-white'><GrGoogle /> <span>Login With Google</span></button>
                <button className='flex justify-center items-center gap-3 border-2 border-black btn hover:text-blue-400 hover:border-blue-500 font-bold hover:bg-white'><GrGithub /> <span>Login With Github</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;