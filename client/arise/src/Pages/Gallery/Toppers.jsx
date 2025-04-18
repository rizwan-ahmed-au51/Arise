import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Gallery.module.scss";
import axios from "axios";

const Toppers = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2025");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/topper`)
      .then((res) => {
        // Corrected: your actual topper array is in res.data.data
        setData(res.data.data || []);
      })
      .catch((err) => {
        alert("Failed to load topper data");
        console.error(err);
      });
  }, []);

  const filteredData = data.filter(tpr => tpr.year === selectedYear);

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
                {["2024", "2025"].map((yr) => (
                  <li className="nav-item" key={yr}>
                    <button
                      className={`nav-link ${selectedYear === yr ? "active" : ""}`}
                      onClick={() => setSelectedYear(yr)}
                    >
                      {yr}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className={styles.toppers}>
                  <div className={styles.topper_head}>
                    <h1>Toppers</h1>
                    <button
                      onClick={() => navigate("/topperlist")}
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
                    {filteredData.length > 0 ? (
                      filteredData.slice(0, 9).map((tpr, index) => (
                        <figure key={index}>
                          <img
                            src={`http://localhost:4000${tpr.path}`}
                            alt={tpr.stdname}
                            loading="lazy"
                          />
                          <figcaption>Marks {tpr.marks}</figcaption>
                          <p>{tpr.stdname}</p>
                        </figure>
                      ))
                    ) : (
                      <p className="text-center mt-3">No toppers found for {selectedYear}.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppers;
