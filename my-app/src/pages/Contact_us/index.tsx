import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contact.module.css';

export default function Contact_us() {
  return (
    <div className="container mt-4">
      <div className="row align-items-center mb-5">
        {/* Contact Image Section */}
        <div className={`col-md-6 ${styles.contactImage}`}>
          <img
            src="/contact.avif"
            alt="Contact Us Illustration"
            className="img-fluid rounded"
          />
        </div>

        {/* Contact Text Section */}
        <div className={`col-md-6 ${styles.contactText}`}>
          <h1>Contact Us</h1>
          <b>
            If you encounter any issues, please don't hesitate to contact us.
            We're here to assist, and we strive for your complete satisfaction.
            If you have any questions or concerns, please reach out to us. We
            are always available to help. Your feedback is valuable to us. If
            you experience any problems, please let us know so we can improve
            and better serve you.
          </b>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="row">
        <div className="col-12">
          <form className={styles.contactForm}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={styles.contactInput}
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={styles.contactInput}
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className={styles.contactTextarea}
                id="message"
                rows={4}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.contactButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}