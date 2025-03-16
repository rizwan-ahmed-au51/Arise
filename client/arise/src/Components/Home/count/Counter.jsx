import { useEffect, useState } from "react";
import styles from "./count.module.scss";
import Banner from "../../../assets/images/index-page/banner.png";

const Counter = () => {
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
        animateValue(setNum2, 0, 50, 5000);
        animateValue(setNum3, 0, 11, 5000);
        animateValue(setNum4, 0, 5, 5000);
    }, []);

    return (
        <section className={styles.count}>
            <div className={styles.img}>
                <img src={Banner} alt="banner_img" />
            </div>
            <div className={styles.counter}>
                <div>
                    <h1>{num1}+</h1>
                    <h3>Trained Medicos</h3>
                </div>
                <div>
                    <h1>{num2}+</h1>
                    <h3>Qualified Trainers</h3>
                </div>
                <div>
                    <h1>{num3}+</h1>
                    <h3>Years Experience</h3>
                </div>
                <div>
                    <h1>{num4}</h1>
                    <h3>Branches</h3>
                </div>
            </div>
        </section>
    );
};

export default Counter;
