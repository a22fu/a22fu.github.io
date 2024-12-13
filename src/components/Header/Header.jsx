import React, { useRef, useEffect } from 'react';
import styles from "./Header.module.css";
import strings from "../../constants/strings.js";

const Header = () => {
  const scrollRef = useRef(0);
  useEffect(() => {

  const handleScroll = () => {
    scrollRef.current = Math.min(1, window.scrollY / window.innerHeight );
    document.documentElement.style.setProperty('--scroll', `${scrollRef.current}`);
    console.log(scrollRef.current)
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };

}, [])
  
  return (
    <div id="header" className={styles.screenFiller}>
      <div>
        <h1 className={styles.title}>{strings.header.titleText} {<b>{strings.header.nameText}</b>}</h1>
        <h2 className={styles.subtitle}>{strings.header.subtitleText}</h2>
      </div>
    </div>
  );
};

export default Header;
