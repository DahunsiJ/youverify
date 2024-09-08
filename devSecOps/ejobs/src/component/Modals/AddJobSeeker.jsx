import { Button, TextInput, Label } from 'flowbite-react';
import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadSpinner from './LoadSpinner';
import { useDispatch } from 'react-redux';
import { addCandidate, updateCandidate } from '../../redux/candidateList/candidateListSlice';

function AddJobSeeker({ toggle }) {
    const apiRoute = process.env.REACT_APP_API_URL;
    const createCandidateURL = `${apiRoute}otherCandidate/createCandidate`;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleCreateCandidate = (data, ) => {
        setLoading(true);
        
            axios.post(createCandidateURL, data)
               .then((res) => {
                    dispatch(addCandidate(res.data))
                    toast.success('Candidate added successfully');
                    setLoading(false);
                    toggle();
                })
                
                .catch((err) => {
                    setLoading(false);
                    console.error(err)
                });

    };

    return (
        <div className="w-full text-gray-600 flex flex-col items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50">
            <form
                onSubmit={handleSubmit(handleCreateCandidate)}
                className="relative px-8 py-10 sm:w-2/3 w-full max-w-lg bg-white rounded-lg shadow-xl flex flex-col gap-4 h-90vh overflow-auto"
            >
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Register new candidate</h1>
                <MdCancel
                    onClick={toggle}
                    className="absolute top-4 right-4 text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500"
                />
                
                <div className="w-full">
                    <Label htmlFor="name" value="Name" />
                    <TextInput
                        {...register('name', { required: 'Name is required' })}
                        id="name"
                        placeholder="Enter candidate name"
                        className="mt-1"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="w-full">
                    <Label htmlFor="qualification" value="Qualification" />
                    <TextInput
                        {...register('qualification', { required: 'Qualification is required' })}
                        id="qualification"
                        placeholder="Enter qualification"
                        className="mt-1"
                    />
                    {errors.qualification && (
                        <p className="text-red-500 text-xs mt-1">{errors.qualification.message}</p>
                    )}
                </div>
                
                <div className="w-full">
                    <Label htmlFor="position" value="Position" />
                    <TextInput
                        {...register('position', { required: 'Position is required' })}
                        id="position"
                        placeholder="Enter position"
                        className="mt-1"
                    />
                    {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                </div>
                
                <div className="w-full">
                    <Label htmlFor="phoneNumber" value="Phone Number" />
                    <TextInput
                        {...register('phoneNumber', { required: 'Phone number is required' })}
                        id="phoneNumber"
                        placeholder="Enter phone number"
                        className="mt-1"
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                    )}
                </div>
                
                <div className="w-full">
                    <Label htmlFor="email" value="Email" />
                    <TextInput
                        {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })}
                        id="email"
                        placeholder="Enter email"
                        className="mt-1"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                
                <Button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full py-2">
                    {loading ? <LoadSpinner/> : 'Register'  }
                </Button>
            </form>
        </div>
    );
}

export default AddJobSeeker;
