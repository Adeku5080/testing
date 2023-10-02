import React from "react";
import styles from "./offers.module.scss";
import OfferCard from "../OfferCard/OfferCard";

const Offers = () => {
  return (
    <section>
      <div className={styles.container}>
        <img className={styles.leaf_top} src="/svg/leaf-bg.png" alt="leaf-bg" />

        <img className={styles.leaf_btm} src="/svg/leaf-bg.png
        " alt="leaf-bg" />

        <div className={styles.content}>
          <div className={styles.title}>
            <p>
              What we <span>Offer</span>
            </p>
          </div>
          <div className={styles.card_section}>
            <OfferCard
              icon="./svg/cart.svg"
              text="Always Keep your stock Up!"
              subtext="Ensure that you are always stocked up with primary healthcare essentials and keep a diverse range of products to serve the varying needs of your community."
            />
            <OfferCard
              icon="./svg/inventory.svg"
              text="Scale your business"
              subtext="Access top-quality products using our flexible credit solutions. Share your needs and together we’ll craft the perfect plan."
            />
            <OfferCard
              icon="./svg/thumbs.svg"
              text="Asset financing"
              subtext="We help you finance assets like refrigerators, inverters, solar panels, generators, shelves and just about anything you need to run your pharmacy daily."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
