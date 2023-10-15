"use client";

import React, { useEffect, useState } from "react";
import styles from "./jobs.module.css";
import Container from "@/components/container/Container";
import Jobs from "@/components/jobs/Jobs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  // const jobs = [
  //   {
  //     name: "Jaiminkapopara/job-tracking",
  //     src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     package: "50000-90000",
  //     duration: '1',
  //     location: "207, Mahek icon,Beside Sumul dairy,Surat, Gujarat 395006",
  //     km: "5",
  //     by: "website",
  //     date: "15/5/2024",
  //   },
  //   {
  //     name: "google",
  //     src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     package: "50000-90000",
  //     location: "surat",
  //     km: "5",
  //     by: "website",
  //     date: "15/5/2024",
  //   },
  //   {
  //     name: "google",
  //     src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     package: "50000-90000",
  //     location: "surat",
  //     km: "5",
  //     by: "website",
  //     date: "15/5/2024",
  //   },
  //   {
  //     name: "google",
  //     src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     package: "50000-90000",
  //     location: "surat",
  //     km: "5",
  //     by: "website",
  //     date: "15/5/2024",
  //   },
  //   {
  //     name: "google",
  //     src: "https://images.pexels.com/photos/15395510/pexels-photo-15395510/free-photo-of-google-spelled-on-letter-cubes.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     package: "50000-90000",
  //     location: "surat",
  //     km: "5",
  //     by: "website",
  //     date: "15/5/2024",
  //   },
  // ];

  const session = useSession()
  const [jobs, setJobs] = useState([]);
  const router = useRouter()
  const currentCreator = session?.data?.user?.email

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await fetch(`/api/form`, {
          cache: "no-store",
        });

        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobs()
  }, []);

  // console.log(jobs);
  const filteredJobs = jobs.filter((job ) => (job.creator === currentCreator))

  if (session?.status === "unauthenticated") {
    return router?.push("/");
  }

  return (
    <>
      <div className={styles.jobs}>
        <Container>
          <h1>Your Selected Companies</h1>
          <Jobs jobs={filteredJobs} />
        </Container>
      </div>
    </>
  );
};

export default Page;
