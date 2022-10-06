import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-secondary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }
                </p>
                <p>{slots.length} space{slots.length > 1 ? 's' : ''} available</p>
                <p className='text-xl text-yellow-400 text-center font-bold'>Price ${price}</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className={`btn btn-md btn-secondary text-white text-uppercase ${slots.length === 0 ? '' : 'bg-gradient-to-r from-secondary to-primary'}`}
                        onClick={() => setTreatment(service)}
                    >Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;