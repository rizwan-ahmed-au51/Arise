import React from 'react';
import style from './Home.module.scss';
import Counter from './count/Counter';

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

                            <div className={style.btn}>
                                <button>View Courses</button>
                                <button>Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Counter />
        </>
    )
}

export default Home