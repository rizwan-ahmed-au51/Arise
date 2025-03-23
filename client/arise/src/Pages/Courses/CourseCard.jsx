import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../Courses/Course.module.scss";

const CourseCard = ({ course }) => {
    return (
        <div id={course.id} className={styles.batch_card}>
            <div className={`row ${styles.one}`}>
                <div className="col-lg-7">
                    <div className={styles.content}>
                        <h1><span>{course.name}</span></h1>
                        <div className={styles.overview}>
                            <p><span>Duration :</span> {course.duration}</p>
                            <p><span>Phases :</span> {course.phases}</p>
                            <p><span>Subjects Covered :</span> {course.subjects}</p>
                            <p><span>Overview :</span> {course.overview}</p>
                        </div>
                        <div className={styles.content_row}>
                            {course.features.map((feature, index) => (
                                <div key={index} className={styles.content_icon}>
                                    {feature.icon}
                                    <p>{feature.text}</p>
                                </div>
                            ))}
                        </div>
                        <NavLink to='/contact'>
                            <button type="submit">
                                Contact <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0252 4.02436C11.3181 3.73146 11.793 3.73146 12.0859 4.02436L17.5303 9.4688C17.671 9.60945 17.75 9.80022 17.75 9.99913C17.75 10.198 17.671 10.3888 17.5303 10.5295L12.0859 15.9739C11.793 16.2668 11.3181 16.2668 11.0252 15.9739C10.7323 15.681 10.7323 15.2061 11.0252 14.9132L15.1893 10.7491L3 10.7491C2.58579 10.7491 2.25 10.4133 2.25 9.99913C2.25 9.58492 2.58579 9.24913 3 9.24913L15.1893 9.24913L11.0252 5.08502C10.7323 4.79212 10.7323 4.31725 11.0252 4.02436Z" fill="white" />
                                </svg>
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src={course.image} alt={course.name} />
                </div>
            </div>
        </div>
    );
};

export default CourseCard;