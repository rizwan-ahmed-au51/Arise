import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import styles from './Branches.module.scss';
import { NavLink } from 'react-router-dom';
import map from '../../../assets/images/index-page/map.png';

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

                        <div className={styles.mapContainer}>
                            <div className={`${styles.map} text-center`}>
                                <img src={map} alt="Map" className={styles.map1} />

                                <div className={styles.hyd}>
                                    <a href="https://register.arisemedicalacademy.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg>
                                        <span>Hyderabad</span>
                                    </a>
                                </div>

                                <div className={styles.delhi}>
                                    <a href="https://registerdelhi.arisemedicalacademy.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg>
                                        <span>Delhi</span>
                                    </a>
                                </div>

                                {/* Jaipur Marker */}
                                <div className={styles.jaipur}>
                                    <a href="https://registerjaipur.arisemedicalacademy.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg>
                                        <span>Jaipur</span>
                                    </a>
                                </div>

                                {/* Chennai Marker */}
                                <div className={styles.chennai}>
                                    <a href="https://registerchennai.arisemedicalacademy.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg>
                                        <span>Chennai</span>
                                    </a>
                                </div>

                                {/* Kerala Marker */}
                                <div className={styles.kerala}>
                                    <a href="https://registerkerala.arisemedicalacademy.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg>
                                        <span>Kerala</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.branchesContentSmallHide}>
                            {/* Map over the fetched branches and render state cards dynamically */}
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