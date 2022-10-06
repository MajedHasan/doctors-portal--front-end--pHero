import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner3.css';

const Banner3 = () => {
    return (
        <div className="hero home-page-hero-3 my-12">
            <div className="container mx-auto p-7 md:p-0">
                <div className="hero-content flex-col lg:flex-row py-0">
                    <div className='w-12/12 md:w-6/12 hidden lg:block '>
                        <img src={doctorSmall} className="mx-auto" style={{ maxWidth: '600px', marginTop: '-50px' }} alt="" />
                    </div>
                    <div className='w-12/12 md:w-6/12'>
                        <span className='text-primary font-bold'>Appointment</span>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner3;