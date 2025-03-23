import React from 'react';
import styles from "./Home.module.scss";

//online images
import img1 from '../../assets/images/journey/o-7.png';
import img2 from '../../assets/images/journey/o-1.png';
import img3 from '../../assets/images/journey/o-6.jpg';
import img4 from '../../assets/images/journey/online-04.png';
import img5 from '../../assets/images/journey/o-5.jpg';
import img6 from '../../assets/images/journey/o-3.png';
import img7 from '../../assets/images/journey/o-4.jpg';
import img8 from '../../assets/images/journey/o-8.jpg';

//offline images
import img9 from '../../assets/images/branches-page/hyd/1.png';
import img10 from '../../assets/images/branches-page/jaipur/4.jpeg';
import img11 from '../../assets/images/batches/service-3a.jpeg';
import img12 from '../../assets/images/journey/online-04.png';
import img13 from '../../assets/images/journey/j-5.jpg';
import img14 from '../../assets/images/branches-page/hyd/10.jpg';
import img15 from '../../assets/images/journey/j-6.jpeg';
import img16 from '../../assets/images/journey/j-7.jpeg';


const Journey = () => {

    const online = [
        { img: img1, title: "Advanced Online App", description: "Utilize our state-of-the-art online app, providing you with all the tools you need for your FMGE preparation. From interactive sessions to practice tests, our app has it all." },
        { img: img2, title: "Live Interactive Classes", description: "Experience our real-time, engaging online classes led by the best faculties in India. Interact directly with your instructors and classmates to enhance your learning experience." },
        { img: img3, title: "Digital Study Resources", description: "Benefit from our digital study materials, including notes, handouts, and other resources. Dive deeper into your studies with easily accessible materials designed to support your learning." },
        { img: img4, title: "Comprehensive Question Bank", description: "Access an extensive repository of practice questions with detailed analysis. Sharpen your skills and identify areas for improvement with our comprehensive question bank." },
        { img: img5, title: "Recorded Lectures", description: "Missed a class? No worries! All our live sessions are recorded and available for you to review at your convenience. Reinforce your learning by revisiting any topic anytime." },
        { img: img6, title: "Subject-Specific Tests", description: "Track your progress with subject-wise exams. Gain valuable exam experience and measure your understanding of each topic through these targeted assessments." },
        { img: img7, title: "Updated Exam Format", description: "Stay ahead of the curve with our updated FMGE exam format. Prepare effectively with the latest patterns and formats incorporated into our course structure." },
        { img: img8, title: "Continuous Support System", description: "Experience the best support system one could ask for. From academic guidance to technical support, we're here to ensure your success every step of the way." },
    ];
    const offline = [
        { img: img9, title: "Join the Arise World", description: "Experience academic excellence and unmatched support, ensuring high success rates in a stress-free environment." },
        { img: img10, title: "State of Art Facility", description: "We identify and train academically oriented students before they join us. We offer tailored preparation for foreign students to master the rigorous Indian exam system." },
        { img: img11, title: "Dedicated Faculty", description: "Our committed instructors are available anytime to ensure timely syllabus completion and assistance. We provide additional revision sessions based on student feedback." },
        { img: img12, title: "Engaging Study Materials", description: "Our materials are designed for active note-taking and highlighting key points. We continuously revise our content to ensure relevance and accuracy." },
        { img: img13, title: "Regular Assessments", description: "We conduct subject-wise tests 45 days before exams for thorough MCQ practice. Our intensive fast-track revisions ease exam stress." },
        { img: img14, title: "Proximity and Convenience", description: "Our walkable accommodations are accessible even late at night. Enjoy 24/7 access to classrooms, libraries, and reading rooms." },
        { img: img15, title: "Comprehensive Support System", description: "From registration to post-exam, we handle mock tests, hall tickets, and transport. We offer continuous support, with faculty available for last-minute doubts and revisions." },
        { img: img16, title: "Holistic Student Care", description: "We actively seek and address student concerns. Our leadership is directly involved to ensure the best educational experience." },
    ];

    return (
        <section className={styles.journey}>
            <div className="container">
                <div className="row">
                    <div className={styles.sec_title}>
                        <h2>Students Journey</h2>
                        <h1>
                            Enter The <span>Arise Ecosystem</span>
                        </h1>
                    </div>
                    <div className="col-12">
                        <div className={styles.pill_btn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="388" height="2" viewBox="0 0 388 2" fill="none">
                                <path d="M388 1L-7.62939e-06 1" stroke="url(#paint0_linear_538_7545)" strokeWidth="2" />
                                <defs>
                                    <linearGradient id="paint0_linear_538_7545" x1="388" y1="0.5" x2="175.813" y2="0.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6B83E5" />
                                        <stop offset="1" stopColor="#666666" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-offline-tab" data-bs-toggle="pill" data-bs-target="#pills-offline" type="button" role="tab" aria-controls="pills-offline" aria-selected="true">
                                        Offline
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-online-tab" data-bs-toggle="pill" data-bs-target="#pills-online" type="button" role="tab" aria-controls="pills-online" aria-selected="false">
                                        Online
                                    </button>
                                </li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" width="388" height="2" viewBox="0 0 388 2" fill="none">
                                <path d="M0 1L388 1.00003" stroke="url(#paint0_linear_538_7555)" strokeWidth="2" />
                                <defs>
                                    <linearGradient id="paint0_linear_538_7555" x1="-4.37114e-08" y1="1.5" x2="212.187" y2="1.50002" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6B83E5" />
                                        <stop offset="1" stopColor="#666666" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-offline" role="tabpanel" aria-labelledby="pills-offline-tab">
                            <div className="row">
                                {offline.map((item, index) => (
                                    <div key={index} className={`col-xl-${index < 3 ? '4' : index < 5 ? '6' : '4'} col-lg-${index < 3 ? '4' : index < 5 ? '6' : '4'} col-md-${index < 3 ? '4' : index < 5 ? '6' : '4'} col-sm-12`}>
                                        <div className={(index < 3 || index >= offline.length - 3) ? styles.batch_rgt : styles.batch_lft}>
                                            <img src={item.img} alt={item.title} className={styles.img} />
                                            <div className={styles.content}>
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>

                        {/* Online Tab */}
                        <div className="tab-pane fade" id="pills-online" role="tabpanel" aria-labelledby="pills-online-tab">
                            <div className="row">
                                {online.map((item, index) => (
                                    <div key={index} className={`col-xl-${index < 3 ? '4' : index < 5 ? '6' : '4'} col-lg-${index < 3 ? '4' : index < 5 ? '6' : '4'} col-md-${index < 3 ? '4' : index < 5 ? '6' : '4'} col-sm-12`}>
                                        <div className={(index < 3 || index >= offline.length - 3) ? styles.batch_rgt : styles.batch_lft}>
                                            <img src={item.img} alt={item.title} className={styles.img} />
                                            <div className={styles.content}>
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="1122" height="2" viewBox="0 0 1122 2" fill="none">
                        <path d="M0 1H1122" stroke="url(#paint0_linear_222_9085)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="paint0_linear_222_9085" x1="-3.87665e-06" y1="22.5" x2="1122" y2="22.5002" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#666666" stopOpacity="0" />
                                <stop offset="0.5" stopColor="#6B83E5" />
                                <stop offset="1" stopColor="#666666" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Journey;