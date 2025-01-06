import React from 'react';
import styles from './Contacts.module.css';
import strings from '../../constants/strings';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div id="contacts" className={styles.screenFiller}>
      <h2 className={styles.title}>{strings.contacts.titleText}</h2>
      <div className={styles.iconContainer}>
        {/* GitHub */}
        <a
          href="https://github.com/a22fu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaGithub className={styles.icon} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/a22fu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaLinkedin className={styles.icon} />
        </a>

        {/* Resume */}
        <a
          href="/AlexanderFResume2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaFileAlt className={styles.icon} />
        </a>

        {/* Email */}
        <a
          href="mailto:a22fu@uwaterloo.ca"
          className={styles.iconLink}
        >
          <FaEnvelope className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
