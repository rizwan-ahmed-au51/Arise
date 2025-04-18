import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./Gallery.module.scss";

const ToppersList = () => {
  const [activeTab, setActiveTab] = useState('2025');
  const [toppersData, setToppersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/topper')
      .then(response => {
        setToppersData(Array.isArray(response.data.data) ? response.data.data : []);
      })
      .catch(error => {
        console.error("Error fetching toppers:", error);
        setError("Failed to load toppers data");
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderToppers = (year) => {
    // Safely filter the array
    const filteredToppers = Array.isArray(toppersData)
      ? toppersData.filter(topper => topper?.year === year)
      : [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return filteredToppers.length > 0 ? (
      filteredToppers.map((topper, index) => (
        <figure key={index}>
          <img
            src={`http://localhost:4000${topper.path}`}
            alt={topper.stdname}
            loading="lazy"
          />
          <figcaption>Marks {topper.marks}</figcaption>
          <p>{topper.stdname}</p>
        </figure>
      ))
    ) : (
      <p>No toppers available for {year}</p>
    );
  };

  return (
    <main>
      <section className={styles.toppers_container}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.title}>
                <h1>ARISE Shining Stars of <span>FMGE</span></h1>
              </div>

              <div className={styles.pill_btn}>
                <ul className={`nav nav-pills ${styles.nav_pills}`} id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === '2025' ? 'active' : ''}`}
                      type="button"
                      role="tab"
                      onClick={() => handleTabChange('2025')}
                    >
                      2025
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === '2024' ? 'active' : ''}`}
                      type="button"
                      role="tab"
                      onClick={() => handleTabChange('2024')}
                    >
                      2024
                    </button>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === '2025' ? 'show active' : ''}`}>
                  <div className={styles.toppers}>
                    <div className={styles.shining_stars}>
                      {renderToppers('2025')}
                    </div>
                  </div>
                </div>

                <div className={`tab-pane fade ${activeTab === '2024' ? 'show active' : ''}`}>
                  <div className={styles.toppers}>
                    <div className={styles.shining_stars}>
                      {renderToppers('2024')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ToppersList;