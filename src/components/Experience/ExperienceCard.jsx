import React, { useRef, useEffect } from 'react';
import styles from './ExperienceCard.module.css'
import strings from '../../constants/strings';
const ExperienceCard = ({data}) => {
    const imgPath = "/companyLogos/" + data.logo
    console.log(imgPath)


    useEffect(() => {
    //link hover effect
        const link = document.getElementById(data.name);
        const handleMouseEnter = () => {
            link.textContent = data.namehover;
        };
        const handleMouseLeave = () => {
            link.textContent = data.name;
        };

        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            link.removeEventListener('mouseenter', handleMouseEnter);
            link.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, [data.name]);
  return (
    <div className={styles.container}>
        <div className={styles.imgcontainer}>
            <img src={imgPath} className={styles.logo}></img>
        </div>
        <div className={styles.textcontainer}>
            <div>
                <a id={data.name} className={styles.name} href={data.link} target='_blank'>
                    {data.name}
                </a>
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