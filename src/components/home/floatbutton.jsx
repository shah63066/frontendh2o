import React from "react";
import "./floatbutton.css"; // import CSS file

const FloatButton = () => {
  return (
    <a
      href="https://wa.me/916306642178"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default FloatButton;
