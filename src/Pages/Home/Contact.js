import React from 'react';
import backgroundImg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className='my-8 bg-cover bg-no-repeat bg-center' style={{ background: `url(${backgroundImg})` }}>
            <div className="container mx-auto p-12">
                <div className='text-center max-w-[450px] mx-auto'>
                    <span className="text-xl font-bold text-secondary">Contact Us</span>
                    <h2 className="text-3xl text-white my-4">Stay connected with us</h2>
                    <form className='mt-10'>
                        <input type="email" className='input input-bordered input-md w-full mb-4' placeholder='Email Address' />
                        <input type="text" className='input input-bordered input-md w-full mb-4' placeholder='Subject' />
                        <textarea name="" id="" cols='45' rows="5" className='rounded shadow-lg p-4 outline-none w-full mb-4' placeholder='Your message'></textarea>
                        <PrimaryButton>Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;