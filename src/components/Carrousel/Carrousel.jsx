import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [likedTracks, setLikedTracks] = useState([]);

  useEffect(() => {
    const fetchTrendingTracks = async () => {
      const response = await axios.get('https://discoveryprovider.audius.co/v1/tracks/trending');
      setTracks(response.data.data.slice(0, 10));
    };
    fetchTrendingTracks();

    const storedLikedTracks = localStorage.getItem('likedTracks');
    if (storedLikedTracks) {
      setLikedTracks(JSON.parse(storedLikedTracks));
    }
  }, []);

  const handleLike = trackId => {
    setLikedTracks(prevLikedTracks => {
      const isTrackLiked = prevLikedTracks.includes(trackId);
      const updatedLikedTracks = isTrackLiked
        ? prevLikedTracks.filter(id => id !== trackId)
        : [...prevLikedTracks, trackId];
      localStorage.setItem('likedTracks', JSON.stringify(updatedLikedTracks));
      return updatedLikedTracks;
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const handlePlay = async trackId => {
    const response = await axios.get(`https://discoveryprovider.audius.co/v1/tracks/${trackId}/stream`);
    const audioUrl = response.data.data;
    console.log(audioUrl);
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };
  return (
    <div>
      <style>
        {`
          img {
            display: block;
            margin: 0 auto;
          }
        `}
      </style>
      <h2>Trending Tracks</h2>
    <Slider {...settings}>
      {tracks.map(track => (
        <div key={track.id}>
          {track.artwork && track.artwork['150x150'] && (
            <img src={track.artwork['150x150']} alt={track.title} />
          )}
          <h3>{track.title}</h3>
          <p>{track.user.name}</p>
          <button onClick={() => handleLike(track.id)}>Like</button>
        </div>
      ))}
    </Slider>
    <h2>Liked Tracks</h2>
    <ul>
      {tracks
        .filter(track => likedTracks.includes(track.id))
        .map(track => (
          <li key={track.id}>{track.title}</li>
        ))}
    </ul>
    </div>
  );
};

export default TrendingTracks;
