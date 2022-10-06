import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bannerBg from '../../assets/images/bg.png';

const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${bannerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-12/12 md:w-6/12">
                        <img src={chair} alt='Dentist Chair' className="w-full rounded-lg shadow-2xl" style={{ maxWidth: '590px' }} />
                    </div>
                    <div className='w-12/12 md:w-6/12 flex justify-center items-center flex-col'>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                            className='shadow-xl rounded-2xl'
                        />
                        <p>You have selected: </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;