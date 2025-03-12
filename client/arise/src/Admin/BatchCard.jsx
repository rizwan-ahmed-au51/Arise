import React, { useEffect, useState } from 'react';
import styles from "./admin.module.scss";
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const BatchCard = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/batchdates`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteCard = (cid) => {

        axios.delete(`http://localhost:4000/batchdates/${cid}`)
            .then((res) => {
                toast.success('🦄 DateCard Deleted', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            })
            .catch((err) => {
                alert("Unable to delete Card..")
            });
    };
    const goToBatchDates = () => {
        navigate('/admindashboard/batchdates'); // Navigate to the nested route
    };
    return (
        <div className="container">
            <div className="row">
                <ToastContainer />
                <div className="col-12">
                    <div className="row">

                        <div className="mb-4 text-end">
                            <button className='btn btn-primary' onClick={goToBatchDates}>
                                + Create Date Card
                            </button>
                        </div>
                        {
                            data.map((dte) => {
                                return (
                                    <div className={`m-2 ${styles.stateCard}`} key={dte._id}>
                                        <div className={styles.BatchInfo}>
                                            <p>FMGE Regular Batch</p>
                                            <h1>{dte.branch}</h1>
                                        </div>

                                        <div className={styles.datesContainer}>
                                            <p>Starting Dates</p>
                                            <div className={styles.Dates}>
                                                {dte.date.map((singleDate, index) => (
                                                    <div className={styles.dateContainer} key={index}>
                                                        <p>{singleDate}</p>
                                                    </div>
                                                ))}

                                            </div>
                                            <div className={styles.trash}>
                                                <DeleteOutlinedIcon className={styles.icon} onClick={() => deleteCard(dte._id)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BatchCard