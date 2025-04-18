import React, { useState, useEffect } from 'react';
import styles from '../DateCard/DateCard.module.scss';
import mapImg from '../../../assets/images/index-page/map.png';
import { NavLink } from 'react-router-dom';

const Branches = () => {
    // State to manage which state card is visible on small screens
    const [activeCard, setActiveCard] = useState('hyderabad'); // Set default to 'hyderabad'

    // State to store the fetched state card details
    const [stateCards, setStateCards] = useState([]);

    // Initial data for state cards (with register links)
    const initialStateCards = [
        {
            id: 'hyderabad',
            title: 'Hyderabad', // Fallback title
            dates: [], // Fallback dates
            link: 'https://register.arisemedicalacademy.com/',
        },
        {
            id: 'delhi',
            title: 'Delhi', // Fallback title
            dates: [], // Fallback dates
            link: 'https://registerdelhi.arisemedicalacademy.com/',
        },
        {
            id: 'jaipur',
            title: 'Jaipur', // Fallback title
            dates: [], // Fallback dates
            link: 'https://registerjaipur.arisemedicalacademy.com/',
        },
        {
            id: 'chennai',
            title: 'Chennai', // Fallback title
            dates: [], // Fallback dates
            link: 'https://registerchennai.arisemedicalacademy.com/',
        },
        {
            id: 'kerala',
            title: 'Kerala', // Fallback title
            dates: [], // Fallback dates
            link: 'https://registerkerala.arisemedicalacademy.com/',
        },
    ];

    useEffect(() => {
        const fetchStateCardDetails = async () => {
            try {
                const response = await fetch('http://localhost:4000/batchdates');
                const data = await response.json();
    
                const updatedStateCards = initialStateCards.map((city) => {
                    const apiData = data.find((item) => item.branch.toLowerCase() === city.id);
                    return {
                        ...city,
                        title: apiData ? apiData.branch : city.title,
                        dates: apiData ? apiData.date : city.dates,
                    };
                });
    
                setStateCards(updatedStateCards);
            } catch (error) {
                console.error('Error fetching state card details:', error);
                setStateCards(initialStateCards);
            }
        };
    
        fetchStateCardDetails();
    }, []);
    
    // Handle map link clicks
    const handleMapLinkClick = (cityId) => {
        setActiveCard(cityId);
    };

    return (
        <section className={styles.branches}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1>
                            Discover <span>Nearby</span> Campus
                        </h1>
                        <p>
                            Explore our upcoming offline batches across top institutions near you—check start dates and locations to
                            find the <br /> perfect class for your medical coaching journey!
                        </p>

                        {/* Map and State Cards */}
                        <div className={styles.branchesContent2}>
                            {/* Map */}
                            <div className={`${styles.map} text-center`}>
                                <img src={mapImg} alt="Map" className={styles.map1} />

                                {/* Map Links */}
                                {stateCards.map((city) => (
                                    <div key={city.id} className={styles[city.id]}>
                                        <NavLink
                                            to={city.link}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleMapLinkClick(city.id);
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="21"
                                                height="21"
                                                viewBox="0 0 21 21"
                                                fill="none"
                                            >
                                                <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                                <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                            </svg>
                                            <span>{city.title}</span>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>

                            {/* State Cards */}
                            <div className={styles.branchContainer}>
                                {stateCards.map((city) => (
                                    <div
                                        key={city.id}
                                        id={city.id}
                                        className={styles.stateCard1}
                                        style={{
                                            display:
                                                window.innerWidth > 767 || activeCard === city.id ? 'flex' : 'none',
                                        }}
                                    >
                                        <div className={styles.BatchInfo}>
                                            <p>FMGE Regular Batch</p>
                                            <h1>{city.title}</h1>
                                        </div>

                                        <div className={styles.datesContainer}>
                                            <p>Starting Dates</p>
                                            <div className={styles.Dates}>
                                                {city.dates.map((date, index) => (
                                                    <div key={index} className={styles.dateContainer}>
                                                        <p>{date}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <NavLink to={city.link}>
                                            <button>Register Now</button>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branches;