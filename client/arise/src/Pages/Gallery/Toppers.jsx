import { useState } from "react";
import styles from "./Gallery.module.scss";
import top1 from '../../assets/images/gallery-page/toppers/020033.png';
import top2 from '../../assets/images/gallery-page/toppers/020023.png';
import top3 from '../../assets/images/gallery-page/toppers/040001.png';
import top4 from '../../assets/images/gallery-page/toppers/020004.png';
import top5 from '../../assets/images/gallery-page/toppers/050021.png';
import top6 from '../../assets/images/gallery-page/toppers/030023.png';
import top7 from '../../assets/images/gallery-page/toppers/040004.png';
import top8 from '../../assets/images/gallery-page/toppers/050033.png';
import top9 from '../../assets/images/gallery-page/toppers/050034.png';

const toppersData = [
    { name: "Diwakar Singh", marks: 243, image: top1 },
    { name: "R.Bhuvaneshwari", marks: 240, image: top2 },
    { name: "Poornesh", marks: 232, image: top3 },
    { name: "Adhesh", marks: 230, image: top4 },
    { name: "V.Kodanda Rama", marks: 229, image: top5 },
    { name: "Mehboob Alam", marks: 227, image: top6 },
    { name: "Prashant", marks: 227, image: top7 },
    { name: "Yashwanth Kumar", marks: 227, image: top8 },
    { name: "Yosuva Praveen", marks: 226, image: top9 }
];

const Toppers = () => {
    const [selectedYear, setSelectedYear] = useState("2025");

    return (
        <section className={styles.toppers_container}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.title}>
                            <h1>ARISE Shining Stars of <span>FMGE</span></h1>
                        </div>

                        <div className={styles.pill_btn}>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${selectedYear === "2025" ? "active" : ""}`}
                                        onClick={() => setSelectedYear("2025")}
                                    >
                                        2025
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            {selectedYear === "2025" && (
                                <div className="tab-pane fade show active">
                                    <div className={styles.toppers}>
                                        <div className={styles.topper_head}>
                                            <h1>Toppers</h1>
                                            <a href="/toppers">
                                                View More
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M10.2563 4.13128C10.598 3.78957 11.152 3.78957 11.4937 4.13128L16.7437 9.38128C17.0854 9.72299 17.0854 10.277 16.7437 10.6187L11.4937 15.8687C11.152 16.2104 10.598 16.2104 10.2563 15.8687C9.91457 15.527 9.91457 14.973 10.2563 14.6313L14.0126 10.875L3.875 10.875C3.39175 10.875 3 10.4832 3 10C3 9.51675 3.39175 9.125 3.875 9.125H14.0126L10.2563 5.36872C9.91457 5.02701 9.91457 4.47299 10.2563 4.13128Z"
                                                        fill="#2540AE"
                                                    />
                                                </svg>
                                            </a>
                                        </div>

                                        <div className={styles.shining_stars}>
                                            {toppersData.map((topper, index) => (
                                                <figure key={index}>
                                                    <img src={topper.image} alt={topper.name} />
                                                    <figcaption>Marks {topper.marks}</figcaption>
                                                    <p>{topper.name}</p>
                                                </figure>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toppers;
