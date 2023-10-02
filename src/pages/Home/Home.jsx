import React from "react";
import Banner from "../../components/Banner/Banner";
// import Info from "../../components/Info/Info";
import Info  from "../../components/Info/Info copy";

import Mission from "../../components/Mission/Mission";
import Offers from "../../components/Offers/Offers";
import Navbar from "../../components/Navbar/Navbar";
import Benefit from "../../components/Benefit/Benefit";
import Financing from "../../components/Financing/Financing";
import Community from "../../components/Community/Community";
import Contact from "../../components/Contact/Contact";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_leaf}>
        <img  src="./svg/leaf-high.svg" alt="leaf" />
      </div>

        <div className={styles.community_leaf}>
        <img  src="./svg/test.svg" alt="leaf" />
      </div>
      <Navbar/>
      <Banner />
      <Info />
      <Mission />
      <Offers/>
      <Benefit/>
      <Financing/>
      <Community/>
      <Contact/>
    </div>
  );
};

export default Home;
