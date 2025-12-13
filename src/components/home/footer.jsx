import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="logo">H<sub>2</sub>O The Men’s Salon</h3>
          <p>Your trusted grooming partner for modern men.</p>

          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Prices</a></li>
            <li><a href="#">Booking</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Our Policies</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Devalay Complex Beltar</p>
          <p> Mirzapur, UP, India</p>
          <p>+91 9667631314</p>
          <p>h2othemens@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 H<sub>2</sub>O The Men's Salon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
