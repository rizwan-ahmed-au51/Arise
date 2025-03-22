import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Branches/BrDatesCard.module.scss';
import { NavLink } from 'react-router-dom';
import BranchMap from '../../../Pages/Branches/Components/BranchMap';

const Branches = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/batchdates`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    return (
        <section className={`text-center ${styles.branches}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Discover <span>Nearby</span> Campus</h1>
                        <p>Explore our upcoming offline batches across top institutions near you check start dates and
                            locations to find the <br /> perfect class for your medical coaching journey!</p>

                        <BranchMap />

                        <div className={styles.branchesContentSmallHide}>
                            {data.map((dte) => (
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
                                            <NavLink to={`https://register.arisemedicalacademy.com/`}>
                                                <button>Register Now</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branches;