import * as React from "react";
import * as styles from "./Verification.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.verificationPage}>
      <h1>Pandemic Glass</h1>
      <div className={styles.placeholderImage} />
      <div className={styles.buttonContainer}>
        <h3 className={styles.placeholderButton}>Exit</h3>
        <h3 className={styles.placeholderButton}>Enter</h3>
      </div>
    </div>
  );
};

export default LandingPage;
