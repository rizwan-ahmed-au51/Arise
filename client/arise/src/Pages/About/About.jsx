import React from 'react';
import styles from '../About/About.module.scss';
import founder from '../../assets/images/about-page/founder1.png';
import banner from '../../assets/images/about-page/03.jpg';
import WhyChoose from './WhyChoose';


const facultyList = [
    {
        subject: "Anatomy",
        faculty: "Dr. Azam"
    },
    {
        subject: "Anesthesia",
        faculty: "Dr. Krishna Chaitanya"
    },
    {
        subject: "Biochemistry",
        faculty: "Dr. Azam"
    },
    {
        subject: "Dermatology",
        faculty: "Dr. Jazeer"
    },
    {
        subject: "ENT",
        faculty: "Dr. Rajiv Dhawan"
    },
    {
        subject: "Forensic Medicine",
        faculty: "Dr. Magendran J & Dr. Nadeem"
    },
    {
        subject: "Obstetrics & Gynaecology",
        faculty: "Dr. Prassan Vji & Dr. Gayathri"
    },
    {
        subject: "Medicine",
        faculty: "Dr. Priyansh Jain & Dr. Rahul Rajeev"
    },
    {
        subject: "Microbiology",
        faculty: "Dr. Salman"
    },
    {
        subject: "Ophthalmology",
        faculty: "Dr. Sudha"
    },
    {
        subject: "Orthopedics",
        faculty: "Dr. Abbas & Dr. Rohit Daniel"
    },
    {
        subject: "Pathology",
        faculty: "Dr. Devesh Mishra & Dr. Sara"
    },
    {
        subject: "Pharmacology",
        faculty: "Dr. Salman"
    },
    {
        subject: "Psychiatry",
        faculty: "Dr. Nadeem"
    },
    {
        subject: "Physiology",
        faculty: "Dr. SreeTeja"
    },
    {
        subject: "Pediatrics",
        faculty: "Dr. Singaram & Dr. Sandeep Sharma"
    },
    {
        subject: "Radiology",
        faculty: "Dr. Khaleel Ahmed"
    },
    {
        subject: "Surgery",
        faculty: "Dr. Pritesh Singh, Dr. Raja Mahendran & Dr. Sandeep Seeramreddy"
    }
];
const About = () => {
    return (
        <>
            <img width={"100%"} src={banner} alt="" />
            <section className={styles.founder}>
                <div className="container">
                    <div className={styles.founder_content}>
                        <div className="row">
                            <div className="col-xl-8 col-lg-6">
                                <h1>Our <span>Founder</span></h1>
                                <p style={{ textAlign: 'justify' }}>Dr. Khaleel, the founder of Arise Medical Academy, has a
                                    lifelong passion for teaching. A
                                    graduate of Gandhi Medical College and an MD in Radiology, Dr. Khaleel has taught over
                                    30,000+ students for various medical exams including NEET UG, NEET PG, FMGE, and
                                    USMLE. Renowned for simplifying complex subjects, Dr. Khaleel has mastered teaching 19
                                    subjects, often handling multiple subjects simultaneously. His leadership and dedication
                                    have been pivotal in shaping Arise Medical Academy into a premier institution for
                                    medical
                                    education.</p>

                                <h1>Our <span>Origin</span></h1>
                                <p style={{ textAlign: 'justify' }}>Founded in 2010, Arise Medical Academy stands as India's
                                    premier medical academy with a
                                    vision to revolutionize medical education. Initially, we offered MBBS classes for Indian
                                    medical graduates and quickly expanded to support students from foreign medical
                                    universities. These early efforts allowed us to understand and address the unique needs
                                    of
                                    students returning to India to pursue their medical careers.
                                    <br />
                                    <br />
                                    In 2014, we launched our first FMGE (Foreign Medical Graduate Examination) batch with 15
                                    students, achieving a 100% pass rate. This success underscored our effective teaching
                                    methods and the dedication of our faculty. Since then, each batch has consistently seen
                                    over
                                    100 successful students, solidifying Arise Medical Academy's reputation as a leader in
                                    FMGE
                                    preparation.
                                </p>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <img src={founder} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.vision_mission}>
                        <div className={styles.row}>

                            <div className="row">
                                <div className="col-xl-5 col-lg-5">
                                    <WhyChoose />
                                </div>
                                <div className="col-xl-7 col-lg-7">
                                    <div className={styles.vision}>
                                        <h1>Our <span>Vision</span></h1>
                                        <p>At Arise Medical Academy, our vision is to empower future medical professionals
                                            by
                                            providing
                                            top-quality education and comprehensive support. We strive to create a nurturing
                                            environment
                                            that fosters both academic and personal growth, utilizing innovative teaching
                                            methods
                                            and
                                            global standards. Our goal is to build a strong community that encourages
                                            continuous
                                            learning and excellence in healthcare. Join us on this transformative journey
                                            towards
                                            success and professional achievement.</p>
                                    </div>

                                    <div className={styles.values}>
                                        <h1>Our <span>Values</span></h1>

                                        <div className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 20 20"
                                                fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM12.8637 7.91411C13.1566 8.20701 13.1566 8.68188 12.8637 8.97477L9.75255 12.0859C9.45966 12.3788 8.98479 12.3788 8.69189 12.0859L7.13634 10.5303C6.84344 10.2374 6.84344 9.76256 7.13634 9.46967C7.42923 9.17678 7.9041 9.17678 8.197 9.46967L9.22222 10.4949L11.803 7.91411C12.0959 7.62122 12.5708 7.62122 12.8637 7.91411Z"
                                                    fill="#2540AE" />
                                            </svg>
                                            <p>Student-Centered Approach: We prioritize understanding and addressing student
                                                needs to create a supportive learning environment.</p>
                                        </div>

                                        <div className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 20 20"
                                                fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM12.8637 7.91411C13.1566 8.20701 13.1566 8.68188 12.8637 8.97477L9.75255 12.0859C9.45966 12.3788 8.98479 12.3788 8.69189 12.0859L7.13634 10.5303C6.84344 10.2374 6.84344 9.76256 7.13634 9.46967C7.42923 9.17678 7.9041 9.17678 8.197 9.46967L9.22222 10.4949L11.803 7.91411C12.0959 7.62122 12.5708 7.62122 12.8637 7.91411Z"
                                                    fill="#2540AE" />
                                            </svg>
                                            <p>Quality Education: We are committed to providing the highest quality FMGE
                                                coaching
                                                through expert faculty, comprehensive study materials, and innovative
                                                teaching
                                                methods.
                                            </p>
                                        </div>

                                        <div className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 20 20"
                                                fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM12.8637 7.91411C13.1566 8.20701 13.1566 8.68188 12.8637 8.97477L9.75255 12.0859C9.45966 12.3788 8.98479 12.3788 8.69189 12.0859L7.13634 10.5303C6.84344 10.2374 6.84344 9.76256 7.13634 9.46967C7.42923 9.17678 7.9041 9.17678 8.197 9.46967L9.22222 10.4949L11.803 7.91411C12.0959 7.62122 12.5708 7.62122 12.8637 7.91411Z"
                                                    fill="#2540AE" />
                                            </svg>
                                            <p>Compassion & Professionalism: We believe doctors should be not only
                                                knowledgeable
                                                but also compassionate and professional. Our approach fosters these
                                                qualities within
                                                our
                                                students.</p>
                                        </div>

                                        <div className="d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 20 20"
                                                fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10ZM12.8637 7.91411C13.1566 8.20701 13.1566 8.68188 12.8637 8.97477L9.75255 12.0859C9.45966 12.3788 8.98479 12.3788 8.69189 12.0859L7.13634 10.5303C6.84344 10.2374 6.84344 9.76256 7.13634 9.46967C7.42923 9.17678 7.9041 9.17678 8.197 9.46967L9.22222 10.4949L11.803 7.91411C12.0959 7.62122 12.5708 7.62122 12.8637 7.91411Z"
                                                    fill="#2540AE" />
                                            </svg>
                                            <p>Social Responsibility: We recognize the importance of advancing the field of
                                                medicine globally. We strive to prepare our students to contribute to a
                                                better
                                                healthcare system.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className={styles.faculty}>
                <div className="container text-center">
                    <div className="row">
                        <div className={styles.sec_title}>
                            <h2>Team</h2>
                            <h1>
                                Our<span> Faculty</span>
                            </h1>
                            <p>At ARISE Medical Academy, our faculty consists of experienced and passionate educators who
                                are leaders in their respective fields. They bring a wealth of knowledge and real-world
                                experience to their teaching, ensuring that FMGE aspirants receive the highest
                                quality education. Through both online and offline modes, our faculty provides comprehensive
                                subject coverage, interactive learning sessions, and exam-focused strategies. Their
                                dedication to student success is reflected in their personalized guidance, regular
                                assessments, and commitment to fostering a supportive learning environment, empowering
                                students to excel in their medical entrance and licensing exams.</p>
                        </div>


                        {[0, 1, 2].map((colIndex) => (
                            <div key={colIndex} className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                {facultyList.slice(colIndex * 6, (colIndex + 1) * 6).map((item, index) => (
                                    <div key={index}>
                                        <h6>{item.subject}</h6>

                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}

export default About