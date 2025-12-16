import React from "react";
import "./service-card.css";



const Services = () => {
  const menServices = [
    { img: "/images/service-card/mskincare.jpg", title: "Skin Care" },
    // { img: "/images/service-card/polishing.jpg", title: "Polishing" },
    { img: "/images/service-card/mhaircare.jpg", title: "Hair Care" },
    { img: "/images/service-card/massage.jpg", title: "Massage" },
    { img: "/images/service-card/mmakeup.jpg", title: "Makeup" },
    { img: "/images/service-card/mwedding.jpg", title: "Wedding" },
  ];

  const womenServices = [
    { img: "/images/service-card/skincare.jpg", title: "Skin Care" },
    { img: "/images/service-card/haircare.jpg", title: "Hair Care" },
    { img: "/images/service-card/bodyspa.jpg", title: "Body Spa" },
    // { img: "/images/service-card/nailsalon.jpg", title: "Nail Salon" },
    { img: "/images/service-card/makeup.jpg", title: "Makeup" },
    { img: "/images/service-card/wedding.jpg", title: "Wedding" },
  ];

  return (
    <div>
      <h2>India's safest salon services for men</h2>
      <div className="services-container">
        {menServices.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>

      <h2>India's safest salon services for women</h2>
      <div className="services-container">
        {womenServices.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
