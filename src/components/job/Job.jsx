import React from "react";
import styles from "./job.module.css";
import Img from "../image/Img";
import Button from "../button/Button";

const Job = ({ job }) => {
  // console.log(job);
  return (
    <>
      <div className={styles.job}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Img src={job.image} width={400} height={200} />
          </div>
          <div className={styles.data}>
            <div className={styles.name}>{job.company}</div>

            <div>
              <span className={styles.lable}>Package :</span>
              <span className={styles.package}>{job.packages} Rs.</span>
            </div>

            <div>
              <span className={styles.lable}>duration :</span>
              <span className={styles.location}>{job.duration} months</span>
            </div>

            <div>
              <span className={styles.lable}>location :</span>
              <span className={styles.location}>{job.location}</span>
            </div>

            <div>
              <span className={styles.lable}>km :</span>
              <span className={styles.km}>{job.km} km</span>
            </div>

            <div>
              <span className={styles.lable}>by :</span>
              <span className={styles.by}>{job.by}</span>
            </div>

            <div className={styles.date}>{job.date}</div>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <div className={styles.lable}>Bond</div>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <div className={styles.lable}>inteview</div>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <div className={styles.lable}>Rejected</div>
          </div>

          <div className={styles.buttons}>
            <Button text={"Edit"} />
            <Button text={"Delete"} outline={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
