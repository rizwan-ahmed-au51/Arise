import React from 'react';
import styles from '../Branches/Branches.module.scss';
import { NavLink } from 'react-router-dom';
import map from "../../assets/images/index-page/map.png";
import BranchCarousel1 from "../../assets/images/branches-page/hyd/1.png";
import BranchCarousel2 from "../../assets/images/branches-page/hyd/2.jpg";
import BranchCarousel3 from "../../assets/images/branches-page/hyd/3.JPG";
import BranchCarousel4 from "../../assets/images/branches-page/hyd/4.jpg";
import BranchCarousel5 from "../../assets/images/branches-page/hyd/5.jpeg";
import BranchCarousel6 from "../../assets/images/branches-page/hyd/6.jpg";
import BranchCarousel7 from "../../assets/images/branches-page/hyd/7.jpg";
import BranchCarousel8 from "../../assets/images/branches-page/hyd/8.jpg";
import BranchCarousel9 from "../../assets/images/branches-page/hyd/9.jpg";
import BranchCarousel10 from "../../assets/images/branches-page/hyd/10.jpg";

const hyd = () => {
    return (
        <main>
            <section className={styles.branch}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.IndiaMap}>
                                <div className={styles.name}>
                                    <div className={styles.heading}>
                                        <h2>Choose your Campus</h2>
                                        <h1>Hyderabad</h1>
                                    </div>

                                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="2000">
                                                <img src={BranchCarousel1} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel2} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel3} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel4} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel5} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel10} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel6} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel7} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel8} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={BranchCarousel9} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>

                                </div>

                                <div className={`${styles.map} text-center`}>

                                    <img src={map} alt="" className={styles.map1} />



                                    <div className={styles.hyd}>
                                        <NavLink to="/branches/hyderabad"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                            viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Hyderabad</span></NavLink>
                                    </div>
                                    <div className={styles.delhi}>

                                        <NavLink to="/branches/delhi"><svg xmlns="http://www.w3.org/2000/svg" width="21"
                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Delhi</span></NavLink>
                                    </div>
                                    <div className={styles.jaipur}>
                                        <NavLink to="/branches/jaipur"><svg xmlns="http://www.w3.org/2000/svg" width="21"

                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Jaipur</span></NavLink>
                                    </div>
                                    <div className={styles.chennai}>

                                        <NavLink to="/branches/chennai"><svg xmlns="http://www.w3.org/2000/svg" width="21"
                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Chennai</span></NavLink>
                                    </div>
                                    <div className={styles.kerala}>

                                        <NavLink to="/branches/kerala"><svg xmlns="http://www.w3.org/2000/svg" width="21"
                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Kerala</span></NavLink>
                                    </div>
                                </div>


                            </div>

                            <div className={styles.IndiaMapMd}>
                                <div className={styles.name}>
                                    <div className={styles.heading}>
                                        <h2>Choose your Campus</h2>
                                        <h1>Hyderabad</h1>
                                    </div>

                                </div>

                                <div className={`${styles.map} text-center`}>

                                    <img src={map} alt="" className={styles.map1} />



                                    <div className={styles.hyd}>
                                        <NavLink to="/branches/hyderabad"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                            viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Hyderabad</span></NavLink>
                                    </div>
                                    <div className={styles.delhi}>

                                        <NavLink to="/branches/delhi"><svg xmlns="http://www.w3.org/2000/svg" width="21"
                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Delhi</span></NavLink>
                                    </div>
                                    <div className={styles.jaipur}>
                                        <NavLink to="/branches/jaipur"><svg xmlns="http://www.w3.org/2000/svg" width="21"

                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Jaipur</span></NavLink>
                                    </div>
                                    <div className={styles.chennai}>

                                        <NavLink to="/branches/chennai"><svg xmlns="http://www.w3.org/2000/svg" width="21"
                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Chennai</span></NavLink>
                                    </div>
                                    <div className={styles.kerala}>

                                        <NavLink to="/branches/kerala"><svg xmlns="http://www.w3.org/2000/svg" width="21"
                                            height="21" viewBox="0 0 21 21" fill="none">
                                            <circle opacity="0.15" cx="10.6064" cy="10.7578" r="10" fill="#2540AE" />
                                            <circle cx="10.6064" cy="10.7578" r="4" fill="#2540AE" />
                                        </svg><span>Kerala</span></NavLink>
                                    </div>
                                </div>

                                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="2000">
                                            <img src={BranchCarousel1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel3} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel4} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel5} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel10} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel6} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel7} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel8} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={BranchCarousel9} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.video_container}>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.video_head}>
                                <div className={styles.video_wrapper}>
                                    <NavLink to="./assets/images/video/glimpse.mp4" className="popup-video"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="128" height="126"
                                        viewBox="0 0 128 126" fill="none">
                                        <rect x="0.5" width="127" height="126" rx="63" fill="#2540AE" />
                                        <path
                                            d="M48.9768 80.3271C48.5851 80.3271 48.2095 80.172 47.9325 79.896C47.6556 79.6199 47.5 79.2455 47.5 78.8551V46.4717C47.5 46.2159 47.567 45.9646 47.6941 45.7424C47.8213 45.5203 48.0044 45.335 48.2253 45.2048C48.4462 45.0747 48.6974 45.0041 48.9539 45.0002C49.2105 44.9962 49.4637 45.059 49.6886 45.1823L79.2239 61.374C79.4554 61.501 79.6485 61.6877 79.783 61.9145C79.9174 62.1413 79.9884 62.4 79.9884 62.6634C79.9884 62.9269 79.9174 63.1855 79.783 63.4123C79.6485 63.6391 79.4554 63.8258 79.2239 63.9529L49.6886 80.1446C49.4705 80.2642 49.2257 80.327 48.9768 80.3271Z"
                                            fill="white" />
                                    </svg></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.vision_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className={styles.image}>
                                <img src={BranchCarousel2} alt="Class" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className={styles.vision_text_sec}>
                                <h1>Hyderabad</h1>
                                <p>Serving as our headquarters, our central office in Hyderabad embodies our commitment to
                                    excellence in medical education. Here, we harness innovation and expertise to deliver
                                    unparalleled learning experiences.</p>

                                <NavLink to="https://register.arisemedicalacademy.com/"><button>Register Now</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contact_sec}>
                <div className="container">
                    <div className="row">
                        <div className={styles.contact_sec_box}>
                            <NavLink style={{ textDecoration: "none" }} to="https://wa.me/+91-7680929292">
                                <div className={styles.call}>
                                    <div className={styles.icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.34961 4.49961C1.34961 2.75991 2.75991 1.34961 4.49961 1.34961H5.87124C6.80044 1.34961 7.61041 1.98201 7.83577 2.88347L8.94157 7.30666C9.13917 8.09708 8.84383 8.92895 8.19203 9.41779L6.89841 10.388C6.8123 10.4526 6.81046 10.5322 6.82346 10.5677C7.94379 13.6261 10.3731 16.0554 13.4315 17.1758C13.467 17.1888 13.5466 17.1869 13.6112 17.1008L14.5814 15.8072C15.0703 15.1554 15.9021 14.86 16.6926 15.0576L21.1157 16.1634C22.0172 16.3888 22.6496 17.1988 22.6496 18.128V19.4996C22.6496 21.2393 21.2393 22.6496 19.4996 22.6496H17.2496C8.46828 22.6496 1.34961 15.5309 1.34961 6.74961V4.49961ZM4.49961 3.14961C3.75402 3.14961 3.14961 3.75402 3.14961 4.49961V6.74961C3.14961 14.5368 9.46239 20.8496 17.2496 20.8496H19.4996C20.2452 20.8496 20.8496 20.2452 20.8496 19.4996V18.128C20.8496 18.0247 20.7793 17.9347 20.6792 17.9097L16.256 16.8039C16.1682 16.7819 16.0757 16.8148 16.0214 16.8872L15.0512 18.1808C14.5526 18.8456 13.6582 19.1758 12.8124 18.8659L13.0526 18.2102L12.8124 18.8659C9.25686 17.5635 6.43574 14.7424 5.13329 11.1868C4.82343 10.341 5.15363 9.44659 5.81841 8.94801L7.11203 7.97779C7.18445 7.92348 7.21727 7.83105 7.19531 7.74322L6.08952 3.32004C6.06448 3.21988 5.97448 3.14961 5.87124 3.14961H4.49961Z"
                                                fill="#2540AE" />
                                        </svg>
                                    </div>

                                    <div className={styles.call_details}>
                                        <h6>Call Us</h6>
                                        <p>Mon - Sun 8.00 AM - 8.00 PM</p>

                                        <p>+91-76809 29292</p>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink style={{ textDecoration: "none" }} to="mailto:info@arisemedicalacademy">
                                <div className={styles.call}>
                                    <div className={styles.icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 25 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.68262 6.74998C1.68262 5.01028 3.09292 3.59998 4.83262 3.59998H19.8326C21.5723 3.59998 22.9826 5.01028 22.9826 6.74998V17.25C22.9826 18.9897 21.5723 20.4 19.8326 20.4H4.83262C3.09292 20.4 1.68262 18.9897 1.68262 17.25V6.74998ZM3.48262 6.74998V6.99269C3.48262 7.46149 3.72583 7.89673 4.12509 8.14243L11.6251 12.7578C12.059 13.0248 12.6062 13.0248 13.0401 12.7578L20.5401 8.14242C20.9394 7.89673 21.1826 7.46149 21.1826 6.99269V6.74998C21.1826 6.00439 20.5782 5.39998 19.8326 5.39998H4.83262C4.08703 5.39998 3.48262 6.00439 3.48262 6.74998ZM21.1826 9.86058L13.9835 14.2908C12.9711 14.9138 11.6941 14.9138 10.6817 14.2908L3.48262 9.86058V17.25C3.48262 17.9956 4.08703 18.6 4.83262 18.6H19.8326C20.5782 18.6 21.1826 17.9956 21.1826 17.25V9.86058Z"
                                                fill="#2540AE" />
                                        </svg>
                                    </div>

                                    <div className={styles.call_details}>
                                        <h6>Chat to Support</h6>
                                        <p>We’re here to help.</p>

                                        <p>info@arisemedicalacademy.</p>
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink style={{ textDecoration: "none" }} to="https://maps.app.goo.gl/UVUmdasrLdE8V7nf6">
                                <div className={styles.call}>
                                    <div className={styles.icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 21 20"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M10.7996 3.0681C10.7264 2.99488 10.6076 2.99488 10.5344 3.0681L5.16699 8.43552V16.5624C5.16699 16.6659 5.25094 16.7499 5.35449 16.7499H8.04199V13.4374C8.04199 12.5054 8.79751 11.7499 9.72949 11.7499H11.6045C12.5365 11.7499 13.292 12.5054 13.292 13.4374V16.7499H15.9795C16.083 16.7499 16.167 16.6659 16.167 16.5624V8.43552L10.7996 3.0681ZM17.667 9.93552L18.2617 10.5302C18.5546 10.8231 19.0294 10.8231 19.3223 10.5302C19.6152 10.2373 19.6152 9.76242 19.3223 9.46953L11.8602 2.00744C11.2012 1.34843 10.1328 1.34843 9.47375 2.00744L3.88701 7.59418C3.88678 7.59441 3.88724 7.59395 3.88701 7.59418L2.01166 9.46953C1.71877 9.76242 1.71877 10.2373 2.01166 10.5302C2.30456 10.8231 2.77943 10.8231 3.07232 10.5302L3.66699 9.93552V16.5624C3.66699 17.4943 4.42251 18.2499 5.35449 18.2499H15.9795C16.9115 18.2499 17.667 17.4943 17.667 16.5624V9.93552ZM11.792 16.7499H9.54199V13.4374C9.54199 13.3338 9.62594 13.2499 9.72949 13.2499H11.6045C11.708 13.2499 11.792 13.3338 11.792 13.4374V16.7499Z"
                                                fill="#2540AE" />
                                        </svg>
                                    </div>

                                    <div className={styles.call_details}>
                                        <h6>Address</h6>


                                        <p>Arise Medical Academy 2nd Floor, Above Indian Bank, Opp Olive Hospital, Nanal
                                            Nagar,
                                            Mehedipatnam, Hyderababd</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.googleMap} p-4`}>
                <div className="conatiner">
                    <div className="row">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.1438695434213!2d78.42398267323455!3d17.39389458349441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96e3b5970605%3A0x482a5c595c3d2d2a!2sArise%20Medical%20Academy%20-%20FMGE%20Coaching%20%7C%20MCI%20Training%20Institute!5e1!3m2!1sen!2sin!4v1736592890918!5m2!1sen!2sin"
                            width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default hyd