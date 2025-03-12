import React from 'react';
import styles from "../Faq/Faq.module.scss";

const Faq = () => {
    const toggleAccordion = (selector) => {
        const block = document.querySelector(selector);
        if (block) {
            block.style.maxHeight = block.style.maxHeight ? "" : `${block.scrollHeight}px`;
        }
    };

    const handleToggle = (e) => {
        const header = e.currentTarget;
        const selector = header.dataset.toggle;
        toggleAccordion(selector);
        header.classList.toggle("active");
    };

    return (
        <section className={styles.faq_banner}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Frequently asked questions</h1>
                        <p>Here are the answers to some of the most frequently asked questions about Arise</p>

                        <div className={styles.faq_content}>
                            <div className={styles.accordion}>
                                {[{
                                    id: "faq1",
                                    question: "01.What courses does Arise Medical Academy offer?",
                                    answer: `Arise Medical Academy offers comprehensive courses for FMGE preparation, including Regular Batches, Crash Courses, and specialised Achievers Batches for final year students.`
                                }, {
                                    id: "faq2",
                                    question: "02.How are the classes conducted?",
                                    answer: `We offer both online and offline classes to accommodate different learning preferences. Our classes are led by experienced faculty and include interactive sessions and regular tests.`
                                }, {
                                    id: "faq3",
                                    question: "03.How many branches does Arise have ?",
                                    answer: `Arise has 5 branches in Hyderabad, Delhi, Jaipur, Chennai and Taliparamba, Kerala.`
                                }, {
                                    id: "faq4",
                                    question: "04.How can I communicate with the Arise team?",
                                    answer: `You communicate through our social media, or can reach out to +91 76809 29292`
                                }, {
                                    id: "faq5",
                                    question: "05.How can I enrol in a course?",
                                    answer: `You can enroll in a course by visiting our website and filling out the enrollment form, or by contacting us directly at 7680929292 for assistance.`
                                }, {
                                    id: "faq6",
                                    question: "06.What is included in the study material?",
                                    answer: `Our study material includes detailed workbooks, an extensive question bank, previous year questions, image-based learning resources, and up-to-date exam information.`
                                }, {
                                    id: "faq7",
                                    question: "07.What makes Arise Medical Academy different from other institutes?",
                                    answer: `Arise Medical Academy stands out due to our experienced faculty, comprehensive study material, extensive question bank, and the ability to start preparation early with our Achievers Batches. We also stay updated with the latest exam formats and patterns.`
                                }, {
                                    id: "faq8",
                                    question: "08.Can I access the study material and classes online?",
                                    answer: `Yes, our app provides access to all study materials, classes, and additional resources online, allowing you to study anytime, anywhere.`
                                }].map(({ id, question, answer }) => (
                                    <div className={styles.accordion__item} key={id}>
                                        <div
                                            className={styles.accordion__header}
                                            data-toggle={`#${id}`}
                                            onClick={handleToggle}
                                        >
                                            {question}
                                        </div>
                                        <div className={styles.accordion__content} id={id}>
                                            <p>{answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        // <main>
        //     <section className={styles.faq_banner}>
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <h1>Frequently asked questions</h1>
        //                     <p>Here are the answers to some of the most frequently asked questions about Arise</p>


        //                     <div className={styles.faq_content}>
        //                         <div className={styles.accordion}>
        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq1">01.What courses does Arise
        //                                     Medical Academy offer?</div>
        //                                 <div className={styles.accordion__content} id="faq1">
        //                                     <p>Arise Medical Academy offers comprehensive
        //                                         courses for FMGE preparation,
        //                                         including Regular Batches, Crash Courses, and specialised Achievers
        //                                         Batches for final year students.</p>
        //                                 </div>
        //                             </div>

        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq2">02.How are the classes conducted?
        //                                 </div>
        //                                 <div className={styles.accordion__content} id="faq2">
        //                                     <p>We offer both online and offline classes to
        //                                         accommodate different learning preferences.
        //                                         Our classes are led by experienced faculty and include interactive
        //                                         sessions and regular tests.</p>

        //                                 </div>
        //                             </div>

        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq3">03.How many branches does Arise
        //                                     have ?</div>
        //                                 <div className={styles.accordion__content} id="faq3">
        //                                     <p>Arise has 5 branches in Hyderabad, Delhi,
        //                                         Jaipur, Chennai and Taliparamba, Kerala.</p>

        //                                 </div>
        //                             </div>

        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq4">04.How can I communicate with the
        //                                     Arise team?</div>
        //                                 <div className={styles.accordion__content} id="faq4">
        //                                     <p>You communicate through our social media, or
        //                                         can reach out to +91 76809 29292</p>

        //                                 </div>
        //                             </div>
        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq5">
        //                                     05.How can I enrol in a course?</div>
        //                                 <div className={styles.accordion__content} id="faq5">
        //                                     <p>You can enroll in a course by visiting our
        //                                         website and filling out the enrollment form, or by contacting us
        //                                         directly at 7680929292 for assistance.</p>

        //                                 </div>
        //                             </div>
        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq6">
        //                                     06.What is included in the study material?</div>
        //                                 <div className={styles.accordion__content} id="faq6">
        //                                     <p>Our study material includes detailed
        //                                         workbooks, an extensive question bank, previous year questions,
        //                                         image-based learning resources, and up-to-date exam information</p>

        //                                 </div>
        //                             </div>
        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq7">07.What makes Arise Medical
        //                                     Academy different from other institutes?</div>
        //                                 <div className={styles.accordion__content} id="faq7">
        //                                     <p>Arise Medical Academy stands out due to our
        //                                         experienced faculty, comprehensive study material,
        //                                         extensive question bank, and the ability to start preparation early
        //                                         with our Achievers Batches. We also stay updated with the latest
        //                                         exam formats and patterns.</p>

        //                                 </div>
        //                             </div>
        //                             <div className={styles.accordion__item}>
        //                                 <div className={styles.accordion__header} data-toggle="#faq8">08.Can I access the study
        //                                     material and classes online?
        //                                 </div>
        //                                 <div className={styles.accordion__content} id="faq8">
        //                                     <p>Yes, our app provides access to all study
        //                                         materials, classes, and additional resources online, allowing you to
        //                                         study anytime, anywhere.</p>

        //                                 </div>
        //                             </div>

        //                         </div>
        //                     </div>

        //                 </div>

        //             </div>
        //         </div>
        //     </section>
        // </main>
    )
}

export default Faq