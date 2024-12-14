import React from 'react';
import styles from './ExperienceCard.module.css'
import strings from '../../constants/strings';
const ExperienceCard = ({data}) => {
    const imgPath = "/companyLogos/" + data.logo
    console.log(imgPath)
  return (
    <div className={styles.container}>
        <div className={styles.imgcontainer}>
            <img src={imgPath} className={styles.logo}></img>
        </div>
        <div className={styles.textcontainer}>
            <div className={styles.name}>
                {data.name}
            </div>
            <div className={styles.titledate}>
                <div className={styles.title}>
                    {data.title}
                </div>
                <div className={styles.date}>
                    {data.date}
                </div>
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

export default ExperienceCard;