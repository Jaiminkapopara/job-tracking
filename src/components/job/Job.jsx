import React from "react";
import styles from "./job.module.css";
import Img from "../image/Img";
import Button from "../button/Button";
import { useRouter } from "next/navigation";

const Job = ({ job }) => {
  // console.log(job);

  const router = useRouter()

  const handleEdit = () => {
    router.push(`/create/update?id=${job._id}`)
  }

  const handleDelete = async() => {
    try{
      await fetch(`api/form/${job._id}`, {
        method: 'DELETE'
      })
      router.push('/')
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.job}>
        <div className={job.rejected ? styles.rejected : styles.card}>
          <div className={styles.image}>
            <Img src={job.image} width={378} height={100} />
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

            {job.date && <div className={styles.date}>{job.date}</div>}
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" checked={job.bond} />
            <div className={styles.lable}>Bond</div>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" checked={job.interview} />
            <div className={styles.lable}>inteview</div>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" checked={job.rejected} />
            <div className={styles.lable}>Rejected</div>
          </div>

          <div className={styles.buttons}>
            <Button text={"Edit"} handler={handleEdit}/>
            <Button text={"Delete"} outline={true} handler={handleDelete}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
