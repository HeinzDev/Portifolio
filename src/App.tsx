import React from 'react';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Projects/>
      <Skills/>
      <About/>
    </div>
  );
}

export default App;
