import React, { useState } from 'react';
import styles from './Experience.module.css';
import strings from '../../constants/strings';
import ExperienceCard from './ExperienceCard';
import ExperienceData from './ExperienceData.json';

const Experience = () => {
  // Track the hovered card index
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Track if the mouse is inside the grid view
  const [isMouseInsideGrid, setIsMouseInsideGrid] = useState(false);

  return (
    <div id="experience" className={styles.screenFiller}>
      <h1 className={styles.title}>{strings.experience.titleText}</h1>
      <div
        className={styles.gridView}
        onMouseEnter={() => setIsMouseInsideGrid(true)} // Mouse enters the grid
        onMouseLeave={() => setIsMouseInsideGrid(false)} // Mouse leaves the grid
      >
        {ExperienceData.map((data, index) => (
          <div
            key={data.name}
            className={`${styles.cardContainer} 
              ${isMouseInsideGrid && hoveredIndex !== index ? styles.grayedOut : ''}`} // Graying out all cards except the hovered one
            onMouseEnter={() => setHoveredIndex(index)} // Set the hovered card index
            onMouseLeave={() => setHoveredIndex(null)} // Reset when mouse leaves
          >
            <ExperienceCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
