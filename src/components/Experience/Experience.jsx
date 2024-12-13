import React from 'react';
import styles from './Experience.module.css'
import strings from '../../constants/strings';
import ExperienceCard from './ExperienceCard';
const Experience = () => {
  return (
    <div id="experience" className={styles.screenFiller}>
      <h1 className={styles.title}>{strings.experience.titleText}</h1>
      <div className={styles.gridView}>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>
        <ExperienceCard></ExperienceCard>

      </div>
    </div>
  );
};

export default Experience;