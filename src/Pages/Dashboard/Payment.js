import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3JMJLBUumQ6bLElQ9LVcHDPqd6mOd9H54FfdItAcn4aDJyF8QJ6cdA5bx57a6D0E5d5YC29J9acerBEf3E5WVu00N0pidGsf')

const Payment = () => {
    const { id } = useParams()
    const url = `https://evening-falls-52768.herokuapp.com/booking/${id}`
    const { data: appointment, isLoading } = useQuery('booking', () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="card md:w-6/12 w-full bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello {appointment?.paitentName}</p>
                    <h2 className="card-title">Please pay for {appointment?.treatment}</h2>
                    <p>Your appointment:  <span className="text-orange-700">{appointment?.date}</span> at {appointment?.slot}</p>
                    <p>Please pay ${appointment?.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 md:w-6/12 w-full shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;