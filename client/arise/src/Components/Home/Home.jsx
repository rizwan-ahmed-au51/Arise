import React from 'react';
import style from './Home.module.scss';
import Counter from './Count/Counter';
import OnlineBatch from './Batches/OnlineBatch';
import Branches from './Branches/Branches';
import Register from './Register/Register';
import About from './About';
import Features from './Features';
import Courses from './Courses/Courses';


const Home = () => {
    return (
        <>
            <section className={style.banner}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Welcome To India's</h2>
                            <h1><span>Best Medical </span>Academy</h1>
                            <h6>Achieve Your Medical Dreams with <br />
                                <span> ARISE Medical Academy</span>
                            </h6>
                            <h4>Start Your <span>FMGE Journey</span></h4>

                            <div className={style.btn1}>
                                <button>View Courses</button>
                                <button>Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Counter />
            <Branches />
            <OnlineBatch />
            <Register
                title={
                    <>
                        Let’s discuss about how we can help your <br />
                        FMGE journey easier
                    </>
                }
                link="https://student.arisemedicalacademy.com/register" />
            <About />
            <Features />
            <Courses />
            <Register
                title={
                    <>
                        Secure your spot and start your journey today
                    </>
                }
                link="https://student.arisemedicalacademy.com/register" />
        </>
    )
}

export default Home;