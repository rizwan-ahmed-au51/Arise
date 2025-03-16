import React from "react";
import styles from "./Home.module.scss";
import about1 from '../../assets/images/index-page/about1.png';

const About = () => {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                        <div className={styles.about_img}>
                            <img src={about1} alt="About ARISE" />
                            <span></span>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                        <h2>About ARISE</h2>
                        <h1>
                            Decade of Transforming <br />
                            <span>Medical Education</span> and Ensuring Student Success
                        </h1>
                        <p>
                            Founded in 2010, Arise Medical Academy stands as India's premier medical academy with a
                            vision to revolutionize medical education. Initially, we offered MBBS classes for Indian
                            medical graduates and quickly expanded to support students from foreign medical
                            universities. These early efforts allowed us to understand and address the unique needs of
                            students returning to India to pursue their medical careers.
                            <br />
                            <br />
                            In 2015, we launched our first FMGE (Foreign Medical Graduate Examination) batch with 15
                            students, achieving a 100% pass rate. This success underscored our effective teaching
                            methods and the dedication of our faculty. Since then, each batch has consistently seen over
                            100 successful students, solidifying Arise Medical Academy's reputation as a leader in FMGE
                            preparation.
                        </p>

                        <a href="./about.html" className={styles.knowMoreButton}>
                            <button>
                                Know More
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.7563 4.63128C11.098 4.28957 11.652 4.28957 11.9937 4.63128L17.2437 9.88128C17.5854 10.223 17.5854 10.777 17.2437 11.1187L11.9937 16.3687C11.652 16.7104 11.098 16.7104 10.7563 16.3687C10.4146 16.027 10.4146 15.473 10.7563 15.1313L14.5126 11.375L4.375 11.375C3.89175 11.375 3.5 10.9832 3.5 10.5C3.5 10.0168 3.89175 9.625 4.375 9.625H14.5126L10.7563 5.86872C10.4146 5.52701 10.4146 4.97299 10.7563 4.63128Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
