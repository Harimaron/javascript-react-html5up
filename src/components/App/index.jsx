import React from "react";
import styles from "./styles.css";
import Welcome from "../Welcome";
import About from "../About";
import Features from "../Features";
import Background from "../Background";

const App = () => (
  <div className={styles.wrapper}>
    <Background />
    <Welcome />
    <About />
    <Features />
  </div>
);

export default App;
