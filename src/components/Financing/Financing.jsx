import React from "react";
import styles from "./financing.module.scss";

const Financing = () => {
  return (
    <section>
      <div className={styles.leaf_img}>
        <img src="./svg/leaf-high.svg" alt="icon" />
      </div>
      <div className={styles.financing}>
        <div className={styles.pc_img}>
          <img src="./svg/comp.svg" alt="icon" />
        </div>

        <div className={styles.text_section}>
          <p className={styles.title}>
            Inventory <span>Financing</span>
          </p>

          <p className={styles.subtext}>
            Say farewell to stockouts.Our inventory financing offering ensures
            you have all the vital medications your pharmacy needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Financing;
