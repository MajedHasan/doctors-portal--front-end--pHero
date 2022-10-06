import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen home-page-hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="w-12/12 md:w-6/12 rounded-lg shadow-2xl" alt='' />
                <div className='w-12/12 md:w-6/12 my-7 md:my-0'>
                    <h1 className="text-5xl font-bold text-primary">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;