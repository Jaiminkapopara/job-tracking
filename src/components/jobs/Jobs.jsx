import React from 'react'
import styles from './jobs.module.css'
import Job from '../job/Job'

const Jobs = ({jobs}) => {
  return (
    <>
        <div className={styles.jobs}>
          {jobs.map((job, index) => (
            <Job key={index} job={job}/>
          ))}
        </div> 
    </>
  )
}

export default Jobs
