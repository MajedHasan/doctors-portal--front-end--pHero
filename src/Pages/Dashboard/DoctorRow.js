import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, speciality, img, email } = doctor

    const handleDelete = email => {
        fetch(`https://evening-falls-52768.herokuapp.com/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.deletedCount) {
                    toast.success(`Doctor: ${name} is Deleted.`)
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button onClick={() => handleDelete(email)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;