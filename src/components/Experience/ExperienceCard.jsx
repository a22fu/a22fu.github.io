import React, { useRef, useEffect } from 'react';
import styles from './ExperienceCard.module.css'
import strings from '../../constants/strings';
const ExperienceCard = ({data}) => {
    const imgPath = "/companyLogos/" + data.logo


    useEffect(() => {
    //link hover effect
        const container = document.getElementById(data.name);
        const link2 = document.getElementById(data.name + "2");

        const handleMouseEnter = () => {
            link2.textContent = data.namehover;
        };
        const handleMouseLeave = () => {
            link2.textContent = data.name;
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, [data.name]);
  return (
    <a className={styles.container}  href={data.link} id={data.name} >
        <div className={styles.imgcontainer}>
            <img src={imgPath} className={styles.logo}></img>
        </div>
        <div className={styles.textcontainer}>
            <div className={styles.linkbox}>
                <div id={data.name + "2"} className={styles.name} target='_blank'>{data.name}</div>
                <div className={styles.titledate}>
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.date}>{data.date}</div>
                </div>
                <div className={styles.skills}>
                    {data.skills.map((skill) => (
                        <div className={styles.skill}>{skill}</div>
                    ))}
                </div>
                <h3 className={styles.description}>{data.description}</h3>
            </div>
        </div>

    </a>
  );
};

export default ExperienceCard;