import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css';

function BookingForm({ onBookingSubmit }) {
  const location = useLocation();
  const showName = location.state.showName;
  
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    numOfTickets: '',
    date: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('bookingData', JSON.stringify(formData));
    onBookingSubmit();
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-card">
        <h3>Book {showName}</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numOfTickets">Number of Tickets</label>
        <input
          type="number"
          id="numOfTickets"
          name="numOfTickets"
          value={formData.numOfTickets}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="booking-form-submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</div>
);
}

export default BookingForm;

