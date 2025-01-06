import React, { useRef, useEffect } from 'react';
import styles from './ProjectsCard.module.css'
import strings from '../../constants/strings';
const ProjectsCard = ({data}) => {
    const imgPath = "/ProjectLogos/" + data.logo


    useEffect(() => {
    //link hover effect
      }, [data.name]);
  return (
    <a className={styles.container}  href={data.link}>
        <div className={styles.imgcontainer}>
        {data.logo && <img src={imgPath} className={styles.logo} alt="Logo" />}

        </div>
        <div className={styles.textcontainer}>
            <div>
                <div className={styles.name} target='_blank'>
                    {data.name}
                </div>
            </div>

            <div className={styles.skills}>
            {data.skills.map((skill) => (
                <div
                    className={`${styles.skill} ${
                    skill.includes('athon') || skill.includes('Hack') ? styles.goldskill : ''
                    }`}>
    {skill}
  </div>
))}
            </div>
            <h3 className={styles.description}>
                {data.description}
            </h3>
        </div>

    </a>
  );
};

export default ProjectsCard;