import React, { Component } from "react";
import styles from "./styles.css";

const Features = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.firstColumn}>
          <div className={styles.firstIcon}>
            <i
              className={`fa fa-code ${styles.secondIcon}`}
              style={{ color: "#c3e895" }}
            />
          </div>
          <div className={styles.firstIcon}>
            <i
              className={`fa fa-camera-retro ${styles.secondIcon}`}
              style={{ color: "#6bd4c8" }}
            />
          </div>
          <div className={styles.firstIcon}>
            <i
              className={`fa fa-desktop ${styles.secondIcon}`}
              style={{ color: "#4a87d3" }}
            />
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.firstIcon}>
            <i
              className={`fa fa-bolt ${styles.secondIcon}`}
              style={{ color: "#8addaa" }}
            />
          </div>
          <div className={styles.firstIcon}>
            <i
              className={`fa fa-cog ${styles.secondIcon}`}
              style={{ color: "#57aed3" }}
            />
          </div>
          <div className={styles.firstIcon}>
            <i
              className={`fa fa-calendar ${styles.secondIcon}`}
              style={{ color: "#6b88e6" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          Lorem ipsum dolor adipiscing amet dolor consequat
        </div>
        <div className={styles.line} />
        <div className={styles.text}>
          Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A
          nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non.
          Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan
          adipiscing ipsum. <br />
          <br />
          Blandit faucibus proin. Ac aliquam integer adipiscing enim non
          praesent vis commodo nunc phasellus cubilia ac risus accumsan.
          Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius
          accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper
          morbi col faucibus vitae integer placerat accumsan orci eu mi odio
          tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam
          dolore.<br />
          <br />
          Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A
          nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non.
          Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan
          adipiscing ipsum.
        </div>
      </div>
    </div>
  </div>
);

export default Features;
