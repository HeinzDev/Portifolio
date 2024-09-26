import React, { useEffect, useState } from 'react';
import './Skills.css';
import { access } from 'fs';

const Profile = () => {
  const [opacity, setOpacity] = useState(0.1);

  const accessSkills = () => {
    window.open('https://github.com/HeinzDev/HeinzDev', '_blank');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prevOpacity => (prevOpacity === 0.1 ? 0.9 : 0.1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='skill-container'>


      <div className='skill-text'>
        <h1>Skills<span style={{ opacity: opacity }}>|</span></h1>
        <h2>Technologies i use often:</h2>
        <button className='skill-github-button' onClick={()=> accessSkills()}>
          Check My User Stats!
          <i className='fa-brands fa-github'></i>
        </button>
      </div>

      <div className='skill-images'>
        <img src="java.png" alt="" />
        <img src="rust.png" alt="" />
        <img src="react.png" alt="" />
        <img src="javascript.png" alt="" />
        <img src="nix.png" alt="" />
      </div>

    </div>
  );
}

export default Profile;
