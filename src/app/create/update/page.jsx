'use client'

import React, { useEffect, useState } from "react";
import styles from "../create.module.css";
import Container from "@/components/container/Container";
import Form from "@/components/form/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const page = ({ job }) => {

  const session = useSession()
  const id = useSearchParams().get('id')
  // console.log(id);
  const router = useRouter()

  const [data, setData] = useState({
      image: '',
      company: '',
      packages: '',
      duration: '',
      location: '',
      km: '',
      by: '',
      date: '',
      bond: '',
      interview: '',
      rejected: '',
  })

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch(`/api/form/${id}`);
        const datae = await response.json();
  
        setData(datae)
      }catch(error){
        console.log(error);
      }
    }

    if(id) getData()

  },[id])

  const handleEdit = async (e) => {
    e.preventDefault()

    try{
      await fetch(`/api/form/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({...data}),

      })

      e.target.reset()
      router.push('/jobs')


    }catch(error){
      console.log(error);
    }
    console.log('joo');
  }

  if(session?.status !== 'authenticated'){
    return router?.push('/')
  }

  return (
    <>
      <div className={styles.create}>
        <Container>
          <div className={styles.form}>
            <Form data={data} setData={setData} handleSubmit={handleEdit}/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
