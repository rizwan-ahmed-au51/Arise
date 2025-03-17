import React from 'react';
import styles from '../Branches/Branches.module.scss';
import jaipur8 from "../../assets/images/branches-page/jaipur/8.jpeg";
import ContactSection from './Components/ContactSection';
import VideoSection from './Components/VideoSection';
import BranchInfo from './Components/BranchInfo';
import Carousel from './Components/Carousel';
import BranchMap from './Components/BranchMap';

const jaipur = () => {
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
                    <h1>Jaipur</h1>
                  </div>

                  <Carousel branchName="jaipur" />
                </div>
                <BranchMap />
              </div>

              <div className={styles.IndiaMapMd}>
                <div className={styles.name}>
                  <div className={styles.heading}>
                    <h2>Choose your Campus</h2>
                    <h1>Jaipur</h1>
                  </div>

                </div>

                <BranchMap />
                <Carousel branchName="jaipur" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <VideoSection />

      <BranchInfo
        branchName="Jaipur"
        description="Amidst the royal grandeur of Jaipur, our branch embodies the spirit of dedication and
                                perseverance. Here, we instil in our students the values of compassion and
                                professionalism, preparing them to make a positive impact in the field of medicine."
        image={jaipur8}
        registerLink="https://registerjaipur.arisemedicalacademy.com/"

      />

      <ContactSection
        phone={["+91-99291 13115"]}
        email="info@arisemedicalacademy."
        address="Arise Medical Academy Plot No-26, Tonk Road, Near Pushp Enclave,Krishna Vihar,
                                    Sector-5, Pratap Nagar, Jaipur-302033"
        mapLink="https://maps.app.goo.gl/Ju6mLEa2hQ5PxtSr5"
        whatsappLink="https://wa.me/+91-99291 13115"
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

export default jaipur;