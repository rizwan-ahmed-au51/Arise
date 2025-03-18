import React from 'react';
import styles from "./Gallery.module.scss";

// Import images
import img6 from '../../assets/images/gallery-page/6.jpg';
import img2 from '../../assets/images/gallery-page/2.jpg';
import img1 from '../../assets/images/gallery-page/1.jpg';
import imgDiwali1 from '../../assets/images/gallery-page/dewali/1.jpg';
import img5 from '../../assets/images/gallery-page/5.jpg';
import img59 from '../../assets/images/gallery-page/59.jpg';
import { NavLink } from 'react-router-dom';

const Celebrations = () => {
    return (
        <section className={styles.celebrations}>
            <div className="container">
                <div className="row">
                    <div className={styles.toppers}>
                        <div className={styles.heading}>
                            <h1>Celebrations</h1>
                            <NavLink to="/celeb-gallery">
                                <button>
                                    View More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.2563 4.13128C10.598 3.78957 11.152 3.78957 11.4937 4.13128L16.7437 9.38128C17.0854 9.72299 17.0854 10.277 16.7437 10.6187L11.4937 15.8687C11.152 16.2104 10.598 16.2104 10.2563 15.8687C9.91457 15.527 9.91457 14.973 10.2563 14.6313L14.0126 10.875L3.875 10.875C3.39175 10.875 3 10.4832 3 10C3 9.51675 3.39175 9.125 3.875 9.125H14.0126L10.2563 5.36872C9.91457 5.02701 9.91457 4.47299 10.2563 4.13128Z"
                                            fill="#2540AE"
                                        />
                                    </svg>
                                </button>
                            </NavLink>
                        </div>

                        <div className={styles.celeb_gallery}>
                            <div className={styles.left}>
                                <div className={styles.one}>
                                    <img src={img6} alt='img1' />
                                </div>
                                <div className={styles.two}>
                                    <img src={img2} alt='img2' />
                                </div>
                                <div className={styles.three}>
                                    <img src={img1} alt='img3' />
                                </div>
                            </div>

                            <div className={styles.right}>
                                <div className={styles.one}>
                                    <img src={imgDiwali1} alt='img4' />
                                </div>
                                <div className={styles.one}>
                                    <img src={img5} alt='img5' />
                                </div>
                                <div className={styles.one}>
                                    <img src={img59} alt='img6' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Celebrations;