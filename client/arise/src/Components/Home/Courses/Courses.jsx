import React from 'react';
import styles from '../Courses/Courses.module.scss';
import service1a from '../../../assets/images/batches/service-1a.jpg';
import service3a from '../../../assets/images/batches/service-3a.jpeg';
import service5a from '../../../assets/images/batches/service-5a.jpeg';
import service2a from '../../../assets/images/batches/service-2a.jpg';
import service4a from '../../../assets/images/batches/service-4a.jpg';
import service6a from '../../../assets/images/batches/service-6a.jpeg';



const Courses = () => {
    const leftCourses = [
        {
            id: "regular",
            title: "Regular Batch",
            description:
                "Embark on a comprehensive journey towards FMGE/MCI exam success with our Regular Batch, spanning three phases over six months.",
            img: service1a,
        },
        {
            id: "super_revision",
            title: "Super Revision Batch",
            description:
                "Streamline your revision process with our Super Revision Batch, designed to maximize efficiency and effectiveness.",
            img: service3a,
        },
        {
            id: "foundation",
            title: "Foundation FMGE Batch",
            description:
                "Start your FMGE preparation early with our Foundation Batch, designed specifically for university students.",
            img: service5a,
        },
    ];

    const rightCourses = [
        {
            id: "semi_regular",
            title: "Semi-Regular Batch",
            description:
                "Ideal for those with limited time, our Semi-Regular Batch spans three months and covers 10 major subjects.",
            img: service2a,
        },
        {
            id: "abhyas",
            title: "Test Series - Abhyas",
            description:
                "Sharpen your skills with our Test Series - Abhyas, offering a vast repository of over 7000+ questions.",
            img: service4a,
        },
        {
            id: "in_university",
            title: "In-University Classes",
            description:
                "In partnership with universities worldwide, Arise Medical Academy offers in-university classes across various locations.",
            img: service6a,
        },
    ];

    return (
        <section className={styles.courses}>
            <div className="container">
                <div className="row">
                    <div className={styles.sec_title}>
                        <h2>Our Courses</h2>
                        <h1>
                            <span>Courses</span> We Provide
                        </h1>
                    </div>
                </div>

                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-6 col-md-6">
                        {leftCourses.map((course, index) => (
                            <div
                                key={index}
                                className={index === 0 ? styles.batch_lft : styles.batch_rgt}
                            >
                                {index === 0 ? (
                                    <div className={styles.pic}>
                                        <img src={course.img} alt={course.title} />
                                    </div>
                                ) : (
                                    <img src={course.img} alt={course.title} />
                                )}
                                <div className={styles.content}>
                                    <h5>{course.title}</h5>
                                    <p>{course.description}</p>
                                    <a href={course.link}>
                                        <button>
                                            Know More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.5252 4.02533C11.8181 3.73244 12.293 3.73244 12.5859 4.02533L18.0303 9.46978C18.171 9.61043 18.25 9.8012 18.25 10.0001C18.25 10.199 18.171 10.3898 18.0303 10.5304L12.5859 15.9749C12.293 16.2678 11.8181 16.2678 11.5252 15.9749C11.2323 15.682 11.2323 15.2071 11.5252 14.9142L15.6893 10.7501L3.5 10.7501C3.08579 10.7501 2.75 10.4143 2.75 10.0001C2.75 9.58589 3.08579 9.25011 3.5 9.25011L15.6893 9.25011L11.5252 5.08599C11.2323 4.7931 11.2323 4.31823 11.5252 4.02533Z"
                                                    fill="#2540AE"
                                                />
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6 col-md-6">
                        {rightCourses.map((course, index) => (
                            <div
                                key={index}
                                className={index === 2 ? styles.batch_lft : styles.batch_rgt}
                            >
                                {index === 2 ? (
                                    <div className={styles.pic}>
                                        <img src={course.img} alt={course.title} />
                                    </div>
                                ) : (
                                    <img src={course.img} alt={course.title} />
                                )}
                                <div className={styles.content}>
                                    <h5>{course.title}</h5>
                                    <p>{course.description}</p>
                                    <a href={course.link}>
                                        <button>
                                            Know More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11.5252 4.02533C11.8181 3.73244 12.293 3.73244 12.5859 4.02533L18.0303 9.46978C18.171 9.61043 18.25 9.8012 18.25 10.0001C18.25 10.199 18.171 10.3898 18.0303 10.5304L12.5859 15.9749C12.293 16.2678 11.8181 16.2678 11.5252 15.9749C11.2323 15.682 11.2323 15.2071 11.5252 14.9142L15.6893 10.7501L3.5 10.7501C3.08579 10.7501 2.75 10.4143 2.75 10.0001C2.75 9.58589 3.08579 9.25011 3.5 9.25011L15.6893 9.25011L11.5252 5.08599C11.2323 4.7931 11.2323 4.31823 11.5252 4.02533Z"
                                                    fill="#2540AE"
                                                />
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
