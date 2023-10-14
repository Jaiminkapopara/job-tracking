'use client'

import React, { useState } from "react";
import styles from "../create.module.css";
import Container from "@/components/container/Container";
import Form from "@/components/form/Form";

const page = ({ job }) => {

  const [data, setData] = useState('')

  return (
    <>
      <div className={styles.create}>
        <Container>
          <div className={styles.form}>
            <Form />
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
