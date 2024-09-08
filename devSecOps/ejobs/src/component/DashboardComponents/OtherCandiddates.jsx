
// ---------version2----------
import { Button, Dropdown, Table } from 'flowbite-react';
import React, { useState } from 'react';
import MessageModal from '../Modals/Mesage';
import AddJobSeeker from '../Modals/AddJobSeeker';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { removeCandidate } from '../../redux/candidateList/candidateListSlice';
import { toast } from 'react-toastify';
import UpdateCandidateData from '../Modals/UpdateCandidate';

const OtherCandidates = ({data}) => {
    const [showMessage, setShowMessage] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const apiRoute = process.env.REACT_APP_API_URL;
    const deleteCandidateURL = `${apiRoute}otherCandidate/deleteCandidate`;
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [currCandidate, setCurrCandidates] = useState('');


    const handleMessage = () => {
        setShowMessage(!showMessage);
    };

    const toggleEdit = () => {
        setShowEdit(!showEdit);
    };


    const toggleAdd = () => {
        setShowAdd(!showAdd);
    };

    const handleDelete = async(userId)=>{
        const deletePath = `${deleteCandidateURL}/${userId}`
        setLoading(true);
        try {
            const response = await axios.delete(deletePath);
            console.log(response.data);
            dispatch(removeCandidate(response.data));
            toast.success('Candidate deleted successfully');
            setLoading(false);
        } catch (error) {
            toast.error('Error try again');
            console.log(error);
        }
    }



    return (
        <div className="p-6 rounded-lg shadow-lg text-base">
            <h1 className="text-2xl font-semibold mb-4 text-gray-200">
                Candidates
            </h1>
            <div className="p-4 rounded-lg">
                <Table className="overflow-auto">
                    <Table.Head className="text-gray-700">
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Qualification</Table.HeadCell>
                        <Table.HeadCell>Position</Table.HeadCell>
                        <Table.HeadCell>Phone number</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Remark</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="text-gray-200 hover:text-gray-800">
                        {data?.map((candidate, index) => (
                            <Table.Row key={index} className="hover:bg-gray-300 hover:text-gray-800">
                            <Table.Cell className="w-fit">{candidate.name}</Table.Cell>
                            <Table.Cell>{candidate.qualification}</Table.Cell>
                            <Table.Cell>{candidate.position}</Table.Cell>
                            <Table.Cell>{candidate.phoneNumber}</Table.Cell>
                            <Table.Cell>{candidate.email}</Table.Cell>
                            <Table.Cell>{candidate.remark || 'NC'}</Table.Cell>
                            <Table.Cell>
                                <Dropdown label="Actions">
                                    <Dropdown.Item onClick={handleMessage}>
                                        <span className="flex items-center border-2 border-slate-100">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.764l7.997-3.88A1 1 0 0018 5H2a1 1 0 00-.997.884z" />
                                                <path d="M10 12.036l-8-3.887V13a1 1 0 00.553.894l7.447 3.724a1 1 0 00.894 0l7.447-3.724A1 1 0 0018 13V8.15l-8 3.887z" />
                                            </svg>
                                            Message
                                        </span>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{setCurrCandidates(candidate._id); toggleEdit()}}>
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M13.707 3.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-.293.207l-4 1a1 1 0 01-1.207-1.207l1-4a1 1 0 01.207-.293l7.414-7.414a1 1 0 011.414 0zM14 2a2 2 0 00-2.828 0L4 9.172a2 2 0 00-.586 1.414l-1 4a2 2 0 002.414 2.414l4-1a2 2 0 001.414-.586l7.172-7.172A2 2 0 0016 4a2 2 0 00-2-2z" />
                                            </svg>
                                            Edit
                                        </span>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{handleDelete(candidate._id)}}>
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6zm3 3a1 1 0 10-2 0v7a1 1 0 102 0V6zm4 0a1 1 0 10-2 0v7a1 1 0 102 0V6z" clipRule="evenodd" />
                                            </svg>
                                            Delete
                                        </span>
                                    </Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
            <Button onClick={toggleAdd} className='border-2 border-gray-100'>Add new</Button>
            {showMessage && <MessageModal toggle={handleMessage} />}
            {showEdit && <UpdateCandidateData toggle={toggleEdit} id={currCandidate}/>}
            {showAdd && <AddJobSeeker toggle={toggleAdd}/>}
        </div>
    );
};

export default OtherCandidates;
