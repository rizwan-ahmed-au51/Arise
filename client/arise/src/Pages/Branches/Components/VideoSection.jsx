import React, { useRef, useState } from "react";
import styles from "../Branches.module.scss";
import glimpse from "../../../assets/images/video/glimpse.mp4";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 300); // Small delay for smooth opening
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsModalOpen(false);
  };

 

  return (
    <section className={styles.video_container}>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <div className={styles.video_head}>
              <div
                className={styles.video_wrapper}
                onClick={openModal}
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="126"
                  viewBox="0 0 128 126"
                  fill="none"
                >
                  <rect x="0.5" width="127" height="126" rx="63" fill="#2540AE" />
                  <path
                    d="M48.9768 80.3271C48.5851 80.3271 48.2095 80.172 47.9325 79.896C47.6556 79.6199 47.5 79.2455 47.5 78.8551V46.4717C47.5 46.2159 47.567 45.9646 47.6941 45.7424C47.8213 45.5203 48.0044 45.335 48.2253 45.2048C48.4462 45.0747 48.6974 45.0041 48.9539 45.0002C49.2105 44.9962 49.4637 45.059 49.6886 45.1823L79.2239 61.374C79.4554 61.501 79.6485 61.6877 79.783 61.9145C79.9174 62.1413 79.9884 62.4 79.9884 62.6634C79.9884 62.9269 79.9174 63.1855 79.783 63.4123C79.6485 63.6391 79.4554 63.8258 79.2239 63.9529L49.6886 80.1446C49.4705 80.2642 49.2257 80.327 48.9768 80.3271Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <button className={styles.close_btn} onClick={closeModal}>
              ✖
            </button>
            <video ref={videoRef} controls>
              <source src={glimpse} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
           
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
