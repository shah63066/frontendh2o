import React from "react";
import "./service-price.css"; // <-- add your CSS here

const ServicePrice = () => {
  return (
    <div className="page">

      <h2 className="main-title">Men’s Salon Services</h2>

      {/* ---------------- SKINCARE ---------------- */}
      <Section title="Skincare">
        <Row items={[
          { code: "S1", title: "Deep Cleansing Facial", rate: "★★★★★ 4.8", desc: "Deep pore cleansing with steam.", price: "₹499" },
          { code: "S2", title: "Charcoal Facial", rate: "★★★★★ 4.7", desc: "Removes blackheads & oil.", price: "₹599" },
          { code: "S3", title: "Gold Facial", rate: "★★★★★ 4.9", desc: "Premium gold glow treatment.", price: "₹799" },
        ]} />

        <Row items={[
          { code: "S4", title: "Fruit Facial", rate: "★★★★☆ 4.6", desc: "Natural fruit enzyme refresh.", price: "₹399" },
          { code: "S5", title: "Anti-Tan Facial", rate: "★★★★★ 4.8", desc: "Removes tan & dullness instantly.", price: "₹699" },
          { code: "S6", title: "Hydrating Facial", rate: "★★★★★ 4.9", desc: "Hydrates & refreshes dry skin.", price: "₹599" },
        ]} />
      </Section>

      {/* ---------------- POLISHING ---------------- */}
      {/* <Section title="Polishing">
        <Row items={[
          { code: "P1", title: "Hand Polishing", rate: "★★★★★ 4.7", desc: "Brightening hand polish.", price: "₹399" },
          { code: "P2", title: "Foot Polishing", rate: "★★★★★ 4.8", desc: "Soft & detan foot polish.", price: "₹499" },
          { code: "P3", title: "Back Polishing", rate: "★★★★★ 4.9", desc: "Back glow & scrub.", price: "₹699" },
        ]} />

        <Row items={[
          { code: "P4", title: "Face Polishing", rate: "★★★★☆ 4.5", desc: "Instant face glow polish.", price: "₹449" },
          { code: "P5", title: "Full Body Polish", rate: "★★★★★ 4.9", desc: "Full body brightening.", price: "₹1499" },
          { code: "P6", title: "Detan Polish", rate: "★★★★★ 4.8", desc: "Deep tan removal.", price: "₹799" },
        ]} />
      </Section> */}

      {/* ---------------- HAIR CARE ---------------- */}
      <Section title="Hair Care">
        <Row items={[
          { code: "H1", title: "Hair Cut", rate: "★★★★★ 4.9", desc: "Professional men's haircut.", price: "₹199" },
          { code: "H2", title: "Hair Spa", rate: "★★★★★ 4.8", desc: "Smooth & nourished hair.", price: "₹499" },
          { code: "H3", title: "Hair Color", rate: "★★★★☆ 4.6", desc: "Natural or fashion color.", price: "₹699" },
        ]} />

        <Row items={[
          { code: "H4", title: "Beard Trim", rate: "★★★★★ 4.9", desc: "Sharp beard shaping.", price: "₹149" },
          { code: "H5", title: "Keratin Treatment", rate: "★★★★★ 4.8", desc: "Frizz-free silky hair.", price: "₹1999" },
          { code: "H6", title: "Head Massage", rate: "★★★★★ 4.9", desc: "Relaxing oil massage.", price: "₹249" },
        ]} />
      </Section>

      {/* ---------------- MASSAGE ---------------- */}
      <Section title="Massage">
        <Row items={[
          { code: "M1", title: "Massage 1", rate: "★★★★★ 4.8", desc: "Deep pore cleansing with steam.", price: "₹499" },
          { code: "M2", title: "Massage 2", rate: "★★★★★ 4.7", desc: "Removes blackheads & oil.", price: "₹599" },
          { code: "M3", title: "Massage 3", rate: "★★★★★ 4.9", desc: "Premium gold glow treatment.", price: "₹799" },
        ]} />

        <Row items={[
          { code: "M4", title: "Massage 4", rate: "★★★★★ 4.8", desc: "Deep pore cleansing with steam.", price: "₹499" },
          { code: "M5", title: "Massage 5", rate: "★★★★★ 4.7", desc: "Removes blackheads & oil.", price: "₹599" },
          { code: "M6", title: "Massage 6", rate: "★★★★★ 4.9", desc: "Premium gold glow treatment.", price: "₹799" },
        ]} />
      </Section>

      {/* ---------------- MAKEUP ---------------- */}
      <Section title="Makeup">
        <Row items={[
          { code: "MK1", title: "Makeup 1", rate: "★★★★★ 4.8", desc: "Deep pore cleansing with steam.", price: "₹499" },
          { code: "MK2", title: "Makeup 2", rate: "★★★★★ 4.7", desc: "Removes blackheads & oil.", price: "₹599" },
          { code: "MK3", title: "Makeup 3", rate: "★★★★★ 4.9", desc: "Premium gold glow treatment.", price: "₹799" },
        ]} />

        <Row items={[
          { code: "MK4", title: "Makeup 4", rate: "★★★★★ 4.8", desc: "Deep pore cleansing with steam.", price: "₹499" },
          { code: "MK5", title: "Makeup 5", rate: "★★★★★ 4.7", desc: "Removes blackheads & oil.", price: "₹599" },
          { code: "MK6", title: "Makeup 6", rate: "★★★★★ 4.9", desc: "Premium gold glow treatment.", price: "₹799" },
        ]} />
      </Section>

      {/* ---------------- WEDDING ---------------- */}
      <Section title="Wedding">
        <Row items={[
          { code: "W1", title: "Wedding 1", rate: "★★★★★ 4.8", desc: "Deep pore cleansing with steam.", price: "₹499" },
          { code: "W2", title: "Wedding 2", rate: "★★★★★ 4.7", desc: "Removes blackheads & oil.", price: "₹599" },
          { code: "W3", title: "Wedding 3", rate: "★★★★★ 4.9", desc: "Premium gold glow treatment.", price: "₹799" },
        ]} />

        <Row items={[
          { code: "W4", title: "Wedding 4", rate: "★★★★★ 4.8", desc: "Deep pore cleansing with steam.", price: "₹499" },
          { code: "W5", title: "Wedding 5", rate: "★★★★★ 4.7", desc: "Removes blackheads & oil.", price: "₹599" },
          { code: "W6", title: "Wedding 6", rate: "★★★★★ 4.9", desc: "Premium gold glow treatment.", price: "₹799" },
        ]} />
      </Section>

    </div>
  );
};

export default ServicePrice;

/* ------------- SMALL COMPONENTS ------------- */

const Section = ({ title, children }) => (
  <>
    <h3 className="section-title">{title}</h3>
    {children}
  </>
);

const Row = ({ items }) => (
  <div className="row">
    {items.map((item, index) => (
      <a key={index} href="#" className="card">
        <div className="thumb">{item.code}</div>
        <div className="meta">
          <h4>{item.title}</h4>
          <div className="rating">{item.rate}</div>
          <p>{item.desc}</p>
        </div>
        <div className="price">{item.price}</div>
      </a>
    ))}
  </div>
);
