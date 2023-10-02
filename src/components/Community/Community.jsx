import React from "react";
import styles from "./community.module.scss";

const Community = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p  className={styles.main_text}>Unite your community for better <span>health</span></p>

          <p  className={styles.subtext}>
            Pave the path towards enhanced healthcare in your community by
            providing the best quality drugs at the best prices.
          </p>
        </div>

        <div className={styles.community}>
          <img src="./svg/bro.svg" alt="img" />
        </div>

        
      </div>
      {/* <div className={styles.flower}>
          <img src="./svg/community-leaf.svg" alt="img" />
        </div> */}
    </div>
  );
};

export default Community;
