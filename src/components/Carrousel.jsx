import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTrendingTracks = async () => {
      const response = await axios.get('https://discoveryprovider.audius.co/v1/tracks/trending');
      setTracks(response.data.data);
    };
    fetchTrendingTracks();
  }, []);

  return (
    <div>
      <h2>Trending Tracks</h2>
      <div>
        {tracks.map(track => (
          <div key={track.id}>
            <img src={track.artwork['150x150']} alt={track.title} />
            <h3>{track.title}</h3>
            <p>{track.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTracks;
