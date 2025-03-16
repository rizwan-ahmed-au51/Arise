import React from "react";
import styles from "../Home.module.scss"; // Import SCSS module
import { NavLink } from "react-router-dom";

const Register = ({ title, link }) => {
    return (
        <section className={styles.register_now}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.content1}>
                            <h2>{title}</h2>

                            <NavLink to={link} >
                                <button> Register Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.0252 4.02533C11.3181 3.73244 11.793 3.73244 12.0859 4.02533L17.5303 9.46978C17.671 9.61043 17.75 9.8012 17.75 10.0001C17.75 10.199 17.671 10.3898 17.5303 10.5304L12.0859 15.9749C11.793 16.2678 11.3181 16.2678 11.0252 15.9749C10.7323 15.682 10.7323 15.2071 11.0252 14.9142L15.1893 10.7501H3C2.58579 10.7501 2.25 10.4143 2.25 10.0001C2.25 9.58589 2.58579 9.25011 3 9.25011H15.1893L11.0252 5.08599C10.7323 4.7931 10.7323 4.31823 11.0252 4.02533Z"
                                            fill="#2540AE"
                                        />
                                    </svg>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
