import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './about.module.css';

export default function About_us() {
  return (
    <div className={`container mt-4 ${styles.container}`}>
      <div className={`row align-items-center mb-5 ${styles.row}`}>
        {/* CEO Section */}
        <div className={`col-md-6 ${styles.imageContainer}`}>
          <img
            src="/1 (1).jpg"
            alt="CEO"
            className={`img-fluid rounded ${styles.img}`}
          />
        </div>
        <div className="col-md-6">
          <h2 className={`text-primary ${styles.heading}`}>
            CEO of EZBUY Company
          </h2>
          <p className={styles.paragraph}>
            <b>
              JHON is a visionary leader who has been instrumental in shaping
              EZBUY's journey. With a keen eye for innovation and a passion for
              industry, he has spearheaded numerous initiatives that have
              propelled the company to new heights.
            </b>
          </p>
        </div>
      </div>

      <div className={`row align-items-center ${styles.row}`}>
        {/* Maintenance Section */}
        <div className={`col-md-6 order-md-2 ${styles.imageContainer}`}>
          <img
            src="/0.jpg"
            alt="Maintenance"
            className={`img-fluid rounded ${styles.img}`}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className={`text-primary ${styles.heading}`}>MAINTENANCE</h2>
          <p className={styles.paragraph}>
            <b>
              The user-friendly interface makes it easy to find what you need,
              consistent performance even during peak times, and safe and secure
              payment options to protect your information. We provide prompt and
              helpful support to address any concerns.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}