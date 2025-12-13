import React from "react";
import "./location.css";

const Location = () => {
  return (
    <section className="location-section">
      {/* <h2 className="location-title">Our Shop Location</h2> */}

      <div className="location-container">
        
        {/* LEFT: Shop Details */}
        <div className="details">
          <h2>Location of H<sub>2</sub>O The Men's Salon</h2>
          <p><strong>Address:</strong> Devalay Complex Beltar, Mirzapur UP, India</p>
          <p><strong>Phone:</strong> +91 9667631314</p>
          <p><strong>Timings:</strong> 9 AM – 9 PM (All Days)</p>
        </div>

        {/* RIGHT: Embedded Map */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d276.0900771950119!2d82.57028699139462!3d25.144989813281438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc1c58c276bf1%3A0xba8ea0f76e30a952!2sThe%20Burger%20Company!5e0!3m2!1sen!2sin!4v1765340789038!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Location;
