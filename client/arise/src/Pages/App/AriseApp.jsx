import React from 'react';
import styles from '../App/AriseApp.module.scss';
import iphone13 from '../../assets/images/app-page/iPhone 13 Pro.png';
import iphone15 from '../../assets/images/app-page/iPhone 15.png';
import iphone15_ from '../../assets/images/app-page/iPhone 15-.png';
import pro from '../../assets/images/app-page/pro.png';
import android from "../../assets/images/icons/android.png";
import apple from "../../assets/images/icons/apple.png";



const AriseApp = () => {
    return (
        <>
            <section className={styles.app_banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.header_title}>
                                <h1><span>Arise</span> App</h1>
                                <h1 className={styles.join}>Join over <span>10,000+</span> Successful <br />
                                    Medical Aspirants </h1>

                                <div className={`${styles.icons} text-center`}>
                                    <a href="https://play.google.com/store/apps/details?id=com.arisemobile.app"><img
                                        src={android} alt="" /></a>
                                    <a href="https://apps.apple.com/in/app/arise-medical-academy/id1581256443 "> <img
                                        src={apple} alt="" /></a>
                                </div>

                                <div className={styles.app_image}>
                                    <img src={iphone13} alt="" />
                                </div>
                            </div>


                            <section className={styles.count1}>
                                <div className={styles.counter}>
                                    <div>
                                        <h1><span id="num1"></span>+</h1>
                                        <h3>Downloads</h3>
                                    </div>
                                    <div>
                                        <h1><span id="num2">50</span>yrs</h1>
                                        <h3>Question Bank Collection</h3>
                                    </div>
                                    <div>
                                        <h1><span id="num3">1000</span>hr</h1>
                                        <h3>Recorded Class</h3>
                                    </div>
                                    <div>
                                        <h1><span id="num4">2000</span>+</h1>
                                        <h3>Test Taken</h3>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>


            <section className={styles.feature}>
                <div className="container">
                    <div className="row">
                        <div className={`${styles.sec_title}col-12`}>
                            <h1>App <span>Feature</span></h1>
                            <p>Arise Medical Academy offers a comprehensive app designed to enhance your learning experience
                                and
                                provide you with the tools you need to succeed in your medical journey. Our app
                                provides access
                                to a wide range of features tailored to meet the needs of our Regular Batch students,
                                both
                                online and offline.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6 img-fluid">
                            <img width={"100%" } src={iphone15_} alt="" />
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className={styles.info}>
                                <h5>Image-Based Material</h5>
                                <p>Visual learners rejoice! Our app includes image-based material to supplement your
                                    learning experience, making complex concepts easier to understand.</p>
                            </div>
                            <div className={styles.info}>
                                <h5>Question Banks & Test Series</h5>
                                <p>Access a vast repository of questions covering various topics and subjects, allowing
                                    you to practice and reinforce your understanding. Prepare for exams with our test
                                    series, designed to assess your knowledge and readiness. Practice with confidence
                                    knowing you're well-prepared.</p>
                            </div>
                            <div className={styles.info}>
                                <h5>Previous Year Questions</h5>
                                <p>Gain insight into exam patterns and trends with access to previous year questions,
                                    helping you familiarize yourself with exam formats.</p>
                            </div>
                            <div className={styles.info}>
                                <h5>Flash Card</h5>
                                <p>We offer interactive flashcards to help you master key concepts quickly. Use them for
                                    active recall, quick revisions, and better retention—anytime, anywhere!</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.down} row`}>

                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className={styles.info}>
                                <h5>Exam Pattern Practice</h5>
                                <p>Our app features facilities to practice according to the latest exam patterns,
                                    ensuring you are well-prepared for the actual test environment.</p>
                            </div>
                            <div className={styles.info}>
                                <h5>Up-to-Date Exam Information</h5>
                                <p>Stay informed with the latest updates on medical exams, including recent changes in
                                    the FMGE format of time slots.</p>
                            </div>
                            <div className={styles.info}>
                                <h5>Live Classes</h5>
                                <p>Students can join live online classes with live interaction with faculty and these
                                    sessions will be available for next 24 hours for students to revise.</p>
                            </div>
                            <div className={styles.info}>
                                <h5>Notes</h5>
                                <p>We provide expertly curated study notes that simplify complex topics, focus on key
                                    exam areas, and regularly updated. Access them anytime, anywhere, for efficient
                                    learning and quick revisions.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <img width={"100%"} src={iphone15} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.explore}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1><span>Explore</span> The App</h1>
                            <img src={pro} width={"100%"} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AriseApp