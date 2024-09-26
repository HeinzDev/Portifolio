import React, { useState } from 'react';
import './About.css';
import Bubble from '../Bubble/Bubble';
import Button from '../Section-button/Button';

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const accessRepository = (repo: string) => {
    window.open(repo, '_blank');
  };

  return (
    <div className='about'>
      <div className='about-container'>
          <h1>Contact me!</h1>
          <a href="https://github.com/HeinzDev">
            <img src="https://i.imgur.com/RtsYtRt.png" alt="" />
          </a>
          <div className='contacts'>
            <a href="https://github.com/HeinzDev">
              <i className='fa-brands fa-github'></i>
            </a>
            <a href="https://www.linkedin.com/in/heinzdev/">
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Projects;
