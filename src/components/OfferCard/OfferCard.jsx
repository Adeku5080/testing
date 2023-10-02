import React from "react";
import styles from "./offercard.module.scss";

const OfferCard = ({ icon, text, subtext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon_container}>
          <img src={icon} alt="icon" />
        </div>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
        <div className={styles.subtext}>
          <p>{subtext}</p>
        </div>
        <button className={styles.btn}>Join Now</button>
      </div>
    </div>
  );
};

export default OfferCard;
