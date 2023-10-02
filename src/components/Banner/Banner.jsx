import React from "react";
import styles from "./Banner.module.scss";
import Input from "../Input/Input";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text} >
          <p>"Build an inclusive <span>Pharmacy</span> Economy"</p>
        </div>
        <div className={styles.subtext}>
          <p>Do not miss out on the OPPORTUNITY to scale your BUSINESS!</p>
          <p className={styles.last_text} >Get on the waiting list!</p>
        </div>
        <div className={styles.input}>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Banner;
