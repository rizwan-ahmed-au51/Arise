import React from 'react';
import styles from "./Home.module.scss";

import img1 from '../../assets/images/testimonials/1.jpg';
import img2 from '../../assets/images/testimonials/2.jpeg';
import img3 from '../../assets/images/testimonials/4.jpg';
import img4 from '../../assets/images/testimonials/6.jpg';
import img5 from '../../assets/images/testimonials/5.jpg';
import img6 from '../../assets/images/testimonials/7.jpg';

const Testimonial = () => {

    const testimonials1 = [
        {
            img: img1,
            quote: '"Credit goes to arise team.... Really it wouldn\'t be possible without arise teachers support and guidance .... Thank you sooo much Arise 😍.... So much grateful"',
            name: 'Ruchitha',
            university: 'Hebei Medical University, China',
        },
        {
            img: img2,
            quote: '"I am extremely grateful to the entire Arise team for their unwavering support and guidance. Thank you for being an incredible team and a driving force behind this success.🙏🏽"',
            name: 'Tejas, Venkataswamy Reddy',
            university: 'European University',
        },
        {
            img: img3,
            quote: '"Arise is the main path that I have started when I was studying in Asian medical institute I\'m so much grateful for what the faculty have given us and the effort they have put on us. Eternal grateful for arise and the faculty. Thank you so much ❤️"',
            name: 'Bharath, Yadav',
            university: 'Asian Medical Institute',
        },
    ];

    const testimonials2 = [
        {
            img: img4,
            quote: '"Thanks a lot Arise for the proper Guidance. I\'m really happy that I chose Arise to be a part of my FMGE journey."',
            name: 'Amrita, Biju',
            university: 'Georgian National University-SEU',
        },
        {
            img: img5,
            quote: '"Thank you for your help and guidance in my journey. You were a lot of help in this tough course of my life."',
            name: 'Abhishek, Sharma',
            university: 'Orenburg State Medical University',
        },
        {
            img: img6,
            quote: '"Arise made it look simple 🫶🏻 Thank you for your wonderful guidance @Khaleel Sir @Nadeem Sir @Sara Mam (149=0)"',
            name: 'FAZIL, RAHAMAN',
            university: 'KRSU',
        },
    ];

    return (
        <section className={styles.testimonial}>
            <div className="container">
                <div className="row">
                    <h1>
                        What Our <span>Students</span> Say
                    </h1>
                    <div className="col-12">
                        <div className={styles.testimonial_box}>
                            <div className={styles.all_review}>
                                {testimonials1.map((testimonial, index) => (
                                    <div key={index} className={styles.review}>
                                        <div className={styles.review_box}>
                                            <img src={testimonial.img} alt={testimonial.name} />
                                            <div className={styles.detail}>
                                                <p>{testimonial.quote}</p>
                                                <div className={styles.name}>
                                                    <p>
                                                        <strong>{testimonial.name}</strong>
                                                    </p>
                                                    <p>{testimonial.university}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className={styles.all_review1}>
                                {testimonials2.map((testimonial, index) => (
                                    <div key={index} className={styles.review}>
                                        <div className={styles.review_box}>
                                            <img src={testimonial.img} alt={testimonial.name} />
                                            <div className={styles.detail}>
                                                <p>{testimonial.quote}</p>
                                                <div className={styles.name}>
                                                    <p>
                                                        <strong>{testimonial.name}</strong>
                                                    </p>
                                                    <p>{testimonial.university}</p>
                                                </div>
                                            </div>
                                        </div>
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

export default Testimonial;