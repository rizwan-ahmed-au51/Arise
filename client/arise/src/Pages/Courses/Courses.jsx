import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "../Courses/Course.module.scss";
import contactImg from "../../assets/images/contact-page/contact1.png";
import courseImg from "../../assets/images/course-page/Course Image.png";
import courseImg2 from "../../assets/images/course-page/Course Image2.png";
import courseImg3 from "../../assets/images/course-page/Course Image3.png";
import courseImg5 from "../../assets/images/course-page/Course Image5.png";
import courseImg6 from "../../assets/images/course-page/Course Image6.png";

const Courses = () => {
    return (
        <main>
            <section className={styles.course}>
                <div className="container">
                    <div className="row">
                        <div className={`col-12 ${styles.heading}`}>
                            <h1><span>Courses</span> We Provide</h1>

                        </div>
                        <div className="col-12">
                            <div className={styles.course_btn}>
                                <a href="#regular"><button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.15"
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        fill="#2540AE" />
                                    <path
                                        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                        fill="#2540AE" />
                                </svg>Regular Batch</button></a>

                                <a href="#semi_regular"><button><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.15"
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        fill="#2540AE" />
                                    <path
                                        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                        fill="#2540AE" />
                                </svg>Semi-Regular Batch</button></a>

                                <a href="#super_revision"><button><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.15"
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        fill="#2540AE" />
                                    <path
                                        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                        fill="#2540AE" />
                                </svg>Super Revision Batch</button></a>

                                <a href="#abhyas"><button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.15"
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        fill="#2540AE" />
                                    <path
                                        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                        fill="#2540AE" />
                                </svg>Test Series - Abhyas</button></a>

                                <a href="#foundation"><button style={{fontSize:"15px"}}><svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path opacity="0.15"
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        fill="#2540AE" />
                                    <path
                                        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                        fill="#2540AE" />
                                </svg>Foundation FMGE Batch</button></a>

                                <a href="#in_university"><button><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                    height="20" viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.15"
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        fill="#2540AE" />
                                    <path
                                        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                        fill="#2540AE" />
                                </svg>In-University Class</button></a>

                                <a href="/"><button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 20 20" fill="none">
                                    <path opacity="0.15"
                                        d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                                        fill="#2540AE" />
                                    <path
                                        d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                        fill="#2540AE" />
                                </svg>Online Crash Course
                                </button></a>
                            </div>
                        </div>
                    </div>

                    <div id="regular" className={styles.batch_card}>
                        <div className={`row ${styles.one}`}>
                            <div className="col-lg-7">
                                <div className={styles.content}>
                                    <h1><span>Regular</span> Batch</h1>
                                    <div className={styles.overview}>
                                        <p><span>
                                            Duration :
                                        </span>
                                            6 Months</p>

                                        <p><span>
                                            Phases : 3
                                        </span>
                                            <em>(Regular Classes, Test and Discussion, Revision)</em>
                                        </p>

                                        <p><span>
                                            Subjects Covered :
                                        </span>
                                            All 19 subjects</p>

                                        <p> <span>Overview :</span> Embark on a comprehensive journey towards
                                            FMGE/MCI
                                            exam
                                            success with our Regular Batch, spanning three phases over six months.
                                            The
                                            Regular
                                            Classes provides in-depth coverage of all 19 subjects, ensuring a solid
                                            foundation of knowledge. The Test and Discussion phase allows students
                                            to
                                            assess their progress through regular tests followed by insightful
                                            discussions led by our experienced faculty members. Finally, the
                                            Revision
                                            phase offers focused revision sessions to reinforce key concepts and
                                            enhance
                                            retention, ensuring students are fully prepared for the exam.. </p>


                                    </div>
                                    <div className={styles.content_row}>
                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M35.1285 9.34723L38.6441 5.83161C40.1696 4.30613 42.6429 4.30613 44.1684 5.83161C45.6939 7.3571 45.6939 9.8304 44.1684 11.3559L22.0462 33.4781C20.9448 34.5795 19.5863 35.3891 18.0935 35.8338L12.5 37.5L14.1662 31.9065C14.6109 30.4137 15.4205 29.0552 16.5219 27.9538L35.1285 9.34723ZM35.1285 9.34723L40.625 14.8437M37.5 29.1667V39.0625C37.5 41.6513 35.4013 43.75 32.8125 43.75H10.9375C8.34866 43.75 6.25 41.6513 6.25 39.0625V17.1875C6.25 14.5986 8.34867 12.5 10.9375 12.5H20.8333"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>60 Days Revision</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>19 Subjects</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                                                    stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Intense Test Prep</p>
                                        </div>
                                    </div>
                                    <NavLink href="https://wa.me/+917680929292"><button type="submit">Contact <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0252 4.02436C11.3181 3.73146 11.793 3.73146 12.0859 4.02436L17.5303 9.4688C17.671 9.60945 17.75 9.80022 17.75 9.99913C17.75 10.198 17.671 10.3888 17.5303 10.5295L12.0859 15.9739C11.793 16.2668 11.3181 16.2668 11.0252 15.9739C10.7323 15.681 10.7323 15.2061 11.0252 14.9132L15.1893 10.7491L3 10.7491C2.58579 10.7491 2.25 10.4133 2.25 9.99913C2.25 9.58492 2.58579 9.24913 3 9.24913L15.1893 9.24913L11.0252 5.08502C10.7323 4.79212 10.7323 4.31725 11.0252 4.02436Z"
                                            fill="white" />
                                    </svg></button></NavLink>
                                </div>


                            </div>

                            <div className="col-lg-5">
                                <img src={courseImg} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div id="semi_regular" className={styles.batch_card}>
                        <div className="row">

                            <div className="col-lg-5">
                                <img src={courseImg2} alt=""/>

                            </div>
                            <div className="col-lg-7">
                                <div className={styles.content}>
                                    <h1><span>Semi-Regular</span> Batch</h1>
                                    <div className={styles.overview}>
                                        <p><span>
                                            Duration :
                                        </span>
                                            3 Months</p>

                                        <p><span>
                                            Phases : 3
                                        </span>
                                            <em>(Regular Classes, Test and Discussion, Revision)</em>
                                        </p>

                                        <p><span>
                                            Subjects Covered :
                                        </span>
                                            10 major subjects</p>

                                        <p> <span>Overview :</span> Ideal for those with limited time, our
                                            Semi-Regular Batch spans three months and covers 10 major subjects. The
                                            Classes phase focuses on mastering these subjects through comprehensive,
                                            efficient learning sessions. Following this, the Test and Discussion phase,
                                            gauges students' understanding through tests and detailed discussions to
                                            clarify doubts and reinforce learning. The final 15-day Revision phase
                                            engages students in intensive revision sessions to consolidate their
                                            knowledge and boost their confidence for the exam. </p>


                                    </div>

                                    <div className={styles.content_row}>
                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M35.1285 9.34723L38.6441 5.83161C40.1696 4.30613 42.6429 4.30613 44.1684 5.83161C45.6939 7.3571 45.6939 9.8304 44.1684 11.3559L22.0462 33.4781C20.9448 34.5795 19.5863 35.3891 18.0935 35.8338L12.5 37.5L14.1662 31.9065C14.6109 30.4137 15.4205 29.0552 16.5219 27.9538L35.1285 9.34723ZM35.1285 9.34723L40.625 14.8437M37.5 29.1667V39.0625C37.5 41.6513 35.4013 43.75 32.8125 43.75H10.9375C8.34866 43.75 6.25 41.6513 6.25 39.0625V17.1875C6.25 14.5986 8.34867 12.5 10.9375 12.5H20.8333"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>15 Days Revision</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>10 Subjects</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                                                    stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Intense Test Prep</p>
                                        </div>
                                    </div>
                                    <NavLink to="#"><button type="submit">Contact <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0252 4.02436C11.3181 3.73146 11.793 3.73146 12.0859 4.02436L17.5303 9.4688C17.671 9.60945 17.75 9.80022 17.75 9.99913C17.75 10.198 17.671 10.3888 17.5303 10.5295L12.0859 15.9739C11.793 16.2668 11.3181 16.2668 11.0252 15.9739C10.7323 15.681 10.7323 15.2061 11.0252 14.9132L15.1893 10.7491L3 10.7491C2.58579 10.7491 2.25 10.4133 2.25 9.99913C2.25 9.58492 2.58579 9.24913 3 9.24913L15.1893 9.24913L11.0252 5.08502C10.7323 4.79212 10.7323 4.31725 11.0252 4.02436Z"
                                            fill="white" />
                                    </svg></button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="super_revision" className={styles.batch_card}>

                        <div className={`row ${styles.three}`}>
                            <div className="col-lg-7">
                                <div className={styles.content}>
                                    <h1><span>Super Revision</span> Batch</h1>
                                    <div className={styles.overview}>
                                        <p><span>
                                            Duration :
                                        </span>
                                            2 Months</p>

                                        <p><span>
                                            Phases : 2
                                        </span>
                                            <em>(Test and Discussion, Rapid Revision Classes)</em>
                                        </p>

                                        <p><span>
                                            Subjects Covered :
                                        </span>
                                            All 19 subjects <em>(Test and Discussion)</em>, 10 major subjects
                                            <em>(Rapid
                                                Revision Classes)</em>
                                        </p>

                                        <p> <span>Overview :</span>Streamline your revision process with our
                                            Super Revision Batch, designed to maximize efficiency and effectiveness.
                                            The
                                            Test and Discussion phase covers all 19 subjects through rigorous
                                            testing
                                            followed by insightful discussions to deepen understanding. The Rapid
                                            Revision Classes phase focuses on rapid revision sessions for the 10
                                            major
                                            subjects, ensuring thorough coverage and retention..</p>


                                    </div>
                                    <div className={styles.content_row}>
                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M35.1285 9.34723L38.6441 5.83161C40.1696 4.30613 42.6429 4.30613 44.1684 5.83161C45.6939 7.3571 45.6939 9.8304 44.1684 11.3559L22.0462 33.4781C20.9448 34.5795 19.5863 35.3891 18.0935 35.8338L12.5 37.5L14.1662 31.9065C14.6109 30.4137 15.4205 29.0552 16.5219 27.9538L35.1285 9.34723ZM35.1285 9.34723L40.625 14.8437M37.5 29.1667V39.0625C37.5 41.6513 35.4013 43.75 32.8125 43.75H10.9375C8.34866 43.75 6.25 41.6513 6.25 39.0625V17.1875C6.25 14.5986 8.34867 12.5 10.9375 12.5H20.8333"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>60 Days Revision</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>19 Subjects</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                                                    stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Intense Test Prep</p>
                                        </div>
                                    </div>
                                    <NavLink to="#"><button type="submit">Contact <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0252 4.02436C11.3181 3.73146 11.793 3.73146 12.0859 4.02436L17.5303 9.4688C17.671 9.60945 17.75 9.80022 17.75 9.99913C17.75 10.198 17.671 10.3888 17.5303 10.5295L12.0859 15.9739C11.793 16.2668 11.3181 16.2668 11.0252 15.9739C10.7323 15.681 10.7323 15.2061 11.0252 14.9132L15.1893 10.7491L3 10.7491C2.58579 10.7491 2.25 10.4133 2.25 9.99913C2.25 9.58492 2.58579 9.24913 3 9.24913L15.1893 9.24913L11.0252 5.08502C10.7323 4.79212 10.7323 4.31725 11.0252 4.02436Z"
                                            fill="white" />
                                    </svg></button></NavLink>
                                </div>


                            </div>

                            <div className="col-lg-5">
                                <img src={courseImg3} alt=""/>

                            </div>
                        </div>
                    </div>


                    <div id="abhyas" className={styles.batch_card}>
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={courseImg} alt=""/>
                            </div>
                            <div className="col-lg-7">
                                <div className={styles.content}>
                                    <h1><span>Test Series - </span>Abhyas</h1>
                                    <div className={styles.overview}>
                                        <p><span>
                                            Questions :
                                        </span>
                                            7000+ Questions</p>

                                        <p><span>
                                            Features :
                                        </span>
                                            Topic-wise practice questions, image-based questions, MCQs, previously asked
                                            questions, one-liners
                                        </p>

                                        <p> <span>Overview :</span>Sharpen your skills with our Test Series
                                            - Abhyas, offering a vast repository of over 7000+ questions. Access
                                            topic-wise practice questions, including image-based questions, MCQs,
                                            previously asked questions, and one-liners. Designed to mirror the final
                                            exam, our test series helps students familiarize themselves with the exam
                                            format and enhance their exam-taking abilities.</p>


                                    </div>
                                    <div className={styles.content_row}>
                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M25 15.624H28.125M25 21.874H28.125M12.5 28.124H28.125M12.5 34.374H28.125M34.375 15.624H41.4062C42.7007 15.624 43.75 16.6734 43.75 17.9678V37.499C43.75 40.0879 41.6513 42.1865 39.0625 42.1865M34.375 15.624V37.499C34.375 40.0879 36.4737 42.1865 39.0625 42.1865M34.375 15.624V10.1553C34.375 8.86086 33.3257 7.81152 32.0312 7.81152H8.59375C7.29933 7.81152 6.25 8.86086 6.25 10.1553V37.499C6.25 40.0879 8.34867 42.1865 10.9375 42.1865H39.0625M12.5 15.624H18.75V21.874H12.5V15.624Z"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>7000 +Questions </p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>19 Subjects</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                                                    stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Intense Test Prep</p>
                                        </div>
                                    </div>
                                    <NavLink to="#"><button type="submit">Contact <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0252 4.02436C11.3181 3.73146 11.793 3.73146 12.0859 4.02436L17.5303 9.4688C17.671 9.60945 17.75 9.80022 17.75 9.99913C17.75 10.198 17.671 10.3888 17.5303 10.5295L12.0859 15.9739C11.793 16.2668 11.3181 16.2668 11.0252 15.9739C10.7323 15.681 10.7323 15.2061 11.0252 14.9132L15.1893 10.7491L3 10.7491C2.58579 10.7491 2.25 10.4133 2.25 9.99913C2.25 9.58492 2.58579 9.24913 3 9.24913L15.1893 9.24913L11.0252 5.08502C10.7323 4.79212 10.7323 4.31725 11.0252 4.02436Z"
                                            fill="white" />
                                    </svg></button></NavLink>
                                </div>


                            </div>


                        </div>
                    </div>

                    <div id="foundation" className={styles.batch_card}>
                        <div className={`row ${styles.five}`}>
                            <div className="col-lg-7">
                                <div className={styles.content}>
                                    <h1><span>Foundation FMGE</span> Batch</h1>
                                    <div className={styles.overview}>
                                        <p><span>
                                            Audience :
                                        </span>
                                            University Students</p>

                                        <p><span>
                                            Focus :
                                        </span>
                                            Early FMGE preparation
                                        </p>

                                        <p><span>
                                            Subjects Covered :
                                        </span>
                                            All 19 subjects</p>

                                        <p> <span>Overview :</span>Start your FMGE preparation early with our
                                            Foundation Batch, designed specifically for university students. Begin your
                                            preparation while still in university, ensuring a seamless transition to
                                            exam preparation. Benefit from comprehensive classes tailored to university
                                            schedules, providing you with the necessary foundation for success. </p>


                                    </div>

                                    <div className={styles.content_row}>
                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M10.1125 20.2976C9.58854 24.3057 9.27026 28.3786 9.16859 32.5052C14.7383 34.8306 20.0358 37.6779 24.9999 40.986C29.964 37.6779 35.2615 34.8306 40.8312 32.5052C40.7296 28.3786 40.4113 24.3058 39.8873 20.2977M10.1125 20.2976C8.42831 19.7315 6.72367 19.2098 5 18.7341C11.2417 14.359 17.9365 10.5862 25 7.5C32.0635 10.5862 38.7582 14.359 45 18.7341C43.2763 19.2099 41.5716 19.7315 39.8873 20.2977M10.1125 20.2976C15.2808 22.0348 20.2567 24.1907 25 26.7251C29.7432 24.1908 34.7191 22.0348 39.8873 20.2977M14.9028 29.6319C15.6994 29.6319 16.3452 28.9861 16.3452 28.1894C16.3452 27.3928 15.6994 26.747 14.9028 26.747C14.1061 26.747 13.4603 27.3928 13.4603 28.1894C13.4603 28.9861 14.1061 29.6319 14.9028 29.6319ZM14.9028 29.6319V22.5629C18.1559 20.5415 21.5258 18.6903 24.9999 17.0216M11.5229 39.234C13.7761 36.9808 14.9028 34.0276 14.9028 31.0743V28.1894"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>University Students</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>19 Subjects</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                                                    stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Intense Test Prep</p>
                                        </div>
                                    </div>
                                    <NavLink to="#"><button type="submit">Contact <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0252 4.02436C11.3181 3.73146 11.793 3.73146 12.0859 4.02436L17.5303 9.4688C17.671 9.60945 17.75 9.80022 17.75 9.99913C17.75 10.198 17.671 10.3888 17.5303 10.5295L12.0859 15.9739C11.793 16.2668 11.3181 16.2668 11.0252 15.9739C10.7323 15.681 10.7323 15.2061 11.0252 14.9132L15.1893 10.7491L3 10.7491C2.58579 10.7491 2.25 10.4133 2.25 9.99913C2.25 9.58492 2.58579 9.24913 3 9.24913L15.1893 9.24913L11.0252 5.08502C10.7323 4.79212 10.7323 4.31725 11.0252 4.02436Z"
                                            fill="white" />
                                    </svg></button></NavLink>
                                </div>


                            </div>

                            <div className="col-lg-5">
                                <img src={courseImg5} alt=""/>

                            </div>
                        </div>
                    </div>

                    <div id="in_university" className={styles.batch_card}>
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={courseImg6} alt=""/>
                            </div>
                            <div className="col-lg-7">
                                <div className={styles.content}>
                                    <h1><span>In-University</span> Class</h1>
                                    <div className={styles.overview}>
                                        <p><span>
                                            Locations :
                                        </span>
                                            Multiple countries ( Kyrgyzstan, Georgia, Philippines, Russia, Ukraine,
                                            China, Armenia, Kazakhstan, Uzbekistan, and more )</p>

                                        <p><span>
                                            Partnerships :
                                        </span>
                                            Collaboration with universities
                                        </p>



                                        <p> <span>Overview :</span>In partnership with universities
                                            worldwide, Arise Medical Academy offers in-university classes across various
                                            locations. Hosted in collaboration with universities in countries such as
                                            Kyrgyzstan, Georgia, Philippines, Russia, Ukraine, China, Armenia,
                                            Kazakhstan, Uzbekistan, and more, these classes provide students with
                                            convenient access to high-quality education, ensuring a supportive learning
                                            environment throughout their academic journey. </p>


                                    </div>
                                    <div className={styles.content_row}>
                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M7.60681 23.0556H11.3889C13.5367 23.0556 15.2778 24.7967 15.2778 26.9444V28.8889C15.2778 31.0367 17.0189 32.7778 19.1667 32.7778C21.3144 32.7778 23.0556 34.5189 23.0556 36.6667V42.3932M17.2222 9.31907V12.3611C17.2222 15.0458 19.3986 17.2222 22.0833 17.2222H23.0556C25.2033 17.2222 26.9444 18.9633 26.9444 21.1111C26.9444 23.2589 28.6856 25 30.8333 25C32.9811 25 34.7222 23.2589 34.7222 21.1111C34.7222 18.9633 36.4633 17.2222 38.6111 17.2222L40.6809 17.2222M30.8333 41.5042V36.6667C30.8333 34.5189 32.5744 32.7778 34.7222 32.7778H40.6809M42.5 25C42.5 34.665 34.665 42.5 25 42.5C15.335 42.5 7.5 34.665 7.5 25C7.5 15.335 15.335 7.5 25 7.5C34.665 7.5 42.5 15.335 42.5 25Z"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Multiple Countries</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M31.25 39.8498C32.9853 40.3549 34.8203 40.6257 36.7186 40.6257C39.7994 40.6257 42.7136 39.9125 45.305 38.642C45.3099 38.5226 45.3124 38.4026 45.3124 38.282C45.3124 33.5358 41.4648 29.6882 36.7186 29.6882C33.7644 29.6882 31.1584 31.1789 29.6116 33.4491M31.25 39.8498V39.8445C31.25 37.5259 30.6559 35.3462 29.6116 33.4491M31.25 39.8498C31.25 39.9241 31.2493 39.9982 31.2481 40.0722C27.3695 42.4075 22.826 43.7507 17.9687 43.7507C13.1115 43.7507 8.568 42.4075 4.68942 40.0722C4.68814 39.9965 4.6875 39.9205 4.6875 39.8445C4.6875 32.5095 10.6337 26.5632 17.9687 26.5632C22.9852 26.5632 27.3521 29.3445 29.6116 33.4491M25 13.282C25 17.1652 21.852 20.3132 17.9687 20.3132C14.0855 20.3132 10.9375 17.1652 10.9375 13.282C10.9375 9.39873 14.0855 6.25073 17.9687 6.25073C21.852 6.25073 25 9.39873 25 13.282ZM42.1875 17.9695C42.1875 20.9898 39.7391 23.4382 36.7187 23.4382C33.6984 23.4382 31.25 20.9898 31.25 17.9695C31.25 14.9492 33.6984 12.5007 36.7187 12.5007C39.7391 12.5007 42.1875 14.9492 42.1875 17.9695Z"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Collaboration with Universities</p>
                                        </div>

                                        <div className={styles.content_icon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M32.8121 12.5C32.8121 16.8147 29.3143 20.3125 24.9996 20.3125C20.6849 20.3125 17.1871 16.8147 17.1871 12.5C17.1871 8.18528 20.6849 4.6875 24.9996 4.6875C29.3143 4.6875 32.8121 8.18528 32.8121 12.5Z"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M9.37695 41.913C9.52342 33.4102 16.4618 26.5625 24.9996 26.5625C33.5376 26.5625 40.4761 33.4105 40.6222 41.9136C35.8664 44.0959 30.5754 45.3125 25.0003 45.3125C19.4246 45.3125 14.1331 44.0956 9.37695 41.913Z"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Top Faculty Classes</p>
                                        </div>
                                    </div>
                                    <NavLink to="#"><button type="submit">Contact <svg xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.0252 4.02436C11.3181 3.73146 11.793 3.73146 12.0859 4.02436L17.5303 9.4688C17.671 9.60945 17.75 9.80022 17.75 9.99913C17.75 10.198 17.671 10.3888 17.5303 10.5295L12.0859 15.9739C11.793 16.2668 11.3181 16.2668 11.0252 15.9739C10.7323 15.681 10.7323 15.2061 11.0252 14.9132L15.1893 10.7491L3 10.7491C2.58579 10.7491 2.25 10.4133 2.25 9.99913C2.25 9.58492 2.58579 9.24913 3 9.24913L15.1893 9.24913L11.0252 5.08502C10.7323 4.79212 10.7323 4.31725 11.0252 4.02436Z"
                                            fill="white" />
                                    </svg></button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <form action="">
                        <div className={styles.contact_form}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={contactImg} alt=""/>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.form}>
                                        <h5>Get In Touch</h5>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput"
                                                        placeholder="Full Name"/>
                                                        <label for="floatingInput"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M9.99905 3.125C8.68738 3.125 7.62405 4.18832 7.62405 5.5C7.62405 6.81168 8.68738 7.875 9.99905 7.875C11.3107 7.875 12.3741 6.81168 12.3741 5.5C12.3741 4.18832 11.3107 3.125 9.99905 3.125ZM6.12406 5.5C6.12406 3.3599 7.85895 1.625 9.99905 1.625C12.1392 1.625 13.8741 3.3599 13.8741 5.5C13.8741 7.6401 12.1392 9.375 9.99905 9.375C7.85895 9.375 6.12406 7.6401 6.12406 5.5ZM4.53001 16.7879C6.21326 17.4881 8.06025 17.875 9.99932 17.875C11.9382 17.875 13.785 17.4882 15.4681 16.7881C15.1753 14.0266 12.8384 11.875 9.99905 11.875C7.15983 11.875 4.82297 14.0265 4.53001 16.7879ZM3.00011 17.2523C3.06573 13.4428 6.17406 10.375 9.99905 10.375C13.8241 10.375 16.9325 13.4429 16.998 17.2526C17.0031 17.5503 16.8316 17.8229 16.5609 17.9471C14.5624 18.8641 12.3395 19.375 9.99932 19.375C7.65892 19.375 5.43581 18.864 3.43719 17.9469C3.16652 17.8226 2.99498 17.5501 3.00011 17.2523Z"
                                                                fill="#2540AE" />
                                                        </svg> Full Name</label>
                                                </div>

                                            </div>
                                            <div className="col-lg-6">

                                                <div className="form-floating mb-3">
                                                    <select className="form-select" id="floatingSelect"
                                                        aria-label="Floating label select example">
                                                      
                                                        <option value="1">Regular Batch</option>
                                                        <option value="2">Semi-Regular Batch</option>
                                                        <option value="3">Super-Revision Batch</option>
                                                        <option value="3">Test Series - Abhyas</option>
                                                        <option value="3">Foundation Batch</option>
                                                        <option value="3">In-University Classes</option>
                                                    </select>
                                                    <label for="floatingSelect"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M2.75 4.47887V14.8111C3.31449 14.6892 3.90007 14.625 4.5 14.625C6.0541 14.625 7.50867 15.0552 8.75 15.8026V5.75563C7.58934 4.81371 6.11128 4.25 4.5 4.25C3.89395 4.25 3.30747 4.32969 2.75 4.47887ZM10.25 5.75563V15.8026C11.4913 15.0552 12.9459 14.625 14.5 14.625C15.0999 14.625 15.6855 14.6892 16.25 14.8111V4.47887C15.6925 4.32969 15.106 4.25 14.5 4.25C12.8887 4.25 11.4107 4.81371 10.25 5.75563ZM9.5 4.43731C8.1129 3.37908 6.37921 2.75 4.5 2.75C3.53709 2.75 2.61117 2.91528 1.75007 3.21963C1.45037 3.32556 1.25 3.6089 1.25 3.92676V15.8018C1.25 16.0452 1.36818 16.2735 1.56696 16.4141C1.76574 16.5547 2.02039 16.59 2.24993 16.5089C2.95272 16.2605 3.70973 16.125 4.5 16.125C6.22928 16.125 7.80511 16.7743 8.99981 17.8436C9.28457 18.0985 9.71543 18.0985 10.0002 17.8436C11.1949 16.7743 12.7707 16.125 14.5 16.125C15.2903 16.125 16.0473 16.2605 16.7501 16.5089C16.9796 16.59 17.2343 16.5547 17.433 16.4141C17.6318 16.2735 17.75 16.0452 17.75 15.8018V3.92676C17.75 3.6089 17.5496 3.32556 17.2499 3.21963C16.3888 2.91528 15.4629 2.75 14.5 2.75C12.6208 2.75 10.8871 3.37908 9.5 4.43731Z"
                                                            fill="#2540AE" />
                                                    </svg> Course</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput"
                                                        placeholder="name@example.com"/>
                                                        <label for="floatingInput"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M1.125 6.125C1.125 4.67525 2.30025 3.5 3.75 3.5H16.25C17.6997 3.5 18.875 4.67525 18.875 6.125V14.875C18.875 16.3247 17.6997 17.5 16.25 17.5H3.75C2.30025 17.5 1.125 16.3247 1.125 14.875V6.125ZM2.625 6.125V6.32726C2.625 6.71793 2.82767 7.08063 3.16039 7.28537L9.41039 11.1315C9.77197 11.354 10.228 11.354 10.5896 11.1315L16.8396 7.28537C17.1723 7.08063 17.375 6.71793 17.375 6.32726V6.125C17.375 5.50368 16.8713 5 16.25 5H3.75C3.12868 5 2.625 5.50368 2.625 6.125ZM17.375 8.71717L11.3758 12.409C10.5321 12.9282 9.46794 12.9282 8.62424 12.409L2.625 8.71717V14.875C2.625 15.4963 3.12868 16 3.75 16H16.25C16.8713 16 17.375 15.4963 17.375 14.875V8.71717Z"
                                                                fill="#2540AE" />
                                                        </svg> Email</label>
                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-floating mb-3">
                                                    <input type="number" className="form-control" id="floatingPassword"
                                                        placeholder="Password"/>
                                                        <label for="floatingPassword"><svg xmlns="http://www.w3.org/2000/svg"
                                                            width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M1.125 4.25C1.125 2.80025 2.30025 1.625 3.75 1.625H4.89302C5.66736 1.625 6.34233 2.152 6.53014 2.90322L7.45163 6.58921C7.6163 7.24789 7.37018 7.94111 6.82702 8.34849L5.749 9.157C5.67724 9.21082 5.67571 9.27718 5.68654 9.30674C6.62015 11.8554 8.64462 13.8798 11.1933 14.8135C11.2228 14.8243 11.2892 14.8228 11.343 14.751L12.1515 13.673C12.5589 13.1298 13.2521 12.8837 13.9108 13.0484L17.5968 13.9699C18.348 14.1577 18.875 14.8326 18.875 15.607V16.75C18.875 18.1997 17.6997 19.375 16.25 19.375H14.375C7.05723 19.375 1.125 13.4428 1.125 6.125V4.25ZM3.75 3.125C3.12868 3.125 2.625 3.62868 2.625 4.25V6.125C2.625 12.6143 7.88565 17.875 14.375 17.875H16.25C16.8713 17.875 17.375 17.3713 17.375 16.75V15.607C17.375 15.5209 17.3164 15.4459 17.233 15.4251L13.547 14.5036C13.4738 14.4853 13.3968 14.5126 13.3515 14.573L12.543 15.651C12.1275 16.205 11.3822 16.4801 10.6773 16.2219L10.8775 15.6755L10.6773 16.2219C7.71437 15.1366 5.36344 12.7856 4.27807 9.82269C4.01985 9.11781 4.29502 8.37248 4.849 7.957L5.92702 7.14849C5.98737 7.10322 6.01472 7.0262 5.99642 6.95301L5.07492 3.26702C5.05406 3.18356 4.97906 3.125 4.89302 3.125H3.75Z"
                                                                fill="#2540AE" />
                                                        </svg> Phone No</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here"
                                                id="floatingTextarea2" style={{height:"100px"}}></textarea>
                                            <label for="floatingTextarea2"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10 4.375C6.20931 4.375 3.25 7.17735 3.25 10.5C3.25 12.1039 3.92986 13.5728 5.06216 14.675C5.44225 15.045 5.80724 15.6573 5.66391 16.3799C5.60535 16.6751 5.51798 16.9598 5.40489 17.231C6.15825 17.1599 6.8532 16.8925 7.43983 16.4804C7.62215 16.3523 7.85199 16.3119 8.06707 16.3701C8.6783 16.5357 9.32693 16.625 10 16.625C13.7907 16.625 16.75 13.8226 16.75 10.5C16.75 7.17735 13.7907 4.375 10 4.375ZM4.43529 18.7226C4.28232 18.7077 4.13067 18.6867 3.98102 18.6599C3.71697 18.6127 3.49827 18.428 3.40745 18.1756C3.31663 17.9232 3.36753 17.6415 3.54093 17.4368C3.86365 17.0559 4.09208 16.5947 4.19257 16.0881C4.19714 16.065 4.1979 16.0282 4.17328 15.9687C4.14701 15.9052 4.09564 15.8275 4.0159 15.7499C2.61965 14.3908 1.75 12.5438 1.75 10.5C1.75 6.22873 5.50641 2.875 10 2.875C14.4936 2.875 18.25 6.22873 18.25 10.5C18.25 14.7713 14.4936 18.125 10 18.125C9.31415 18.125 8.6468 18.0476 8.00803 17.9012C7.1326 18.4395 6.10165 18.75 5 18.75C4.80967 18.75 4.6212 18.7407 4.43529 18.7226ZM7.1875 10.8062C7.26482 10.7273 7.3125 10.6192 7.3125 10.5C7.3125 10.3808 7.26482 10.2727 7.1875 10.1938V10.8062ZM5.8125 10.5C5.8125 9.9132 6.2882 9.4375 6.875 9.4375C7.4618 9.4375 7.9375 9.9132 7.9375 10.5C7.9375 11.0868 7.4618 11.5625 6.875 11.5625C6.2882 11.5625 5.8125 11.0868 5.8125 10.5ZM10.3125 10.8062C10.3898 10.7273 10.4375 10.6192 10.4375 10.5C10.4375 10.3808 10.3898 10.2727 10.3125 10.1938V10.8062ZM8.9375 10.5C8.9375 9.9132 9.4132 9.4375 10 9.4375C10.5868 9.4375 11.0625 9.9132 11.0625 10.5C11.0625 11.0868 10.5868 11.5625 10 11.5625C9.4132 11.5625 8.9375 11.0868 8.9375 10.5ZM13.4375 10.8062C13.5148 10.7273 13.5625 10.6192 13.5625 10.5C13.5625 10.3808 13.5148 10.2727 13.4375 10.1938V10.8062ZM12.0625 10.5C12.0625 9.9132 12.5382 9.4375 13.125 9.4375C13.7118 9.4375 14.1875 9.9132 14.1875 10.5C14.1875 11.0868 13.7118 11.5625 13.125 11.5625C12.5382 11.5625 12.0625 11.0868 12.0625 10.5Z"
                                                    fill="#2540AE" />
                                            </svg> Write Your Message</label>
                                        </div>

                                        <NavLink to="#"><button type="submit">Submit</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
           
        </main>
    )
}

export default Courses