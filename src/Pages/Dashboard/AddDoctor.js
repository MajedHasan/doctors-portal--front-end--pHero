import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const { data: services, isLoading } = useQuery('services', () => fetch(`https://evening-falls-52768.herokuapp.com/service`).then(res => res.json()))


    const imageStorageKey = '856ec68363f9976cee894136de3d7aef'


    /* 
        3 ways to store images
        ---> 01. Third party storage
        ---> 02. Your own storage in your own server (file system)
        ---> 03. Database: mongodb

        YUP: to validate file
    */

    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    // send to your database
                    fetch('https://evening-falls-52768.herokuapp.com/doctor', {
                        method: "POST",
                        headers: {
                            'Content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted?.insertedId) {
                                toast.success("Doctor Added Successfully")
                                reset()
                            }
                            else {
                                toast.error("Doctor can't add. Please try again later")
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='text-center mx-auto my-5'>
            <h2 className='text-2xl'>Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center flex-col">

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs"
                        {...register("speciality")}
                    >
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}>
                                {service.name}
                            </option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input type="submit" className='btn w-full max-w-xs text-white' value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;