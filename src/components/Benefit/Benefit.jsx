import React from "react";
import styles from "./benefit.module.scss";

const Benefit = () => {
  return (
    <section>
     <div className={styles.container}>
        <div className={styles.bg}>
            <img src="./svg/leaf-bg.svg" alt="leaf-bg"/>
          </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>What you Get</p>
        </div>

        <div className={styles.info}>
        
          <div className={styles.text_section}>
            <p className={styles.main}>Focus on <span>business growth</span></p>
            <p className={styles.subtext}>
              We fuel your business scalability as we provide you with
              non-colleteral credits as flexible and affordable rates,releasing
              you from the drawbacks of sourcing through traditional means
            </p>
          </div>

          <div className={styles.img_section}>
            <img src="./svg/analytics.svg" alt="img"   />
          </div>
        </div>
      </div>

   
    </div>
    </section>
   
  );
};

export default Benefit;
