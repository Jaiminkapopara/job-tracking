import React from "react";
import styles from "./job.module.css";
import Img from "../image/Img";
import Button from "../button/Button";

const Job = ({ job }) => {
  return (
    <>
      <div className={styles.job}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Img src={job.src} width={400} height={200} />
          </div>
          <div className={styles.data}>
            <div className={styles.name}>{job.name}</div>

            <div>
              <div className={styles.lable}>Package :</div>
              <div className={styles.package}>{job.package} Rs.</div>
            </div>

            <div>
              <div className={styles.lable}>location :</div>
              <div className={styles.location}>{job.location}</div>
            </div>

            <div>
              <div className={styles.lable}>km :</div>
              <div className={styles.km}>{job.km} km</div>
            </div>

            <div>
              <div className={styles.lable}>by :</div>
              <div className={styles.by}>{job.by}</div>
            </div>

            <div className={styles.date}>{job.date}</div>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <div className={styles.lable}>Rejected</div>
          </div>

          <div className={styles.buttons}>
            <Button text={'Edit'}/>
            <Button text={'Delete'} outline={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
