import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Branches.module.scss";

const BranchInfo = ({ branchName, description, image, registerLink }) => {
  return (
    <section className={styles.vision_section}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className={styles.image}>
              <img src={image} alt={branchName} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className={styles.vision_text_sec}>
              <h1>{branchName}</h1>
              <p>{description}</p>
              <NavLink to={registerLink}>
                <button>Register Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchInfo;
