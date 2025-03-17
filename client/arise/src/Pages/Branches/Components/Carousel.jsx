import React, { useEffect } from "react";
import BranchImages from "./BranchImages";

const Carousel = ({ branchName }) => {
  const images = BranchImages[branchName] || [];

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min").then((bootstrap) => {
      const carouselElement = document.querySelector(`#carousel-${branchName}`);
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 2000,
          ride: "carousel",
        });
      }
    });
  }, [branchName]);

  return (
    <div id={`carousel-${branchName}`} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))
        ) : (
          <p className="text-center">No images available for {branchName}</p>
        )}
      </div>
      {images.length > 0 && (
        <>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${branchName}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${branchName}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
