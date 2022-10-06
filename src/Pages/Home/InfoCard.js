import React from 'react';

const InfoCard = ({ img, cardTitle, cardText, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl bg-accent ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white text-center md:text-left">
                <h2 className="font-bold text-xl">{cardTitle}</h2>
                <p>{cardText}</p>
            </div>
        </div>
    );
};

export default InfoCard;