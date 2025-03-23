import React, { useState, useEffect } from "react";
import apple from '../../../assets/images/icons/apple.png';
import android from '../../../assets/images/icons/android.png';
import bannerImage from "../../../assets/images/index-page/06 (2).png";
import styles from "./OnlineBatch.module.scss";

const OnlineBatch = () => {
  // State to store the fetched batch dates
  const [batchDates, setBatchDates] = useState([]);

  // Fetch batch dates from the API
  useEffect(() => {
    const fetchBatchDates = async () => {
      try {
        const response = await fetch("http://localhost:4000/batchdates");
        const data = await response.json();
        // Extract the `date` property from each object
        const dates = data.map((item) => item.date);
        setBatchDates(dates); // Update state with extracted dates
      } catch (error) {
        console.error("Error fetching batch dates:", error);
      }
    };

    fetchBatchDates();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className={styles.online_Batches}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>
              Discover <span>Online</span> Batches
            </h1>
            <p>
              Stay updated with instant notifications for your online sessions, live links, and schedule
              changes. Stay organized and ahead in your learning journey.
            </p>

            <div className={styles.datesContainer}>
              <h6>Online Batches Starting Soon</h6>
              <div className={styles.Dates}>
                {batchDates.map((date, index) => (
                  <span key={index} className={styles.dateContainer}>
                    {date}
                  </span>
                ))}
              </div>
            </div>

            <p id="download">Download the App Now</p>
            <div className={styles.icons}>
              <a href="https://play.google.com/store/apps/details?id=com.arisemobile.app" target="_blank" rel="noopener noreferrer">
                <img src={android} alt="Download for Android" />
              </a>
              <a href="https://apps.apple.com/in/app/arise-medical-academy/id1581256443" target="_blank" rel="noopener noreferrer">
                <img src={apple} alt="Download for iOS" />
              </a>
            </div>

            <img src={bannerImage} alt="Online Batch Banner" className={styles.bannerImage} />

            <h4>
              Join over <span>40,000+</span> successful medical aspirants <br />
              Start your Preparation Right Now
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineBatch;