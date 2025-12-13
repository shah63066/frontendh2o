import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/bookings").then((res) => {
      setBookings(res.data);
    });

    axios.get("http://localhost:5000/api/admin/earnings").then((res) => {
      setEarnings(res.data.total);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <h3>Total Earnings: ₹{earnings}</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td>{b.fullName}</td>
              <td>{b.subService}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>₹{b.amount}</td>
              <td>{b.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
