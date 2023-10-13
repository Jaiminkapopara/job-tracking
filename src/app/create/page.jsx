import React from "react";
import styles from "./create.module.css";
import Container from "@/components/container/Container";
import Button from "@/components/button/Button";

const page = ({job}) => {
  return (
    <>
      <div className={styles.create}>
        <Container>
          <div className={styles.form}>
            <div className={styles.job}>
              <div className={styles.card}>
                <div className={styles.image}>
                  {/* <Img src={job.src} width={400} height={200} /> */}
                </div>
                <div className={styles.data}>
                  <div className={styles.name}><input placeholder="name of company"/></div>

                  <div>
                    <span className={styles.lable}>Package :</span>
                    <span className={styles.package}><input type="number"/> Rs.</span>
                  </div>

                  <div>
                    <span className={styles.lable}>duration :</span>
                    <span className={styles.location}>
                    <input type="number"/> months
                    </span>
                  </div>

                  <div>
                    <span className={styles.lable}>location :</span>
                    <span className={styles.location}><input/></span>
                  </div>

                  <div>
                    <span className={styles.lable}>km :</span>
                    <span className={styles.km}><input type="number"/> km</span>
                  </div>

                  <div>
                    <span className={styles.lable}>by :</span>
                    <span className={styles.by}><input/></span>
                  </div>

                  <div className={styles.date}><input type="date"/></div>
                </div>

                <div className={styles.checkbox}>
                  <input type="checkbox" />
                  <div className={styles.lable}>Bond</div>
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" />
                  <div className={styles.lable}>Rejected</div>
                </div>

                <div className={styles.buttons}>
                  <Button text={"Post"} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
