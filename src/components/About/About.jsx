import React from 'react';
import styles from './About.module.css'

const About = () => {
  return (
    <div id="about" className = {styles.screenfiller}>
      <h2>About Me</h2>
      <p>Write a brief description about yourself here.</p>
    </div>
  );
};

export default About;