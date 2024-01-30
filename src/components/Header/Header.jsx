import React from 'react';
import styles from './Header.module.css';
import strings from '../../constants/strings.js';

const Header = () => {
  return (
    <div id = "header" className = {styles.screenFiller}>
        <h1 className ={styles.title}>{strings.header.titleText}</h1>
        <h2 className = {styles.subtitle}>{strings.header.subtitleText}</h2>
    </div>
  );
};

export default Header;