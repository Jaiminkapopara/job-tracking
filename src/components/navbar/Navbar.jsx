"use client";

import React from "react";
import styles from "./navbar.module.css";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Link from "next/link";
import { menus } from "@/constants";
import Button from "../button/Button";
import { signIn, signOut, useSession } from 'next-auth/react'
import Img from "../image/Img";

const Navbar = () => {
  const session = useSession()
// console.log(session);
  

  return (
    <>
      <div className={styles.navbar}>
        <Container>
          <div className={styles.menus}>
            <Logo width={100} height={100} />

            <div className={styles.menu}>
              {menus.map((menu, index) => (
                <Link href={menu.link} key={index}>
                  {menu.title}
                </Link>
              ))}
            </div>

            {session.status !== "authenticated" ? (
              <div className={styles.buttons}>
                {/* <Button text="Sign UP" /> */}
                <Button text="Sign In" outline={true} handler={() => signIn('google')}/>
              </div>
            ) : (
              <div className={styles.buttons}>
                <div className={styles.profile}>
                  <Img src={session?.data?.user?.image} width={50} height={50}/>
                </div>
                <Button text="Sign Out" handler={() => signOut()}/>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
