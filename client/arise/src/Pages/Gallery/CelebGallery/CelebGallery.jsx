import React, { useEffect } from 'react';
import styles from './CelebGallery.module.scss';

import img1 from '../../../assets/images/gallery-page/1.jpg';
import img2 from '../../../assets/images/gallery-page/2.jpg';
import img3 from '../../../assets/images/gallery-page/3.jpg';
import img4 from '../../../assets/images/gallery-page/4.jpg';
import img5 from '../../../assets/images/gallery-page/5.jpg';
import img6 from '../../../assets/images/gallery-page/6.jpg';
import img7 from '../../../assets/images/gallery-page/7.jpg';
import img8 from '../../../assets/images/gallery-page/8.jpg';
import img9 from '../../../assets/images/gallery-page/9.jpg';
import img10 from '../../../assets/images/gallery-page/10.jpg';
import img11 from '../../../assets/images/gallery-page/11.jpg';
import img12 from '../../../assets/images/gallery-page/12.jpg';
import img13 from '../../../assets/images/gallery-page/13.jpg';
import img14 from '../../../assets/images/gallery-page/14.jpg';
import img15 from '../../../assets/images/gallery-page/15.jpg';
import img16 from '../../../assets/images/gallery-page/16.jpg';
import img17 from '../../../assets/images/gallery-page/17.jpg';
import img18 from '../../../assets/images/gallery-page/18.jpg';
import img19 from '../../../assets/images/gallery-page/19.jpg';
import img20 from '../../../assets/images/gallery-page/20.jpg';
import img22 from '../../../assets/images/gallery-page/22.jpg';
import img23 from '../../../assets/images/gallery-page/23.jpg';
import img24 from '../../../assets/images/gallery-page/24.jpg';
import img25 from '../../../assets/images/gallery-page/25.jpg';
import img26 from '../../../assets/images/gallery-page/26.jpg';
import img27 from '../../../assets/images/gallery-page/27.jpg';
import img28 from '../../../assets/images/gallery-page/28.jpg';
import img29 from '../../../assets/images/gallery-page/29.jpg';
import img30 from '../../../assets/images/gallery-page/30.jpg';
import img31 from '../../../assets/images/gallery-page/31.jpg';
import img32 from '../../../assets/images/gallery-page/32.jpg';
import img33 from '../../../assets/images/gallery-page/33.jpg';
import img34 from '../../../assets/images/gallery-page/34.jpg';
import img35 from '../../../assets/images/gallery-page/35.jpg';
import img36 from '../../../assets/images/gallery-page/36.jpg';
import img37 from '../../../assets/images/gallery-page/37.jpg';
import img38 from '../../../assets/images/gallery-page/38.jpg';
import img39 from '../../../assets/images/gallery-page/39.jpg';
import img40 from '../../../assets/images/gallery-page/40.jpg';
import img41 from '../../../assets/images/gallery-page/41.jpg';
import img42 from '../../../assets/images/gallery-page/42.jpg';
import img43 from '../../../assets/images/gallery-page/43.jpg';
import img45 from '../../../assets/images/gallery-page/45.jpg';
import img46 from '../../../assets/images/gallery-page/46.jpg';
import img47 from '../../../assets/images/gallery-page/47.jpg';
import img48 from '../../../assets/images/gallery-page/48.jpg';
import img49 from '../../../assets/images/gallery-page/49.jpg';
import img50 from '../../../assets/images/gallery-page/50.jpg';
import img51 from '../../../assets/images/gallery-page/51.jpg';
import img52 from '../../../assets/images/gallery-page/52.jpg';
import img53 from '../../../assets/images/gallery-page/53.jpg';
import img54 from '../../../assets/images/gallery-page/54.jpg';
import img55 from '../../../assets/images/gallery-page/55.jpg';
import img56 from '../../../assets/images/gallery-page/56.jpg';
import img57 from '../../../assets/images/gallery-page/57.jpg';
import diwali1 from '../../../assets/images/gallery-page/dewali/1.jpg';
import diwali2 from '../../../assets/images/gallery-page/dewali/2.jpg';
import diwali3 from '../../../assets/images/gallery-page/dewali/3.jpg';
import diwali4 from '../../../assets/images/gallery-page/dewali/4.jpg';
import diwali5 from '../../../assets/images/gallery-page/dewali/5.jpg';
import diwali6 from '../../../assets/images/gallery-page/dewali/6.jpg';

const CelebGallery = () => {
    // Combine all images into a single array
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
        img22, img23, img24, img25, img26, img27, img28, img29, img30, img31,
        img32, img33, img34, img35, img36, img37, img38, img39, img40, img41,
        img42, img43, img45, img46, img47, img48, img49, img50, img51, img52,
        img53, img54, img55, img56, img57,
        diwali1, diwali2, diwali3, diwali4, diwali5, diwali6,
    ];

    useEffect(() => {
        const obj = document.getElementById(styles.gallery);
        const time = 10000;

        const animStart = () => {
            if (!obj.classList.contains(styles.active1)) {
                obj.classList.add(styles.active1);
                setTimeout(() => {
                    animEnd();
                }, time);
            }
        };

        const animEnd = () => {
            obj.classList.remove(styles.active1);
            void obj.offsetWidth;
        };

        document.addEventListener("scroll", animStart);
        window.addEventListener("resize", animStart);
        animStart();

        return () => {
            document.removeEventListener("scroll", animStart);
            window.removeEventListener("resize", animStart);
        };
    }, []);

    return (
        <main>
            <section className={styles.collection}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="368" height="2" viewBox="0 0 368 2"
                                    fill="none">
                                    <path d="M367.5 1L-1.14441e-05 1" stroke="url(#paint0_linear_295_13580)"
                                        stroke-width="2" />
                                    <defs>
                                        <linearGradient id="paint0_linear_295_13580" x1="367.5" y1="0.5" x2="166.523"
                                            y2="0.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6B83E5" />
                                            <stop offset="1" stop-color="#666666" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h1><span>Celebrations</span></h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="368" height="2" viewBox="0 0 368 2"
                                    fill="none">
                                    <path d="M0.5 1L368 1.00003" stroke="url(#paint0_linear_295_13582)" stroke-width="2" />
                                    <defs>
                                        <linearGradient id="paint0_linear_295_13582" x1="0.5" y1="1.5" x2="201.477"
                                            y2="1.50002" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6B83E5" />
                                            <stop offset="1" stop-color="#666666" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.gallery_sec}>
                <div id={styles.gallery}>
                    {images.map((image, index) => (
                        <figure key={index}>
                            <img src={image} alt={`Gallery Img ${index + 1}`} />
                        </figure>
                    ))}
                </div>
            </section>
        </main>
    );
};
export default CelebGallery;