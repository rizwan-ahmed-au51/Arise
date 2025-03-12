import React from 'react';
import styles from "./count.module.scss";
import Banner from "../../../assets/images/index-page/banner.png";

const Counter = () => {
    return (
        <section className={styles.count}>
            <div className={styles.img}>
                <img src={Banner} alt="banner_img" />

            </div>
            <div className={styles.counter}>
                <div>
                    <h1><span id="num1"></span>+</h1>
                    <h3>Trained Medicos</h3>
                </div>
                <div>
                    <h1><span id="num2">50</span>+</h1>
                    <h3>Qualified Trainers</h3>
                </div>
                <div>
                    <h1><span id="num3">11</span>+</h1>
                    <h3>Years Experience </h3>
                </div>
                <div>
                    <h1><span id="num4">4</span>+</h1>
                    <h3>Branches </h3>
                </div>
            </div>
        </section>
    )
}

export default Counter