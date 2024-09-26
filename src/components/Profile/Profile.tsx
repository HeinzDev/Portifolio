import React, { useEffect, useState, useRef } from 'react';
import './Profile.css';

const Profile = () => {
  const [opacity, setOpacity] = useState(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => (prevOpacity === 0.1 ? 0.9 : 0.1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Ajusta a velocidade de reprodução do vídeo
    }
  }, []);

  const handleGithubRedirect = () => {
    window.open('https://github.com/HeinzDev', '_blank');
  };

  return (
    <div className='profile-container'>
      <div className='background'>
        <video ref={videoRef} src="background.mp4" autoPlay loop muted></video>
      </div>

      <div className='header'>
        <div className='header-start'>
          <h1><a href="">HeinzDev</a></h1>
        </div>
      </div>

      <div className='main-text'>
        <h1>HeinzDev<span style={{ opacity: opacity }}>|</span></h1>
        <h2>Software Development | Linux | Programming</h2>
        <button className='github-button' onClick={handleGithubRedirect}>
          Github
          <i className='fa-brands fa-github'></i>
        </button>
      </div>

      <img src="profile.png" alt="Profile" className='profile' />
    </div>
  );
}

export default Profile;
