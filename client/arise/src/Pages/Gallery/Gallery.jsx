import React from 'react';
// import styles from './Gallery.module.scss';
import Toppers from './Toppers';
import banner from '../../assets/images/gallery-page/04.jpg';
import Celebrations from './Celebrations';


const Gallery = () => {
  return (
    <main>
      <section style={{ marginTop: "60px" }}>
        <img width="100%" src={banner} alt="" />
      </section>

      <Toppers />
      <Celebrations />
      <Celebrations />
    </main>
  );
};


export default Gallery;