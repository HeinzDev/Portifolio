import React, { useEffect, useState } from 'react';
import './Skills.css';
import languagesData from './languages.json';

interface Language {
  name: string;
  img: string;
  text: string;
}

//hate this implementation
const languages: Record<string, Language> = languagesData as Record<string, Language>;


const Profile = () => {
  const [opacity, setOpacity] = useState(0.1);
  const [texto, setTexto] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const accessSkills = () => {
    window.open('https://github.com/HeinzDev/HeinzDev?tab=readme-ov-file#stats-', '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => (prevOpacity === 0.1 ? 0.9 : 0.1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOnClick = (lang: string) => {
    setTexto(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div className="skill-container">
      <div className="skill-text">
        <h1>
          Skills<span style={{ opacity: opacity }}>|</span>
        </h1>
        <h2>Technologies I use often:</h2>
        <button className="skill-github-button" onClick={accessSkills}>
          Check My User Stats!
          <i className="fa-brands fa-github"></i>
        </button>
      </div>

      <div className="skill-images">
        <img src="java.png" alt="Java" onClick={() => handleOnClick('Java')} />
        <img src="rust.png" alt="Rust" onClick={() => handleOnClick('Rust')} />
        <img src="react.png" alt="ReactJS" onClick={() => handleOnClick('ReactJS')} />
        <img src="javascript.png" alt="Javascript" onClick={() => handleOnClick('Javascript')} />
        <img src="nix.png" alt="Nix" onClick={() => handleOnClick('Nix')} />


        {selectedLanguage && (
          <div>
            <h2>{languages[selectedLanguage].name}</h2>
            {languages[selectedLanguage].img && (
              <img
                src={languages[selectedLanguage].img}
                alt={languages[selectedLanguage].name}
              />
            )}
            <p>{languages[selectedLanguage].text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
