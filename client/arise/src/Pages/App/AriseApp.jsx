import React, { useEffect, useState } from 'react';
import styles from '../App/AriseApp.module.scss';
import iphone13 from '../../assets/images/app-page/05.png';
import iphone15 from '../../assets/images/app-page/iPhone 15.png';
import iphone15_ from '../../assets/images/app-page/iPhone 15-.png';
import android from "../../assets/images/icons/android.png";
import apple from "../../assets/images/icons/apple.png";
import expVideo from "../../assets/images/app-page/exp.mp4";



const AriseApp = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(5);

    useEffect(() => {
        const animateValue = (setter, start, end, duration) => {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setter(Math.floor(progress * (end - start) + start));
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        animateValue(setNum1, 0, 40000, 5000);
        animateValue(setNum2, 0, 50000, 5000);
        animateValue(setNum3, 0, 1000, 5000);
        animateValue(setNum4, 0, 200000, 5000);
    }, []);


    const featureSections = [
        {
            image: iphone15_,
            features: [
                { title: "Image-Based Material", description: "Visual learners rejoice! Our app includes image-based material to supplement your learning experience, making complex concepts easier to understand." },
                { title: "Question Banks & Test Series", description: "Access a vast repository of questions covering various topics and subjects, allowing you to practice and reinforce your understanding. Prepare for exams with our test series, designed to assess your knowledge and readiness." },
                { title: "Previous Year Questions", description: "Gain insight into exam patterns and trends with access to previous year questions, helping you familiarize yourself with exam formats." },
                { title: "Flash Card", description: "We offer interactive flashcards to help you master key concepts quickly. Use them for active recall, quick revisions, and better retention—anytime, anywhere!" }
            ]
        },
        {
            image: iphone15,
            features: [
                { title: "Exam Pattern Practice", description: "Our app features facilities to practice according to the latest exam patterns, ensuring you are well-prepared for the actual test environment." },
                { title: "Up-to-Date Exam Information", description: "Stay informed with the latest updates on medical exams, including recent changes in the FMGE format of time slots." },
                { title: "Live Classes", description: "Students can join live online classes with live interaction with faculty and these sessions will be available for next 24 hours for students to revise." },
                { title: "Notes", description: "We provide expertly curated study notes that simplify complex topics, focus on key exam areas, and regularly updated. Access them anytime, anywhere, for efficient learning and quick revisions." }
            ]
        }
    ];

    return (
        <>
            <section className={styles.app_banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.header_title}>
                                <h1><span>Arise</span> App</h1>
                                <h1 className={styles.join}>Join over <span>40,000+</span> Successful <br />
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
                                        <h1>{num1}+</h1>
                                        <h3>Downloads</h3>
                                    </div>
                                    <div>
                                        <h1>{num2}+</h1>
                                        <h3>Question Bank Collection</h3>
                                    </div>
                                    <div>
                                        <h1>{num3}hr</h1>
                                        <h3>Recorded Class</h3>
                                    </div>
                                    <div>
                                        <h1>{num4}+</h1>
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
                        <div className={`${styles.sec_title} col-12`}>
                            <h1>App <span>Feature</span></h1>
                            <p>
                                Arise Medical Academy offers a comprehensive app designed to enhance your learning experience
                                and provide you with the tools you need to succeed in your medical journey. Our app
                                provides access to a wide range of features tailored to meet the needs of our Regular Batch students,
                                both online and offline.
                            </p>
                        </div>
                    </div>

                    {featureSections.map((section, index) => (
                        <div key={index} className="row align-items-center">
                            {index % 2 === 0 ? (
                                <>
                                    <div className="col-xl-5 col-lg-5 col-md-6">
                                        <img width={"100%"} src={section.image} alt="" />
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-6">
                                        {section.features.map((feature, i) => (
                                            <div key={i} className={styles.info}>
                                                <h5>{feature.title}</h5>
                                                <p>{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-xl-7 col-lg-7 col-md-6">
                                        {section.features.map((feature, i) => (
                                            <div key={i} className={styles.info}>
                                                <h5>{feature.title}</h5>
                                                <p>{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-6">
                                        <img width={"100%"} src={section.image} alt="" />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.explore}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1><span>Explore</span> The App</h1>
                            <video autoPlay loop muted>
                                <source src={expVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AriseApp