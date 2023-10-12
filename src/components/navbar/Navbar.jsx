import React from "react";
import styles from "./navbar.module.css";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Link from "next/link";
import { menus } from "@/constants";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Container>
          <div className={styles.menus}>
            <Logo width={100} height={100} />

            <div className={styles.menu}>
              {menus.map((menu) => (
                <Link href={menu.link}>{menu.title}</Link>
              ))}
            </div>

            <div className={styles.buttons}>
              <Button text='Sign UP'/>
              <Button text='Sign In' outline={true}/>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
