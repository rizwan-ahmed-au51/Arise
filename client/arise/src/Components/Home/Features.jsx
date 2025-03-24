import React, { useRef, useState } from "react";
import styles from './Home.module.scss';

import glimpse from "../../assets/images/video/glimpse.mp4";

const featuresList = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
            >
                <path
                    d="M35.6285 9.34723L39.1441 5.83161C40.6696 4.30613 43.1429 4.30613 44.6684 5.83161C46.1939 7.3571 46.1939 9.8304 44.6684 11.3559L22.5462 33.4781C21.4448 34.5795 20.0863 35.3891 18.5935 35.8338L13 37.5L14.6662 31.9065C15.1109 30.4137 15.9205 29.0552 17.0219 27.9538L35.6285 9.34723ZM35.6285 9.34723L41.125 14.8437M38 29.1667V39.0625C38 41.6513 35.9013 43.75 33.3125 43.75H11.4375C8.84866 43.75 6.75 41.6513 6.75 39.0625V17.1875C6.75 14.5986 8.84867 12.5 11.4375 12.5H21.3333"
                    stroke="#2540AE"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        text: "FMGE simulator Mock tests and QBank for practice of the exam",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50"
            fill="none">
            <path
                d="M14.5625 6.25V10.9375M36.4375 6.25V10.9375M6.75 39.0625V15.625C6.75 13.0362 8.84867 10.9375 11.4375 10.9375H39.5625C42.1513 10.9375 44.25 13.0362 44.25 15.625V39.0625M6.75 39.0625C6.75 41.6513 8.84867 43.75 11.4375 43.75H39.5625C42.1513 43.75 44.25 41.6513 44.25 39.0625M6.75 39.0625V23.4375C6.75 20.8487 8.84867 18.75 11.4375 18.75H39.5625C42.1513 18.75 44.25 20.8487 44.25 23.4375V39.0625M25.5 26.5625H25.5156V26.5781H25.5V26.5625ZM25.5 31.25H25.5156V31.2656H25.5V31.25ZM25.5 35.9375H25.5156V35.9531H25.5V35.9375ZM20.8125 31.25H20.8281V31.2656H20.8125V31.25ZM20.8125 35.9375H20.8281V35.9531H20.8125V35.9375ZM16.125 31.25H16.1406V31.2656H16.125V31.25ZM16.125 35.9375H16.1406V35.9531H16.125V35.9375ZM30.1875 26.5625H30.2031V26.5781H30.1875V26.5625ZM30.1875 31.25H30.2031V31.2656H30.1875V31.25ZM30.1875 35.9375H30.2031V35.9531H30.1875V35.9375ZM34.875 26.5625H34.8906V26.5781H34.875V26.5625ZM34.875 31.25H34.8906V31.2656H34.875V31.25Z"
                stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>),
        text: "Regular Course with Daily Classes to prepare you for FMGE",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50"
            fill="none">
            <path
                d="M10.6125 20.2976C10.0885 24.3057 9.77026 28.3786 9.66859 32.5052C15.2383 34.8306 20.5358 37.6779 25.4999 40.986C30.464 37.6779 35.7615 34.8306 41.3312 32.5052C41.2296 28.3786 40.9113 24.3058 40.3873 20.2977M10.6125 20.2976C8.92831 19.7315 7.22367 19.2098 5.5 18.7341C11.7417 14.359 18.4365 10.5862 25.5 7.5C32.5635 10.5862 39.2582 14.359 45.5 18.7341C43.7763 19.2099 42.0716 19.7315 40.3873 20.2977M10.6125 20.2976C15.7808 22.0348 20.7567 24.1907 25.5 26.7251C30.2432 24.1908 35.2191 22.0348 40.3873 20.2977M15.4028 29.6319C16.1994 29.6319 16.8452 28.9861 16.8452 28.1894C16.8452 27.3928 16.1994 26.747 15.4028 26.747C14.6061 26.747 13.9603 27.3928 13.9603 28.1894C13.9603 28.9861 14.6061 29.6319 15.4028 29.6319ZM15.4028 29.6319V22.5629C18.6559 20.5415 22.0258 18.6903 25.4999 17.0216M12.0229 39.234C14.2761 36.9808 15.4028 34.0276 15.4028 31.0743V28.1894"
                stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>),
        text: "Best of the best teachers will teach you.",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50"
            fill="none">
            <path
                d="M8.3125 28.125L30.1875 4.6875L25.5 21.875H42.6875L20.8125 45.3125L25.5 28.125H8.3125Z"
                stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>),
        text: "FMGE Crash course for revision for what you have learnt so far",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50"
            fill="none">
            <path
                d="M25.5 17.2222V25L31.3333 30.8333M43 25C43 34.665 35.165 42.5 25.5 42.5C15.835 42.5 8 34.665 8 25C8 15.335 15.835 7.5 25.5 7.5C35.165 7.5 43 15.335 43 25Z"
                stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>),
        text: "Timely schedule of classes.",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50"
            fill="none">
            <path
                d="M25.5 17.2222V25L31.3333 30.8333M43 25C43 34.665 35.165 42.5 25.5 42.5C15.835 42.5 8 34.665 8 25C8 15.335 15.835 7.5 25.5 7.5C35.165 7.5 43 15.335 43 25Z"
                stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>),
        text: "Great Results given session after session.",
    },
];

const Features = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 300); // Small delay for smooth opening
    };

    const closeModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setIsModalOpen(false);
    };
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.feature_content}>
                            <h2>Core Feature</h2>
                            <h1>
                                <span>FMGE</span> Preparation Program
                            </h1>
                            <p>
                                Prepare for FMG Examination with confidence with Arise Medical Academy.
                                Arise Medical Academy gives the best modules and courses for clearing
                                FMG exam. Be successful … Rise with Arise…
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.video_Wrapper}>
                            <section className={styles.video_container}>

                                <div className={styles.video_head}>
                                    <div
                                        className={styles.video_wrapper}
                                        onClick={openModal}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="128"
                                            height="126"
                                            viewBox="0 0 128 126"
                                            fill="none"
                                        >
                                            <rect x="0.5" width="127" height="126" rx="63" fill="#2540AE" />
                                            <path
                                                d="M48.9768 80.3271C48.5851 80.3271 48.2095 80.172 47.9325 79.896C47.6556 79.6199 47.5 79.2455 47.5 78.8551V46.4717C47.5 46.2159 47.567 45.9646 47.6941 45.7424C47.8213 45.5203 48.0044 45.335 48.2253 45.2048C48.4462 45.0747 48.6974 45.0041 48.9539 45.0002C49.2105 44.9962 49.4637 45.059 49.6886 45.1823L79.2239 61.374C79.4554 61.501 79.6485 61.6877 79.783 61.9145C79.9174 62.1413 79.9884 62.4 79.9884 62.6634C79.9884 62.9269 79.9174 63.1855 79.783 63.4123C79.6485 63.6391 79.4554 63.8258 79.2239 63.9529L49.6886 80.1446C49.4705 80.2642 49.2257 80.327 48.9768 80.3271Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {/* Video Modal */}
                                {isModalOpen && (
                                    <div className={styles.modal_overlay}>
                                        <div className={styles.modal_content}>
                                            <button className={styles.close_btn} onClick={closeModal}>
                                                ✖
                                            </button>
                                            <video ref={videoRef} controls>
                                                <source src={glimpse} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>

                                        </div>
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.MCI}>
                            <h5>Our courses for MCI Screening give you:</h5>
                            <div className={styles.MCI_Objects}>
                                {featuresList.map((feature, index) => (
                                    <div key={index} className={styles.featureItem}>
                                        <span>{feature.icon}</span>
                                        <p>{feature.text}</p>
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

export default Features;
