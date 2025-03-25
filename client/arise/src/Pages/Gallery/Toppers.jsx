// import { useEffect, useState } from "react";
// import styles from "./Gallery.module.scss";
// import axios from "axios";


// const Toppers = () => {
//     const [data, setData] = useState([]);
//     const [selectedYear, setSelectedYear] = useState("2025");

//     useEffect(() => {
//         axios.get(`http://localhost:4000/topper`)
//             .then((res) => {
//                 setData(res.data)
//             })
//             .catch((err) => {
//                 alert(err);
//             });
//     })
//     return (
//         <section className={styles.toppers_container}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className={styles.title}>
//                             <h1>ARISE Shining Stars of <span>FMGE</span></h1>
//                         </div>

//                         <div className={styles.pill_btn}>
//                             <ul className="nav nav-pills">
//                                 <li className="nav-item">
//                                     <button
//                                         className={`nav-link ${selectedYear === "2025" ? "active" : ""}`}
//                                         onClick={() => setSelectedYear("2025")}
//                                     >
//                                         2025
//                                     </button>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="tab-content">
//                             {selectedYear === "2025" && (
//                                 <div className="tab-pane fade show active">
//                                     <div className={styles.toppers}>
//                                         <div className={styles.topper_head}>
//                                             <h1>Toppers</h1>
//                                             <a href="/toppers">
//                                                 View More
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                                                     <path fillRule="evenodd" clipRule="evenodd"
//                                                         d="M10.2563 4.13128C10.598 3.78957 11.152 3.78957 11.4937 4.13128L16.7437 9.38128C17.0854 9.72299 17.0854 10.277 16.7437 10.6187L11.4937 15.8687C11.152 16.2104 10.598 16.2104 10.2563 15.8687C9.91457 15.527 9.91457 14.973 10.2563 14.6313L14.0126 10.875L3.875 10.875C3.39175 10.875 3 10.4832 3 10C3 9.51675 3.39175 9.125 3.875 9.125H14.0126L10.2563 5.36872C9.91457 5.02701 9.91457 4.47299 10.2563 4.13128Z"
//                                                         fill="#2540AE"
//                                                     />
//                                                 </svg>
//                                             </a>
//                                         </div>

//                                         <div className={styles.shining_stars}>
//                                             {data.map((tpr, index) => (
//                                                 <figure key={index}>
//                                                     <img src={`http://localhost:4000/uploads/${tpr.filename}`} alt={tpr.stdname} />
//                                                     <figcaption>Marks {tpr.marks}</figcaption>
//                                                     <p>{tpr.stdname}</p>
//                                                 </figure>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Toppers;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Gallery.module.scss";
import axios from "axios";

const Toppers = () => {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState("2025");
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        axios.get(`http://localhost:4000/topper`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err);
            });
    }, []); // Added empty dependency array to prevent infinite requests

    // Function to handle view more click
    const handleViewMore = () => {
        navigate('/topperlist'); // Redirect to the full list component
    };

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
                                            <button
                                                onClick={handleViewMore}
                                                className={styles.viewMoreBtn}
                                            >
                                                View More
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M10.2563 4.13128C10.598 3.78957 11.152 3.78957 11.4937 4.13128L16.7437 9.38128C17.0854 9.72299 17.0854 10.277 16.7437 10.6187L11.4937 15.8687C11.152 16.2104 10.598 16.2104 10.2563 15.8687C9.91457 15.527 9.91457 14.973 10.2563 14.6313L14.0126 10.875L3.875 10.875C3.39175 10.875 3 10.4832 3 10C3 9.51675 3.39175 9.125 3.875 9.125H14.0126L10.2563 5.36872C9.91457 5.02701 9.91457 4.47299 10.2563 4.13128Z"
                                                        fill="#2540AE"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className={styles.shining_stars}>
                                            {/* Show only first 9 items */}
                                            {data.slice(0, 9).map((tpr, index) => (
                                                <figure key={index}>
                                                    <img
                                                        src={`http://localhost:4000/uploads/${tpr.filename}`}
                                                        alt={tpr.stdname}
                                                        loading="lazy" // Added for performance
                                                    />
                                                    <figcaption>Marks {tpr.marks}</figcaption>
                                                    <p>{tpr.stdname}</p>
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