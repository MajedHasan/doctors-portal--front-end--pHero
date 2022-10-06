import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {

    const location = useLocation()
    const [user, loading, error] = useAuthState(auth)
    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    const handleEmailVerification = async () => {
        await sendEmailVerification(user)
        await toast.success("Verification Send To your email")
    }

    if (user?.providerData[0]?.providerId === "password" && user?.emailVerified === false) {
        return <>
            <div className='flex justify-center items-center h-[80vh]'>
                <div className="shadow-xl rounded-xl p-5 text-center">
                    <h2 className='text-red-500 text-4xl'>Your Email is not verified</h2>
                    <h4 className='text-2xl my-4'>Please verify your email</h4>
                    <button onClick={handleEmailVerification} className="btn bg-green-500 text-white border-none">Send Verification Email</button>
                </div>
            </div>
        </>;
    }

    return children;
};

export default RequireAuth;