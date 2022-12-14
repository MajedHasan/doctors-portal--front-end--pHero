import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner2 = () => {
    return (
        <div className="hero min-h-screen mb-7">
            <div className="container mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-12/12 md:w-6/12'>
                        <img src={treatment} className="rounded-lg shadow-2xl mx-auto" style={{ maxWidth: '450px' }} alt='' />
                    </div>
                    <div className='w-12/12 md:w-6/12'>
                        <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;