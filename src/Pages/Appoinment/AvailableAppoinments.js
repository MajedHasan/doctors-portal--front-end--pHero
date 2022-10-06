import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppoinments = ({ date }) => {

    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formatedDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://evening-falls-52768.herokuapp.com/available?date=${formatedDate}`).then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`https://evening-falls-52768.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])

    return (
        <div className='container mx-auto my-5'>
            <h4 className='text-xl text-secondary text-center'>Available Appoinments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;