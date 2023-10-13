import React from "react";
import styles from "./jobs.module.css";
import Container from "@/components/container/Container";
import Jobs from "@/components/jobs/Jobs";

const page = () => {
  const jobs = [
    {
      name: "Jaiminkapopara/job-tracking",
      src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
      package: "50000-90000",
      duration: '1',
      location: "207, Mahek icon,Beside Sumul dairy,Surat, Gujarat 395006",
      km: "5",
      by: "website",
      date: "15/5/2024",
    },
    {
      name: "google",
      src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
      package: "50000-90000",
      location: "surat",
      km: "5",
      by: "website",
      date: "15/5/2024",
    },
    {
      name: "google",
      src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
      package: "50000-90000",
      location: "surat",
      km: "5",
      by: "website",
      date: "15/5/2024",
    },
    {
      name: "google",
      src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
      package: "50000-90000",
      location: "surat",
      km: "5",
      by: "website",
      date: "15/5/2024",
    },
    {
      name: "google",
      src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
      package: "50000-90000",
      location: "surat",
      km: "5",
      by: "website",
      date: "15/5/2024",
    },
  ];
  return (
    <>
      <div className={styles.jobs}>
        <Container>
            <h1>Your Selected Companies</h1>
          <Jobs jobs={jobs} />
        </Container>
      </div>
    </>
  );
};

export default page;
