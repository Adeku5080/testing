import React from "react";
import styles from "./info.module.scss";
import Input from "../Input/Input";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h2>Nolad <span>Health</span>!Powering Your <span>Growth</span></h2>
        </div>
        <div className={styles.list}>
          <div  className={styles.list_item}>
            <span className={styles.list_icon}>
              {" "}
              <img src="./svg/vector.svg" alt="vector" />
            </span>{" "}
            <span className={styles.list_text}>Opportunity to scale your business</span>
          </div>
          <div className={styles.list_item}>
            <span className={styles.list_icon}>
              {" "}
              <img src="./svg/vector.svg" alt="vector" />
            </span>{" "}
            <span className={styles.list_text}>Streamline your procuerment process</span>
          </div>
          <div className={styles.list_item}>
            <span className={styles.list_icon}>
              {" "}
              <img src="./svg/vector.svg" alt="vector" />
            </span>{" "}
            <span className={styles.list_text}>Access credit</span>
          </div>
        </div>
        <div className={styles.text}>
            <p>Dont miss the <span>Opportunity</span> to scale your <span>business</span></p>
        </div>
        <div className={styles.subtext}>
            <p>
                Get on the waiting List
            </p>
        </div>
        <div className={styles.input}>
          <Input/>
        </div>
      </div>
      <div className={styles.img}>
        <img src="./svg/arrow.svg" alt="arrow" />
      </div>
    </div>
  );
};

export default Info;
