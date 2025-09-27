import React from 'react';
import bannerImg from '../assets/banner-main.png'
import Container from './Container';

const Banner = () => {
    return (
    <div className='my-10'>
        <Container>
        <div className="bannerBackground w-full">
           <div className='items-center text-center '>
             <img src={bannerImg} alt="" className='mx-auto mb-10' />
             <h3 className='text-white lg:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
             <p className=' text-[#ffffffb3] my-3 lg:text-2xl'>Beyond Boundaries Beyond Limits</p>
             <div className='bannerButton'>
             <button className='cursor-pointer bg-[#E7FE29] p-2.5 rounded-xl'>Claim Free Credit</button>
           </div>
             </div>

            </div>
        </Container>
        </div>
    );
};

export default Banner;