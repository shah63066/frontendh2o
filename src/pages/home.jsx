// src/pages/home.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// importing section
import Hero from '../components/home/hero';
import Servicecard from '../components/home/service-card';
import Serviceprice from '../components/home/service-price';
import Bookingform from '../components/home/booking-form';
import About from '../components/home/about';
import Location from '../components/home/location';
import Footer from '../components/home/footer';
import Floatbutton from '../components/home/floatbutton';
import Chatbox from '../components/home/chatbox';

const Home = () => {
    const location = useLocation();
    const HEADER_OFFSET = 70; // match Navbar.jsx

    const smoothScrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
        return true;
    };

    useEffect(() => {
        // If navigation sent a scroll target, try to scroll after mount
        const scrollToId = location.state && location.state.scrollToId;
        if (scrollToId) {
            // small delay to ensure the DOM has rendered all sections
            const t = setTimeout(() => {
                const worked = smoothScrollTo(scrollToId);
                // fallback try once more if initial attempt failed
                if (!worked) setTimeout(() => smoothScrollTo(scrollToId), 200);
            }, 80);
            return () => clearTimeout(t);
        }
    }, [location.state]);

    return (
        <>
            <div id="hero"><Hero /></div>
            <div id="services"><Servicecard /></div>
            <div id="serviceprice"><Serviceprice /></div>
            <div id="booking"><Bookingform /></div>
            <div id="about"><About /></div>
            <div id="location"><Location /></div>
            <div id="footer"><Footer /></div>
            <Floatbutton />
            <Chatbox />
        </>
    );
};

export default Home;
