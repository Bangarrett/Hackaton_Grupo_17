// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel.css'


const TrendingTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [likedTracks, setLikedTracks] = useState([]);
  const [playingTracks, setPlayingTracks] = useState({});
  const audioRefs = useRef({});

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

  const handlePlay = trackId => {
    setPlayingTracks(prevPlayingTracks => ({
      ...prevPlayingTracks,
      [trackId]: true,
    }));
    audioRefs.current[trackId].play();
  };

  const handlePause = trackId => {
    setPlayingTracks(prevPlayingTracks => ({
      ...prevPlayingTracks,
      [trackId]: false,
    }));
    audioRefs.current[trackId].pause();
  };

  const handleShare = track => {
    if (navigator.share) {
      navigator.share({
        title: track.title,
        text: `${track.title} by ${track.user.name}`,
        url: track.permalink_url,
      });
    } else {
      alert('Web Share API not available');
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <div className='carrousel'>
      <style>
        {`
          p{
            color: #FFFF;
          }
          .carousel-title, .track-title {
          color: #FFFF
          ;
          }
          .carousel-container {
  
            background: rgb(90, 90, 90);
            padding: 20px;
            max-width: 100%;
            max-height: 80%;
          }
          .carousel-title {
            color: #FFFFF
            color: white;
            text-align: center;
          }
          .track-title {
            color: #FFFFF
            font-size: 18px;
            font-weight: bold;
            text-align: center;
          }
          .track-artist {
            font-size: 16px;
            color: #FFFFF;
            text-align: center;

          
          }
          img {
            display: block;
            margin: 0 auto;
            transition: transform 0.2s;
          }
          img:hover {
            transform: scale(1.1);
          }
          button {
            display:block;
            margin-top:10px;
            margin-left:auto;
            margin-right:auto;
            padding:10px;
            border:none;
            border-radius:5px;
            background:#4b9cdb;
            color:white;
            cursor:pointer;
            width: 5rem;
          }
          button:hover{
              background:#3c8dc5
          }
          button:focus{
              outline:none
          }
        `}
      </style>
      <div className="carousel-container">
        <h2 className="carousel-title">Trending Tracks</h2>
        <Slider {...settings}>
          {tracks.map(track => (
            <div key={track.id}>
              {track.artwork && track.artwork['150x150'] && (
                <img src={track.artwork['150x150']} alt={track.title} />
              )}
              <h3 className="track-title">{track.title}</h3>
              <p className="track-artist">{track.user.name}</p>
              <p> Genre: {track.genre}</p>
              <p> Durantion: {track.duration} seg</p>
              <audio ref={ref => (audioRefs.current[track.id] = ref)} src={track.preview_url} />
              {playingTracks[track.id] ? (
                <button onClick={() => handlePause(track.id)}>Pause</button>
              ) : (
                <button onClick={() => handlePlay(track.id)}>Play</button>
              )}
              <button onClick={() => handleLike(track.id)}>Like</button>
              <button onClick={() => handleShare(track)}>Share</button>
            </div>
          ))}
        </Slider>
      </div>
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
