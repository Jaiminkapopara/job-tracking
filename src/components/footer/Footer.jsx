import React from 'react'
import styles from './footer.module.css'
import Container from "../container/Container";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Container>
          <div className={styles.copyright}>
          Copyright©2023 JobTracker All right reserved
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
