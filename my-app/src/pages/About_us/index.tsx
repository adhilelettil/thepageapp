import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import './about.css';

export default function About_us() {
  return (
    <div className="container mt-4">
      
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/1 (1).jpg"
            alt="CEO"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary">CEO of EZBUY Company</h2>
          <p>
            <b>
              JHON is a visionary leader who has been instrumental in shaping
              EZBUY's journey. With a keen eye for innovation and a passion for
              industry, he has spearheaded numerous initiatives that have
              propelled the company to new heights.
            </b>
          </p>
        </div>
      </div>

   
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src="/0.jpg"
            alt="Maintenance"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className="text-primary">MAINTENANCE</h2>
          <p>
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