import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Branches.module.scss";
import map from "../../../assets/images/index-page/map.png"; 

const branches = [
  { name: "Hyderabad", path: "/branches/hyderabad", style: styles.hyd },
  { name: "Delhi", path: "/branches/delhi", style: styles.delhi },
  { name: "Jaipur", path: "/branches/jaipur", style: styles.jaipur },
  { name: "Chennai", path: "/branches/chennai", style: styles.chennai },
  { name: "Kerala", path: "/branches/kerala", style: styles.kerala },
];

const BranchMap = () => {
  return (
    <div className={`${styles.map} text-center`}>
      <img src={map} alt="Branch Map" className={styles.map1} />
      
      {branches.map((branch, index) => (
        <div key={index} className={branch.style}>
          <NavLink to={branch.path}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
              <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
            </svg>
            <span>{branch.name}</span>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default BranchMap;
