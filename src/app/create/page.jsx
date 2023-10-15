"use client";

import React, { useState } from "react";
import styles from "./create.module.css";
import Container from "@/components/container/Container";
import Form from "@/components/form/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = ({ job }) => {
  const router = useRouter();

  const session = useSession();
  const userId = session?.data?.user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const image = e.target[0].value;
    const company = e.target[1].value;
    const packages = e.target[2].value;
    const duration = e.target[3].value;
    const location = e.target[4].value;
    const km = e.target[5].value;
    const by = e.target[6].value;
    const date = e.target[7].value;
    const bond = e.target[8].checked;
    const interview = e.target[9].checked;
    const rejected = e.target[10].checked;
    // console.log(bond, interview, rejected);

    try {
      const newJob = await fetch("/api/form", {
        method: "POST",
        body: JSON.stringify({
          creator: userId,
          image,
          company,
          packages,
          duration,
          location,
          km,
          by,
          date,
          bond,
          interview,
          rejected,
        }),
      });

      e.target.reset();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (session?.status === "unauthenticated") {
    return router?.push("/");
  }

  if (session?.status === "authenticated") {
    return (
      <>
        <div className={styles.create}>
          <Container>
            <div className={styles.form}>
              <Form handleSubmit={handleSubmit} />
            </div>
          </Container>
        </div>
      </>
    );
  }
};

export default Page;
