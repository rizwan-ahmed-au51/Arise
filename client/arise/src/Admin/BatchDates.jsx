// import { Button, Form } from 'antd'
import React, { useState } from 'react'
import styles from "./admin.module.scss";
import axios from 'axios';
import moment from "moment";
// import BatchCard from './BatchCard';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';




const BatchDates = () => {

    const [date, setDate] = useState("");
    const [branch, setBranch] = useState("");
    const navigate = useNavigate();


    const addDate = (e) => {
        e.preventDefault();
        if (!branch) {
            alert("Please select a branch.");
            return;
        }
        if (!date) {
            alert("Please enter a batch date.");
            return;
        }
        // Convert date format
        const formattedDate = moment(date, "YYYY-MM-DD").format("MMM DD"); // Converts to "Feb 20"

        axios.post(`http://localhost:4000/batchdates`, { branch, date: formattedDate })
            .then(() => {
                toast.success('🦄 New Date Added!', {
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
                setDate("");
                setBranch("");
            })
            .catch((err) => {
                alert("Unable to add Date");
            });
    };
    const goToBatchDates = () => {
        navigate('/admindashboard/batchcard');
    };
    return (
        <main className={styles.dates}>
            <section className=' justify-center'>
                <div className="container">

                    <div className="row  justify-content-center">
                        <div className="mb-4 text-end">
                            <button className='btn btn-primary' onClick={goToBatchDates}>
                                Back to Card
                            </button>
                        </div>
                        <ToastContainer />
                        <h1>Create Batch Dates</h1>
                        <div className="col-lg-6 ">
                            <div className="bx-shadow">
                                <form >
                                    <div className={`mb-4 ${styles.labl}`}>
                                        <select class="form-select" name="branch" id="branch" value={branch}
                                            onChange={(e) => setBranch(e.target.value)} required>
                                            <option value="">Select Branch</option>
                                            <option value="Online">Online</option>
                                            <option value="Hyderabad">Hyderabad</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Jaipur">Jaipur</option>
                                            <option value="Chennai">Chennai</option>
                                            <option value="Kerala">Kerala</option>
                                        </select>
                                        {/* <input type="text" name='Tname' placeholder='Name of Treatment' className='form-control' /> */}
                                    </div>

                                    <div className="mb-4">
                                        <input type="date" name='date' placeholder='Batch Date' className='form-control' required value={date} onChange={(e) => setDate(e.target.value)} />
                                    </div>

                                    <div className="mb-4 text-end">
                                        <input type="Submit" className='btn btn-primary' value="Add Date" onClick={addDate} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className={`p-5 ${styles.batch_card}`}>
                {/* <BatchCard /> */}
            </section>
        </main>
    )
}

export default BatchDates