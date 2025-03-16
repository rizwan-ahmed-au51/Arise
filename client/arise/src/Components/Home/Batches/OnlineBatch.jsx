import React from "react";
import apple from '../../../assets/images/icons/apple.png';
import android from '../../../assets/images/icons/android.png';
import bannerImage from "../../../assets/images/index-page/06 (2).png";
import styles from "./OnlineBatch.module.scss";

const OnlineBatch = () => {
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

            <h6>Online Batches Starting Soon</h6>
            <div className={styles.batchDates}>
              {["Feb 01", "Feb 08", "Feb 15", "Feb 20", "Feb 25", "Mar 01"].map((date, index) => (
                <span key={index} className={styles.batchDate}>{date}</span>
              ))}
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
