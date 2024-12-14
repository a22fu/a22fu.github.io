import React from 'react';
import styles from './Experience.module.css'
import strings from '../../constants/strings';
import ExperienceCard from './ExperienceCard';
import ExperienceData from "./ExperienceData.json"

const Experience = () => {
  return (
    <div id="experience" className={styles.screenFiller}>
      <h1 className={styles.title}>{strings.experience.titleText}</h1>
      <div className={styles.gridView}>
      {ExperienceData.map((data) => (
        <ExperienceCard data={data} key={data.name}></ExperienceCard>

        ))}


      </div>
    </div>
  );
};

export default Experience;