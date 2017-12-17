import React, { Component } from "react";
import styles from "./styles.css";

const About = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.title}>
          Lorem ipsum dolor adipiscing amet dolor consequat
        </div>
        <div className={styles.line} />
        <div className={styles.text}>
          Adipiscing a commodo ante nunc accumsan et interdum mi ante
          adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus
          nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing
          id accumsan.
        </div>
      </div>
      <img
        className={styles.right}
        src="http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"
      />
    </div>
  </div>
);

export default About;
