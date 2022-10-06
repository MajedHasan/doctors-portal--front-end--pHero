import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className="container mx-auto mt-5">
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <InfoCard cardTitle="Opening Hours" cardText="Sat-thu 09:00 AM - 08:00 PM" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
                <InfoCard cardTitle="Our Locations" cardText="Brooklyn, NY 10036, United States" bgClass="bg-neutral" img={marker}></InfoCard>
                <InfoCard cardTitle="Contact Us" cardText="+000 123 456789" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
            </div>
        </div>
    );
};

export default Info;