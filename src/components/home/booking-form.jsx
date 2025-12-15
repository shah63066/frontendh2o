import React, { useState } from "react";
import axios from "axios";
import "./booking-form.css";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PROFESSIONAL_EXTRA = 200;

const BookingForm = () => {
  const [subOptions, setSubOptions] = useState([]);
  const [amount, setAmount] = useState(0);

  const today = new Date().toISOString().split("T")[0];

  // Service & Sub-Service Options
  const serviceOptions = {
    hair: [
      "Haircut",
      "Hair Spa",
      "Beard Trim",
      "Hair Color",
      "Haircut + Beard Trim",
      "Hair Spa + Hair Color",
      "Haircut + Beard Trim + Hair Color",
      "Haircut + Hair Spa + Hair Color"
    ],
    skin: [
      "Cleanup",
      "Facial",
      "De-tan",
      "Glow Treatment",
      "Cleanup + Facial",
      "Facial + Glow Treatment",
      "Cleanup + Facial + Glow Treatment",
      "De-tan + Facial + Glow Treatment"
    ],
    massage: [
      "Head Massage",
      "Full Body Massage",
      "Back Massage",
      "Foot Massage",
      "Head + Back Massage",
      "Full Body + Foot Massage",
      "Head + Back + Foot Massage",
      "Full Body + Back + Foot Massage"
    ],
    wedding: [
      "Bride Complete Package",
      "Groom Complete Package",
      "Bride + Groom Complete Package"
    ]
  };

  const servicePrices = {
    hair: {
      Haircut: 250,
      "Hair Spa": 600,
      "Beard Trim": 150,
      "Hair Color": 800,
      "Haircut + Beard Trim": 330,
      "Hair Spa + Hair Color": 1300,
      "Haircut + Beard Trim + Hair Color": 1100,
      "Haircut + Hair Spa + Hair Color": 1450
    },
    skin: {
      Cleanup: 500,
      Facial: 900,
      "De-tan": 700,
      "Glow Treatment": 1000,
      "Cleanup + Facial": 1350,
      "Facial + Glow Treatment": 1800,
      "Cleanup + Facial + Glow Treatment": 2200,
      "De-tan + Facial + Glow Treatment": 2300
    },
    massage: {
      "Head Massage": 300,
      "Full Body Massage": 1500,
      "Back Massage": 600,
      "Foot Massage": 400,
      "Head + Back Massage": 850,
      "Full Body + Foot Massage": 1800,
      "Head + Back + Foot Massage": 1200,
      "Full Body + Back + Foot Massage": 2000
    },
    wedding: {
      "Bride Complete Package": 10000,
      "Groom Complete Package": 8000,
      "Bride + Groom Complete Package": 17000
    }
  };

  // Price Calculation
  const calculateAmount = () => {
    const service = document.querySelector("select[name='service']")?.value;
    const subService = document.querySelector("select[name='subService']")?.value;
    const barber = document.querySelector("select[name='barber']")?.value;

    if (!service || !subService) {
      setAmount(0);
      return;
    }

    let total = servicePrices[service][subService] || 0;

    // Professional extra only for non-wedding services
    if (barber === "Professional Stylist" && service !== "wedding") {
      total += PROFESSIONAL_EXTRA;
    }

    setAmount(total);
  };

  const handleServiceChange = (e) => {
    const service = e.target.value;
    setSubOptions(serviceOptions[service] || []);
    setAmount(0);
  };

  const handleSubServiceChange = () => calculateAmount();
  const handleBarberChange = () => calculateAmount();

  // Payment
  const initiatePayment = async (bookingId, amount, email, fullName) => {
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {
      const { data: order } = await axios.post(
        "https://backend-h2osalon.up.railway.app/api/create-order",
        { amount, bookingId }
      );

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_RHpszq0eckEqXg",
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        name: "H₂O The Men's Salon",
        description: "Appointment Payment",
        handler: async (response) => {
          await axios.post("https://backend-h2osalon.up.railway.app/api/verify-payment", {
            ...response,
            email,
            fullName,
            amount,
            bookingId,
          });
          alert("✅ Payment Successful. Receipt sent to your email!");
        },
        theme: { color: "#000" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment initiation failed");
    }
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
      service: e.target.service.value,
      subService: e.target.subService.value,
      barber: e.target.barber.value,
      time: e.target.time.value,
      amount,
    };

    try {
      const res = await fetch("https://backend-h2osalon.up.railway.app/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        await initiatePayment(result.bookingId, amount, formData.email, formData.fullName);
        e.target.reset();
        setSubOptions([]);
        setAmount(0);
      } else {
        alert(result.message || "Booking failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server error!");
    }
  };

  return (
    <div className="booking-form-section" style={{ background: "url('/images/form.jpg') center/cover no-repeat" }}>
      <div className="wrapper">
        <div className="container">
          <h2>Booking At H<sub>2</sub>O</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullName" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="tel" name="phone" required pattern="[0-9]{10}" />
            </div>

            <div className="input-group">
              <label>Date</label>
              <input type="date" name="date" min={today} required />
            </div>

            <div className="input-group">
              <label>Service</label>
              <select name="service" required onChange={handleServiceChange}>
                <option value="">Select...</option>
                <option value="hair">Hair Care</option>
                <option value="skin">Skin Care</option>
                <option value="massage">Massage</option>
                <option value="wedding">Wedding Package</option>
              </select>
            </div>

            <div className="input-group">
              <label>Sub Service</label>
              <select name="subService" required onChange={handleSubServiceChange}>
                <option value="">Select...</option>
                {subOptions.map((item, i) => (
                  <option key={i} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Barber</label>
              <select name="barber" required onChange={handleBarberChange}>
                <option value="">Choose Barber...</option>
                <option value="Aaftab">Aaftab Ahamad</option>
                <option value="Saman">Saman Ali</option>
                <option value="Kaish">Kaish Ali</option>
                <option value="Professional Stylist">Professional Stylist (Md. Ali)</option>
              </select>
            </div>

            <div className="input-group">
              <label>Time</label>
              <input type="time" name="time" required />
            </div>

            {amount > 0 && (
              <div className="input-group">
                <label>Total Amount</label>
                <input type="text" value={`₹ ${amount}`} readOnly />
                {amount >= 1200 && subOptions[0] !== "Bride Complete Package" && <small>Includes ₹200 Professional Stylist charge</small>}
              </div>
            )}

            <button className="btn" type="submit">Book & Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
