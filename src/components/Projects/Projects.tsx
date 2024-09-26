import React, { useState } from 'react';
import './Projects.css';
import Bubble from '../Bubble/Bubble';
import Button from '../Section-button/Button';
import projects from './projects.json';

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleButtonClick = (type: string) => {
    setSelectedType(prevType => (prevType === type ? null : type));
    setTimeout(() => {
      scrollToProjects();
    }, 200);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const accessRepository = (repo: string) => {
    window.open(repo, '_blank');
  };

  const filteredProjects = Object.values(projects).filter(project => project.type === selectedType);

  return (
    <div className='project-container'>
      <div className='project-text-container'>
        <h1>Projects</h1>
        <h3>Click here to check some of my projects!</h3>
      </div>
      <div className='project-options'>
        <div className='project-buttons'>
          <Button icon='fa-solid fa-pen-fancy' text='Front-End' number='6' onClick={() => handleButtonClick('frontend')} />
          <Button icon='fa-solid fa-code' text='Back-End' number='4' onClick={() => handleButtonClick('backend')} />
          <Button icon='fa-solid fa-desktop' text='Desktop' number='2' onClick={() => handleButtonClick('desktop')} />
          <Button icon='fa-brands fa-docker' text='Utils' number='4' onClick={() => handleButtonClick('utils')} />
        </div>

        <div id="projects" className={`project-bubbles ${selectedType ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <Bubble
              key={index}
              icon={project.icon}
              image={project.image}
              text={project.text}
              description={project.description}
              onClick={()=>accessRepository(project.repo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
