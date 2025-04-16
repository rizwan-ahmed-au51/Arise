import React, { useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import styles from "./admin.module.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Toppers = () => {
    const [img, setImg] = useState("");
    const [marks, setMarks] = useState("");
    const [stdname, setStdname] = useState("");
    const navigate = useNavigate();

    const addtopper = (e) => {
        e.preventDefault();
        let formdata = new FormData(); // Move inside the function to create new FormData each time
        formdata.append("image", img);
        formdata.append("marks", marks); // Changed from "stdmarks" to match your backend
        formdata.append("stdname", stdname); // Changed from "student" to match your backend

        axios.post(`http://localhost:4000/addtopper`, formdata)
            .then((res) => {
                toast.success('🦄 New Topper Added!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setImg("");
                setMarks("");
                setStdname("");
            })
            .catch((err) => {
                console.error("Error details:", err);
                toast.error('Failed to add topper!');
            });
    };
    const goToList = () => {
        navigate('/admindashboard/topperlist');
    };

    return (
        <main className={styles.dates}>
            <section className=' justify-center'>
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="mb-4 text-end">
                            <button className='btn btn-primary' onClick={goToList}>
                                Back to List
                            </button>
                        </div>
                        <ToastContainer />
                        <h1>Create Toppers</h1>
                        <div className="col-lg-6 ">
                            <div className="bx-shadow">
                                <form >
                                    <div className={`mb-4 ${styles.labl}`}>
                                        <input type="file" className='form-control' required onChange={(e) => setImg(e.target.files[0])} />
                                    </div>

                                    <div className="mb-4">
                                        <input type="text" name='marks' placeholder='Enter Marks' className='form-control' required value={marks} onChange={(e) => setMarks(e.target.value)} />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" name='std' placeholder='Enter Student Name' className='form-control' required value={stdname} onChange={(e) => setStdname(e.target.value)} />
                                    </div>

                                    <div className="mb-4 text-end">
                                        <input type="Submit" className='btn btn-primary' value="Add Topper" onClick={addtopper} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Toppers