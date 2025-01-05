import React from 'react';
import styles from './Projects.module.css'
import strings from '../../constants/strings';
import ProjectsCard from './ProjectsCard';
import ProjectsData from "./ProjectsData.json"

const Projects = () => {
  return (
    <div id="projects" className={styles.screenFiller}>
      <h1 className={styles.title}>{strings.projects.titleText}</h1>
      <div className={styles.gridView}>
      {ProjectsData.map((data) => (
        <ProjectsCard data={data} key={data.name}></ProjectsCard>

        ))}

      </div>
    </div>
  );
};

export default Projects;