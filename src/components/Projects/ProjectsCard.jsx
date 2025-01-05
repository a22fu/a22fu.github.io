import React, { useRef, useEffect } from 'react';
import styles from './ProjectsCard.module.css'
import strings from '../../constants/strings';
const ProjectsCard = ({data}) => {
    const imgPath = "/ProjectLogos/" + data.logo
    console.log(imgPath)


    useEffect(() => {
    //link hover effect
      }, [data.name]);
  return (
    <div className={styles.container} >
        <div className={styles.imgcontainer}>
        {data.logo && <img src={imgPath} className={styles.logo} alt="Logo" />}

        </div>
        <div className={styles.textcontainer}>
            <div>
                <a className={styles.name} href={data.link} target='_blank'>
                    {data.name}
                </a>
            </div>

            <div className={styles.skills}>
                {data.skills.map((skill) => (
                    <div className={styles.skill}>{skill}</div>
                ))}
            </div>
            <h3 className={styles.description}>
                {data.description}
            </h3>
        </div>

    </div>
  );
};

export default ProjectsCard;