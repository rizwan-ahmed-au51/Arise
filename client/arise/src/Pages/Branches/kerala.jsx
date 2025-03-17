import React from 'react';
import styles from '../Branches/Branches.module.scss';
import kerala5 from "../../assets/images/branches-page/kerala/5.jpg";
import Carousel from './Components/Carousel';
import BranchMap from './Components/BranchMap';
import VideoSection from './Components/VideoSection';
import BranchInfo from './Components/BranchInfo';
import ContactSection from './Components/ContactSection';

const kerala = () => {
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
                    <h1>Kerala</h1>
                  </div>
                  <Carousel branchName="kerala" />
                </div>
                <BranchMap />

              </div>

              <div className={styles.IndiaMapMd}>
                <div className={styles.name}>
                  <div className={styles.heading}>
                    <h2>Choose your Campus</h2>
                    <h1>Kerala</h1>
                  </div>

                </div>
                <BranchMap />
                <Carousel branchName="kerala" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoSection />

      <BranchInfo
        branchName="Kerala"
        description="Nestled amidst the serene landscapes of Kerala, our branch extends our mission to the
                                southern region of India. With a focus on holistic learning and personal growth, we
                                nurture the talents of budding doctors in this beautiful state."
        image={kerala5}
        registerLink="https://registerkerala.arisemedicalacademy.com/"

      />

      <ContactSection
        phone={["+91-81369 32666"]}
        email="arisemedical academy.kerala@yahoo.com"
        address="Arise Medical Academy 2nd Floor, Kingdom Tower, Manna, Taliparamba, Kannur,
                                        Kerala"
        mapLink="https://maps.app.goo.gl/Nu6kfiuynCKBHGcT6"
        whatsappLink="https://wa.me/+9181369 32666"
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

export default kerala;