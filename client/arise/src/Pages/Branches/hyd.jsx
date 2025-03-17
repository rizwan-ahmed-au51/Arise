import React from 'react';
import styles from '../Branches/Branches.module.scss';
import hyd2 from "../../assets/images/branches-page/hyd/2.jpg";
import Carousel from './Components/Carousel';
import BranchInfo from './Components/BranchInfo';
import ContactSection from './Components/ContactSection';
import VideoSection from './Components/VideoSection';
import BranchMap from './Components/BranchMap';


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
                                    <Carousel branchName="hyderabad" />
                                </div>
                                <BranchMap />
                            </div>

                            <div className={styles.IndiaMapMd}>
                                <div className={styles.name}>
                                    <div className={styles.heading}>
                                        <h2>Choose your Campus</h2>
                                        <h1>Hyderabad</h1>
                                    </div>
                                </div>
                                <BranchMap />
                                <Carousel branchName="hyderabad" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoSection />
            <BranchInfo
                branchName="Hyderabad"
                description="Serving as our headquarters, our central office in Hyderabad embodies our commitment to
                                excellence in medical education. Here, we harness innovation and expertise to deliver
                                unparalleled learning experiences."
                image={hyd2}
                registerLink="https://register.arisemedicalacademy.com/"
            />

            <ContactSection
                phone={["+91-7680929292", "+91-7416341971"]}
                email="info@arisemedicalacademy"
                address="Arise Medical Academy 2nd Floor, Above Indian Bank, Opp Olive Hospital, Nanal Nagar,Mehedipatnam, Hyderababd"
                mapLink="https://maps.app.goo.gl/UVUmdasrLdE8V7nf6"
                whatsappLink="https://wa.me/+91-7680929292"
            />

            <section className={`${styles.googleMap} p-4`}>
                <div className="conatiner">
                    <div className="row">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.1438695434213!2d78.42398267323455!3d17.39389458349441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96e3b5970605%3A0x482a5c595c3d2d2a!2sArise%20Medical%20Academy%20-%20FMGE%20Coaching%20%7C%20MCI%20Training%20Institute!5e1!3m2!1sen!2sin!4v1736592890918!5m2!1sen!2sin"
                            width="100%" title="Embedded Example Map" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default hyd