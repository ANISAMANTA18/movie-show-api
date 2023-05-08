import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ShowList.css'

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then(res => setShows(res.data))
      .catch(error => console.log(error));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container dark-theme">
      {shows.map(show => (
        show.show.image ? (
          <div key={show.show.id} className="show-card">
            <div className="show-image">
              <img src={show.show.image.medium} alt={show.show.name} />
            </div>
            <div className="show-details">
              <h3>{show.show.name}</h3>
              <p>Rating: {show.show.rating.average}</p>
              <button onClick={() => navigate(`/shows/${show.show.id}`)}>
                Show Details
              </button>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default ShowList;
