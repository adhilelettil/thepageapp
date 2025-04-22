import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={`container-fluid ${styles.footerpart}`}>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          {/* ABOUT Section */}
          <div className={styles.footerLeft}>
            <h3 className={styles.footerHeading}>ABOUT</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">EZBUY Stories</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>

          {/* GROUP COMPANIES Section */}
          <div className={styles.footerMiddle}>
            <h3 className={styles.footerHeading}>GROUP COMPANIES</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#">Myntra</a></li>
              <li><a href="#">Cleartrip</a></li>
              <li><a href="#">Shopsy</a></li>
            </ul>
          </div>

          {/* HELP Section */}
          <div className={styles.footerMiddle}>
            <h3 className={styles.footerHeading}>HELP</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#">Payments</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          {/* CONSUMER POLICY Section */}
          <div className={styles.footerMiddle}>
            <h3 className={styles.footerHeading}>CONSUMER POLICY</h3>
            <ul className={styles.footerLinks}>
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Grievance Redressal</a></li>
              <li><a href="#">EPR Compliance</a></li>
            </ul>
          </div>

          {/* ABOUT US Section */}
          <div className={styles.footerRight}>
            <h3 className={styles.footerHeading}>ABOUT US</h3>
            <p>EZBUY Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN: U51109KA2012PTC066107</p>
            <p>Telephone: 044-45614700</p>
            <ul className={styles.footerSocial}>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <ul className={styles.footerBottomLinks}>
            <li><a href="#"><i className="fas fa-shopping-bag"></i> Become a Seller</a></li>
            <li><a href="#"><i className="fas fa-ad"></i> Advertise</a></li>
            <li><a href="#"><i className="fas fa-gift"></i> Gift Cards</a></li>
            <li><a href="#"><i className="fas fa-question-circle"></i> Help Center</a></li>
            <li><p>© 2007-2024 EZBUY.com</p></li>
            <li>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
                alt="Payment Methods"
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}