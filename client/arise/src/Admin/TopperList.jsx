import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const TopperList = () => {
    const [toppers, setToppers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchToppers();
    }, []);

    const fetchToppers = async () => {
        try {
            const res = await axios.get('http://localhost:4000/topper');
            setToppers(res.data);
        } catch (error) {
            console.error("Error fetching toppers:", error);
            toast.error('Failed to load toppers');
        }
    };

    const deleteTopper = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/topper/${id}`);
            toast.success('Topper deleted successfully!');
            fetchToppers(); // Refresh list
        } catch (error) {
            toast.error('Failed to delete topper');
        }
    };

    const goToAddTopper = () => {
        navigate('/admindashboard/addtopper');
    };

    const goToEditTopper = (id) => {
        navigate(`/admindashboard/edit-topper/${id}`);
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-3">
                <h2>Topper List</h2>
                <button className="btn btn-primary" onClick={goToAddTopper}>Add New Topper</button>
            </div>
            <ToastContainer />
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Student Name</th>
                        <th>Marks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {toppers.length > 0 ? (
                        toppers.map((topper) => (
                            <tr key={topper._id}>
                                <td>{topper.stdname}</td>
                                <td>{topper.marks}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => goToEditTopper(topper._id)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteTopper(topper._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">No toppers found</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>

    );
};

export default TopperList;
