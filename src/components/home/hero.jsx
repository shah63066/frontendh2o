import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./hero.css";

const slidesData = [
  { src: "/images/hero1.jpg", alt: "Slide 1" },
  { src: "/images/hero2.jpg", alt: "Slide 2" },
  { src: "/images/hero3.jpg", alt: "Slide 3" },
  { src: "/images/hero4.jpg", alt: "Slide 4" },
];

const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
  img.decode?.(); // wait until fully decoded (no flicker)
};

const Hero = () => {
  const total = slidesData.length;
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState("transform 0.7s ease-in-out");

  const timerRef = useRef(null);

  /** PRELOAD ALL SLIDER IMAGES — BEST FOR HERO */
  useEffect(() => {
    slidesData.forEach((s) => preloadImage(s.src));
  }, []);

  /** Auto Slider */
  const autoStart = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
  }, []);

  useEffect(() => {
    autoStart();
    return () => clearInterval(timerRef.current);
  }, [autoStart]);

  /** Loop Fix */
  useEffect(() => {
    let timeout;

    if (index === total + 1) {
      timeout = setTimeout(() => {
        setTransition("none");
        setIndex(1);
      }, 50);
    } else if (index === 0) {
      timeout = setTimeout(() => {
        setTransition("none");
        setIndex(total);
      }, 50);
    } else {
      setTransition("transform 0.7s ease-in-out");
    }

    return () => clearTimeout(timeout);
  }, [index, total]);

  /** Handlers */
  const next = useCallback(() => {
    setIndex((prev) => prev + 1);
    autoStart();
  }, [autoStart]);

  const prev = useCallback(() => {
    setIndex((prev) => prev - 1);
    autoStart();
  }, [autoStart]);

  const goToSlide = useCallback(
    (i) => {
      setIndex(i + 1);
      autoStart();
    },
    [autoStart]
  );

  /** Memoized Slides */
  const renderedSlides = useMemo(() => {
    return (
      <>
        <div className="slide">
          <img src={slidesData[total - 1].src} alt="clone-last" loading="eager" />
        </div>

        {slidesData.map((s, i) => (
          <div className="slide" key={i}>
            <img src={s.src} alt={s.alt} loading="eager" />
          </div>
        ))}

        <div className="slide">
          <img src={slidesData[0].src} alt="clone-first" loading="eager" />
        </div>
      </>
    );
  }, [total]);

  return (
    <section className="hero">
      <div className="hero-text">
        <div className="line1">H<sub>2</sub>O</div>
        <div className="line2">The Men's Salon</div>
        <div
          className="hero-btn"
          onClick={() => {
            const sec = document.getElementById("booking");
            sec?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Book Appointment
        </div>
      </div>

      <div
        className="slides"
        style={{
          transform: `translateX(-${index * 100}vw)`,
          transition,
        }}
      >
        {renderedSlides}
      </div>

      <button className="slide-btn prev" onClick={prev}>❮</button>
      <button className="slide-btn next" onClick={next}>❯</button>

      <div className="dots">
        {slidesData.map((_, i) => (
          <div
            key={i}
            className={`dot ${index === i + 1 ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
