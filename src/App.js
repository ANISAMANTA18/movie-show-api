import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
        <Route path="" element={<ShowList />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
          <Route path="/booking-form" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
