import React, { Component } from "react";
import styles from "./styles.css";

const Welcome = () => (
  <div className={styles.wrapper}>
    <div className={`fa fa-cloud ${styles.cloud}`} />
    <div className={styles.photon}>
      Hi, I'm <b>Photon</b>, another fine little freebie from HTML5 UP.
    </div>
    <div className={styles.lorem}>
      Accumsan feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat
      sapien sed etiam volutpat accumsan.
    </div>
    <button className={styles.discover}>discover</button>
    <div className={styles.line} />
  </div>
);

export default Welcome;
