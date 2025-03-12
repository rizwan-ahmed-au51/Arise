import React from 'react';
import styles from '../About/About.module.scss';
import founder from '../../assets/images/about-page/founder1.png';
import banner from '../../assets/images/about-page/banner.png';

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
                                    In 2015, we launched our first FMGE (Foreign Medical Graduate Examination) batch with 15
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
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className={styles.why_choose}>
                                    <h1>Why Choose <span>ARISE </span>?</h1>
                                    <div className={styles.why_choose_box}>
                                        <div className={styles.left_box}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M19.1667 25L23.0556 28.8889L30.8333 21.1111M42.5 25C42.5 34.665 34.665 42.5 25 42.5C15.335 42.5 7.5 34.665 7.5 25C7.5 15.335 15.335 7.5 25 7.5C34.665 7.5 42.5 15.335 42.5 25Z"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Proven success with over 20000+ trained students and a 74% success
                                                rate
                                            </p>
                                        </div>

                                        <div className={styles.left_box}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50"
                                                viewBox="0 0 51 50" fill="none">
                                                <path
                                                    d="M23.9502 12.2743C20.633 9.30534 16.2524 7.5 11.4502 7.5C9.25872 7.5 7.15506 7.87596 5.2002 8.56691V38.2544C7.15506 37.5635 9.25872 37.1875 11.4502 37.1875C16.2524 37.1875 20.633 38.9928 23.9502 41.9618M23.9502 12.2743C27.2674 9.30533 31.648 7.5 36.4502 7.5C38.6417 7.5 40.7453 7.87596 42.7002 8.56691V38.2544C40.7453 37.5635 38.6417 37.1875 36.4502 37.1875C31.648 37.1875 27.2674 38.9928 23.9502 41.9618M23.9502 12.2743V41.9618"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Comprehensive and up-to-date study materials</p>
                                        </div>

                                        <div className={styles.left_box}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M10.1125 20.2976C9.58854 24.3057 9.27026 28.3786 9.16859 32.5052C14.7383 34.8306 20.0358 37.6779 24.9999 40.986C29.964 37.6779 35.2615 34.8306 40.8312 32.5052C40.7296 28.3786 40.4113 24.3058 39.8873 20.2977M10.1125 20.2976C8.42831 19.7315 6.72367 19.2098 5 18.7341C11.2417 14.359 17.9365 10.5862 25 7.5C32.0635 10.5862 38.7582 14.359 45 18.7341C43.2763 19.2099 41.5716 19.7315 39.8873 20.2977M10.1125 20.2976C15.2808 22.0348 20.2567 24.1907 25 26.7251C29.7432 24.1908 34.7191 22.0348 39.8873 20.2977M14.9028 29.6319C15.6994 29.6319 16.3452 28.9861 16.3452 28.1894C16.3452 27.3928 15.6994 26.747 14.9028 26.747C14.1061 26.747 13.4603 27.3928 13.4603 28.1894C13.4603 28.9861 14.1061 29.6319 14.9028 29.6319ZM14.9028 29.6319V22.5629C18.1559 20.5415 21.5258 18.6903 24.9999 17.0216M11.5229 39.234C13.7761 36.9808 14.9028 34.0276 14.9028 31.0743V28.1894"
                                                    stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>Highly experienced and dedicated faculty</p>
                                        </div>

                                        <div className={styles.left_box}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50"
                                                viewBox="0 0 51 50" fill="none">
                                                <path
                                                    d="M4.8877 43.75H45.5127M8.0127 6.25V43.75M29.8877 6.25V43.75M42.3877 15.625V43.75M14.2627 14.0625H15.8252M14.2627 20.3125H15.8252M14.2627 26.5625H15.8252M22.0752 14.0625H23.6377M22.0752 20.3125H23.6377M22.0752 26.5625H23.6377M14.2627 43.75V36.7188C14.2627 35.4243 15.312 34.375 16.6064 34.375H21.2939C22.5884 34.375 23.6377 35.4243 23.6377 36.7188V43.75M6.4502 6.25H31.4502M29.8877 15.625H43.9502M36.1377 23.4375H36.1533V23.4531H36.1377V23.4375ZM36.1377 29.6875H36.1533V29.7031H36.1377V29.6875ZM36.1377 35.9375H36.1533V35.9531H36.1377V35.9375Z"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>State-of-the-art facilities including classrooms, hostel, and reading
                                                room</p>
                                        </div>

                                        <div className={styles.left_box}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                viewBox="0 0 50 50" fill="none">
                                                <path
                                                    d="M43.5268 27.9018L41.1629 25.5379C40.8066 25.1816 40.5101 24.7703 40.2848 24.3196L38.0347 19.8194C37.7716 19.2933 37.0705 19.1795 36.6546 19.5954C36.212 20.038 35.5642 20.2059 34.9624 20.0339L32.3106 19.2762C31.3034 18.9885 30.2582 19.5922 30.0042 20.6083C29.8143 21.3679 30.1224 22.1649 30.7739 22.5992L31.9962 23.4142C33.2269 24.2346 33.3993 25.9757 32.3534 27.0216L31.9365 27.4385C31.4969 27.8781 31.25 28.4742 31.25 29.0958V29.9516C31.25 30.8012 31.0191 31.6348 30.582 32.3633L27.8432 36.928C27.0487 38.2522 25.6176 39.0625 24.0732 39.0625C22.8592 39.0625 21.875 38.0783 21.875 36.8643V34.4236C21.875 32.5069 20.708 30.7832 18.9284 30.0714L17.5656 29.5262C15.5203 28.7081 14.3206 26.5763 14.6828 24.4034L14.6974 24.3154C14.7941 23.7353 14.9991 23.1786 15.3017 22.6743L15.4879 22.3639C16.5071 20.6652 18.4842 19.7906 20.4267 20.1791L22.8806 20.6699C24.0778 20.9093 25.2584 20.1895 25.5938 19.0155L26.0281 17.4953C26.338 16.4108 25.8315 15.2595 24.8227 14.7551L23.4375 14.0625L23.2479 14.2521C22.3689 15.1311 21.1766 15.625 19.9334 15.625H19.5564C19.0401 15.625 18.5437 15.8313 18.1785 16.1965C17.588 16.787 16.6836 16.9356 15.9366 16.5621C14.9257 16.0566 14.559 14.7975 15.1405 13.8283L18.082 8.92584C18.3755 8.43668 18.576 7.90015 18.6761 7.34321M43.5268 27.9018C43.6737 26.9561 43.75 25.9869 43.75 25C43.75 14.6447 35.3553 6.25 25 6.25C22.7809 6.25 20.6518 6.63551 18.6761 7.34321M43.5268 27.9018C42.132 36.8792 34.3684 43.75 25 43.75C14.6447 43.75 6.25 35.3553 6.25 25C6.25 16.8638 11.4323 9.93793 18.6761 7.34321"
                                                    stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            <p>A supportive environment designed to ensure your success in the FMGE
                                                exam</p>
                                        </div>
                                    </div>
                                </div>
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
            </section>



            <section className={styles.faculty}>
                <div className="container">
                    <div className="row">
                        <div className={styles.sec_title}>
                            <h2>Team</h2>
                            <h1>
                                Our<span> Faculty</span>
                            </h1>
                            <p>At Arise Medical Academy, our faculty consists of experienced and passionate educators who
                                are leaders in their respective fields. They bring a wealth of knowledge and real-world
                                experience to their teaching, ensuring our students receive the highest quality education.
                            </p>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <h6>Anatomy</h6>
                            <p>Dr. Azam</p>
                            <h6>Anesthesia</h6>
                            <p>Dr. Krishna Chaitanya</p>
                            <h6>Biochemistry</h6>
                            <p>Dr. Azam</p>
                            <h6>Dermatology</h6>
                            <p>Dr. Jazeer</p>
                            <h6>ENT</h6>
                            <p>Dr. Rajiv Dhawan </p>
                            <h6>Forensic Medicine</h6>
                            <p>Dr. Magendran J & Dr. Nadeem</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <h6>Obstetrics & Gynaecology</h6>
                            <p>Dr. Prassan Vji & Dr. Gayathri</p>
                            <h6>Medicine</h6>
                            <p>Dr. Priyansh Jain & Dr. Rahul Rajeev</p>
                            <h6>Microbiology</h6>
                            <p>Dr. Salman</p>
                            <h6>Ophthalmology</h6>
                            <p>Dr. Sudha</p>
                            <h6>Orthopedics</h6>
                            <p>Dr. Abbas & Dr. Rohit Daniel</p>
                            <h6>Pathology</h6>
                            <p> Dr. Devesh Mishra & Dr. Sara</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <h6>Pharmacology</h6>
                            <p>Dr. Salman</p>
                            <h6>Psychiatry</h6>
                            <p>Dr. Nadeem</p>
                            <h6>Physiology</h6>
                            <p>Dr. SreeTeja</p>
                            <h6>Pediatrics</h6>
                            <p>Dr. Singaram & Dr. Sandeep Sharma</p>
                            <h6>Radiology</h6>
                            <p>Dr. Khaleel Ahmed</p>
                            <h6>Surgery</h6>
                            <p>Dr. Pritesh Singh, Dr. Raja Mahendran & <br />Dr. Sandeep
                                Seeramreddy
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About