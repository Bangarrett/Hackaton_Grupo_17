import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTrendingTracks = async () => {
      const response = await axios.get('https://discoveryprovider.audius.co/v1/tracks/trending');
      setTracks(response.data.data.slice(0, 10));
    };
    fetchTrendingTracks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Trending Tracks</h2>
      <Slider {...settings}>
        {tracks.map(track => (
          <div key={track.id}>
            {track.artwork && track.artwork['150x150'] && (
              <img src={track.artwork['150x150']} alt={track.title} />
            )}
            <h3>{track.title}</h3>
            <p>{track.user.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingTracks;
