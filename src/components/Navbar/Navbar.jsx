import React from "react";
import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
         <img src="./svg/name.svg" alt="name"/>
      </div>

      <div className={styles.nav}>
        <div className={styles.list}>
          <li className={styles.home}>
            <p>Home</p></li>
          <li className={styles.contact}><p>Contact</p> </li>
        </div>

         <div className={styles.logo}>
          <img src="./svg/logo.svg" alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
