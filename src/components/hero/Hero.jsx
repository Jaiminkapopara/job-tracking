import React from "react";
import styles from "./hero.module.css";
import Container from "../container/Container";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Container>
          <div className={styles.details}>
            <div className={styles.mainHeading}>
              <h1 className={styles.title}>Streamline Your Job Hunt</h1>
              <h2 className={styles.subtitle}>
                Effortlessly Track Your Job Applications and Interviews
              </h2>
            </div>
            <h1 className={styles.title}>Start Organizing Your Job Search</h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
