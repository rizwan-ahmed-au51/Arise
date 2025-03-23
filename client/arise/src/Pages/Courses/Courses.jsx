import React from 'react';
import styles from "../Courses/Course.module.scss";
import CourseCard from './CourseCard';
import courseImg from "../../assets/images/course-page/Course Image.png";
import courseImg2 from "../../assets/images/course-page/Course Image2.png";
import courseImg3 from "../../assets/images/batches/service-3a.jpeg";
import courseImg5 from "../../assets/images/batches/service-4a.jpg";
import courseImg6 from "../../assets/images/course-page/Course Image6.png";
import courseImg7 from "../../assets/images/batches/service-6a.jpeg";

const Courses = () => {
    const courses = [
        {
            id: "regular",
            name: "Regular Batch",
            duration: "6 Months",
            phases: "3 (Regular Classes, Test and Discussion, Revision)",
            subjects: "All 19 subjects",
            overview: "Embark on a comprehensive journey towards FMGE/MCI exam success with our Regular Batch, spanning three phases over six months. The Regular Classes provide in-depth coverage of all 19 subjects, ensuring a solid foundation of knowledge. The Test and Discussion phase allows students to assess their progress through regular tests followed by insightful discussions led by our experienced faculty members. Finally, the Revision phase offers focused revision sessions to reinforce key concepts and enhance retention, ensuring students are fully prepared for the exam.",
            image: courseImg,
            features: [
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M35.1285 9.34723L38.6441 5.83161C40.1696 4.30613 42.6429 4.30613 44.1684 5.83161C45.6939 7.3571 45.6939 9.8304 44.1684 11.3559L22.0462 33.4781C20.9448 34.5795 19.5863 35.3891 18.0935 35.8338L12.5 37.5L14.1662 31.9065C14.6109 30.4137 15.4205 29.0552 16.5219 27.9538L35.1285 9.34723ZM35.1285 9.34723L40.625 14.8437M37.5 29.1667V39.0625C37.5 41.6513 35.4013 43.75 32.8125 43.75H10.9375C8.34866 43.75 6.25 41.6513 6.25 39.0625V17.1875C6.25 14.5986 8.34867 12.5 10.9375 12.5H20.8333"
                            stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "60 Days Revision"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                            stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "19 Subjects"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                            stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Intense Test Prep"
                }
            ]
        },
        {
            id: "semi_regular",
            name: "Semi-Regular Batch",
            duration: "3 Months",
            phases: "3 (Regular Classes, Test and Discussion, Revision)",
            subjects: "10 major subjects",
            overview: "Ideal for those with limited time, our Semi-Regular Batch spans three months and covers 10 major subjects. The Classes phase focuses on mastering these subjects through comprehensive, efficient learning sessions. Following this, the Test and Discussion phase gauges students' understanding through tests and detailed discussions to clarify doubts and reinforce learning. The final 15-day Revision phase engages students in intensive revision sessions to consolidate their knowledge and boost their confidence for the exam.",
            image: courseImg2,
            features: [
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M35.1285 9.34723L38.6441 5.83161C40.1696 4.30613 42.6429 4.30613 44.1684 5.83161C45.6939 7.3571 45.6939 9.8304 44.1684 11.3559L22.0462 33.4781C20.9448 34.5795 19.5863 35.3891 18.0935 35.8338L12.5 37.5L14.1662 31.9065C14.6109 30.4137 15.4205 29.0552 16.5219 27.9538L35.1285 9.34723ZM35.1285 9.34723L40.625 14.8437M37.5 29.1667V39.0625C37.5 41.6513 35.4013 43.75 32.8125 43.75H10.9375C8.34866 43.75 6.25 41.6513 6.25 39.0625V17.1875C6.25 14.5986 8.34867 12.5 10.9375 12.5H20.8333"
                            stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "15 Days Revision"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                            stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "10 Subjects"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                            stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Intense Test Prep"
                }
            ]
        },
        {
            id: "super_revision",
            name: "Super Revision Batch",
            duration: "2 Months",
            phases: "2 (Test and Discussion, Rapid Revision Classes)",
            subjects: "All 19 subjects (Test and Discussion), 10 major subjects (Rapid Revision Classes)",
            overview: "Streamline your revision process with our Super Revision Batch, designed to maximize efficiency and effectiveness. The Test and Discussion phase covers all 19 subjects through rigorous testing followed by insightful discussions to deepen understanding. The Rapid Revision Classes phase focuses on rapid revision sessions for the 10 major subjects, ensuring thorough coverage and retention..",
            image: courseImg3,
            features: [
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M35.1285 9.34723L38.6441 5.83161C40.1696 4.30613 42.6429 4.30613 44.1684 5.83161C45.6939 7.3571 45.6939 9.8304 44.1684 11.3559L22.0462 33.4781C20.9448 34.5795 19.5863 35.3891 18.0935 35.8338L12.5 37.5L14.1662 31.9065C14.6109 30.4137 15.4205 29.0552 16.5219 27.9538L35.1285 9.34723ZM35.1285 9.34723L40.625 14.8437M37.5 29.1667V39.0625C37.5 41.6513 35.4013 43.75 32.8125 43.75H10.9375C8.34866 43.75 6.25 41.6513 6.25 39.0625V17.1875C6.25 14.5986 8.34867 12.5 10.9375 12.5H20.8333"
                            stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "60 Days Revision"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                            stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "19 Subjects"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                            stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Intense Test Prep"
                }
            ]
        },
        {
            id: "abhyas",
            name: "Test Series - Abhyas",
            duration: "3 Months",
            question: "7000+ Questions",
            feature: "Topic-wise practice questions, image-based questions, MCQs, previously asked questions, one-liners",
            phases: "3 (Regular Classes, Test and Discussion, Revision)",
            subjects: "10 major subjects",
            overview: "Sharpen your skills with our Test Series- Abhyas, offering a vast repository of over 7000+ questions. Access topic-wise practice questions, including image-based questions, MCQs, previously asked questions, and one-liners. Designed to mirror the final exam, our test series helps students familiarize themselves with the exam format and enhance their exam-taking abilities.",
            image: courseImg5,
            features: [
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M25 15.624H28.125M25 21.874H28.125M12.5 28.124H28.125M12.5 34.374H28.125M34.375 15.624H41.4062C42.7007 15.624 43.75 16.6734 43.75 17.9678V37.499C43.75 40.0879 41.6513 42.1865 39.0625 42.1865M34.375 15.624V37.499C34.375 40.0879 36.4737 42.1865 39.0625 42.1865M34.375 15.624V10.1553C34.375 8.86086 33.3257 7.81152 32.0312 7.81152H8.59375C7.29933 7.81152 6.25 8.86086 6.25 10.1553V37.499C6.25 40.0879 8.34867 42.1865 10.9375 42.1865H39.0625M12.5 15.624H18.75V21.874H12.5V15.624Z"
                            stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "7000 +Questions"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                            stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "19 Subjects"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                            stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Intense Test Prep"
                }
            ]
        },
        {
            id: "foundation",
            name: "Foundation Batch",
            duration: "3 Months",
            Audience: " University Students",
            Focus: "Early FMGE preparation",
            phases: "3 (Regular Classes, Test and Discussion, Revision)",
            subjects: "All 19 subjects",
            overview: "Start your FMGE preparation early with our Foundation Batch, designed specifically for university students. Begin your preparation while still in university, ensuring a seamless transition to exam preparation. Benefit from comprehensive classes tailored to university schedules, providing you with the necessary foundation for success.",
            image: courseImg6,
            features: [
                {
                    icon: (  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M10.1125 20.2976C9.58854 24.3057 9.27026 28.3786 9.16859 32.5052C14.7383 34.8306 20.0358 37.6779 24.9999 40.986C29.964 37.6779 35.2615 34.8306 40.8312 32.5052C40.7296 28.3786 40.4113 24.3058 39.8873 20.2977M10.1125 20.2976C8.42831 19.7315 6.72367 19.2098 5 18.7341C11.2417 14.359 17.9365 10.5862 25 7.5C32.0635 10.5862 38.7582 14.359 45 18.7341C43.2763 19.2099 41.5716 19.7315 39.8873 20.2977M10.1125 20.2976C15.2808 22.0348 20.2567 24.1907 25 26.7251C29.7432 24.1908 34.7191 22.0348 39.8873 20.2977M14.9028 29.6319C15.6994 29.6319 16.3452 28.9861 16.3452 28.1894C16.3452 27.3928 15.6994 26.747 14.9028 26.747C14.1061 26.747 13.4603 27.3928 13.4603 28.1894C13.4603 28.9861 14.1061 29.6319 14.9028 29.6319ZM14.9028 29.6319V22.5629C18.1559 20.5415 21.5258 18.6903 24.9999 17.0216M11.5229 39.234C13.7761 36.9808 14.9028 34.0276 14.9028 31.0743V28.1894"
                            stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "University Students"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M23.75 12.2743C20.4328 9.30534 16.0522 7.5 11.25 7.5C9.05853 7.5 6.95487 7.87596 5 8.56691V38.2544C6.95487 37.5635 9.05853 37.1875 11.25 37.1875C16.0522 37.1875 20.4328 38.9928 23.75 41.9618M23.75 12.2743C27.0672 9.30533 31.4478 7.5 36.25 7.5C38.4415 7.5 40.5451 7.87596 42.5 8.56691V38.2544C40.5451 37.5635 38.4415 37.1875 36.25 37.1875C31.4478 37.1875 27.0672 38.9928 23.75 41.9618M23.75 12.2743V41.9618"
                            stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "19 Subjects"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path d="M18.75 22.9173L25 29.1673L45.8333 8.33398" stroke="#2540AE"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M43.75 25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H33.3333"
                            stroke="#2540AE" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Intense Test Prep"
                }
            ]
        },
        {
            id: "in_university",
            name: "In-University Classes",
            duration: "3 Months",
            Partnerships: " Collaboration with universities",

            Location: "Multiple countries ( Kyrgyzstan, Georgia, Philippines, Russia, Ukraine, China, Armenia, Kazakhstan, Uzbekistan, and more )",
            phases: "3 (Regular Classes, Test and Discussion, Revision)",
            subjects: "10 major subjects",
            overview: `In partnership with universities worldwide, Arise Medical Academy offers in-university classes across various locations. Hosted in collaboration with universities in countries such as Kyrgyzstan, Georgia, Philippines, Russia, Ukraine, China, Armenia, Kazakhstan, Uzbekistan, and more, these classes provide students with
                                        convenient access to high-quality education, ensuring a supportive learning
                                        environment throughout their academic journey.`,
            image: courseImg7,
            features: [
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M7.60681 23.0556H11.3889C13.5367 23.0556 15.2778 24.7967 15.2778 26.9444V28.8889C15.2778 31.0367 17.0189 32.7778 19.1667 32.7778C21.3144 32.7778 23.0556 34.5189 23.0556 36.6667V42.3932M17.2222 9.31907V12.3611C17.2222 15.0458 19.3986 17.2222 22.0833 17.2222H23.0556C25.2033 17.2222 26.9444 18.9633 26.9444 21.1111C26.9444 23.2589 28.6856 25 30.8333 25C32.9811 25 34.7222 23.2589 34.7222 21.1111C34.7222 18.9633 36.4633 17.2222 38.6111 17.2222L40.6809 17.2222M30.8333 41.5042V36.6667C30.8333 34.5189 32.5744 32.7778 34.7222 32.7778H40.6809M42.5 25C42.5 34.665 34.665 42.5 25 42.5C15.335 42.5 7.5 34.665 7.5 25C7.5 15.335 15.335 7.5 25 7.5C34.665 7.5 42.5 15.335 42.5 25Z"
                            stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Multiple Countries"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M31.25 39.8498C32.9853 40.3549 34.8203 40.6257 36.7186 40.6257C39.7994 40.6257 42.7136 39.9125 45.305 38.642C45.3099 38.5226 45.3124 38.4026 45.3124 38.282C45.3124 33.5358 41.4648 29.6882 36.7186 29.6882C33.7644 29.6882 31.1584 31.1789 29.6116 33.4491M31.25 39.8498V39.8445C31.25 37.5259 30.6559 35.3462 29.6116 33.4491M31.25 39.8498C31.25 39.9241 31.2493 39.9982 31.2481 40.0722C27.3695 42.4075 22.826 43.7507 17.9687 43.7507C13.1115 43.7507 8.568 42.4075 4.68942 40.0722C4.68814 39.9965 4.6875 39.9205 4.6875 39.8445C4.6875 32.5095 10.6337 26.5632 17.9687 26.5632C22.9852 26.5632 27.3521 29.3445 29.6116 33.4491M25 13.282C25 17.1652 21.852 20.3132 17.9687 20.3132C14.0855 20.3132 10.9375 17.1652 10.9375 13.282C10.9375 9.39873 14.0855 6.25073 17.9687 6.25073C21.852 6.25073 25 9.39873 25 13.282ZM42.1875 17.9695C42.1875 20.9898 39.7391 23.4382 36.7187 23.4382C33.6984 23.4382 31.25 20.9898 31.25 17.9695C31.25 14.9492 33.6984 12.5007 36.7187 12.5007C39.7391 12.5007 42.1875 14.9492 42.1875 17.9695Z"
                            stroke="#2540AE" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Collaboration with Universities"
                },
                {
                    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                        viewBox="0 0 50 50" fill="none">
                        <path
                            d="M32.8121 12.5C32.8121 16.8147 29.3143 20.3125 24.9996 20.3125C20.6849 20.3125 17.1871 16.8147 17.1871 12.5C17.1871 8.18528 20.6849 4.6875 24.9996 4.6875C29.3143 4.6875 32.8121 8.18528 32.8121 12.5Z"
                            stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M9.37695 41.913C9.52342 33.4102 16.4618 26.5625 24.9996 26.5625C33.5376 26.5625 40.4761 33.4105 40.6222 41.9136C35.8664 44.0959 30.5754 45.3125 25.0003 45.3125C19.4246 45.3125 14.1331 44.0956 9.37695 41.913Z"
                            stroke="#2540AE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>),
                    text: "Top Faculty Classes"
                }
            ]
        },
        
        
    ];

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
                                {courses.map((course) => (
                                    <a key={course.id} href={`#${course.id}`}>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path opacity="0.15" d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" fill="#2540AE" />
                                                <path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" fill="#2540AE" />
                                            </svg>
                                            {course.name}
                                        </button>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}

                   
                </div>
            </section>
        </main>
    );
};

export default Courses;