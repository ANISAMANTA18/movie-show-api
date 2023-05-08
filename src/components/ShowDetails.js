import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ShowDetails.css';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then(res => setShow(res.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleBookNow = () => {
    navigate('/booking-form', { state: { showName: show.name }});
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details-container-custom">
      <div className="show-image-custom">
        {show.image && <img src={show.image.medium} alt={show.name} />}
      </div>
      <div className="show-details-custom">
        <h3>{show.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        <p>Rating: {show.rating.average}</p>
        <button className="book-now-button-custom" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
}

export default ShowDetails;
