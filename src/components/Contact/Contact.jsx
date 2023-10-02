import React from "react";
import styles from "./contact.module.scss";
import Input from "../Input/Input";
// import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <section className={styles.section}>
     
      <div className={styles.container}>
         <div className={styles.contact_bg}>
        <img src="./svg/leaf-bg.svg" alt="img" />
      </div>
        <div className={styles.content}>
            <p className={styles.title}>
              Do not miss out on the <span>OPPORTUNITY</span> to scale your{" "}
              <span>BUSINESS!</span>
            </p>
            <p className={styles.subtext}>Get on the waiting list!</p>
          <div className={styles.input}>
            <Input />
          </div>

            <p className={styles.foot_note}>
              We're thrilled to colloborate with you to improve the health of
              our patients,pharmacists,and the industry as a whole.Thank you so
              much for being a valuable part of this crucial effort!
            </p>

       
        </div>
      </div>

         <div className={styles.footer}>
          <div className={styles.logo}>
            <img src="./svg/logo-footer.svg"  alt="logo" />
          </div>

          <div className={styles.footer_nav}>
            <div className={styles.nav_content}>
                  <div className={styles.details}>
              <span className={styles.img}>
                <img src="./svg/contact.svg"  width={15} height={15} alt="contact-card" />
              </span>
              <span className={styles.text}>Noladhealth@gmail.com</span>
            </div>

            <div className={styles.details}>
              <span className={styles.img}></span>
              <span  className={styles.text}>Terms and Conditions</span>
            </div>
            <div className={styles.details}>
              <span lassName={styles.img}><img src="./svg/location.svg"   width={10} height={10} alt="location"/></span>
              <span  className={styles.text}>Ikeja,lagos</span>
            </div>
            </div>
        
          </div> 

           <div className={styles.divider}></div>

          <div className={styles.social}>
              <div className={styles.social_container}>
                <img src="./svg/facebook.svg" alt="facebook" />
              </div>

              <div className={styles.social_container}>
                <img src="./svg/instagram.svg"   alt="twitter" />
              </div>

              <div className={styles.social_container}>
                <img src="./svg/twitter.svg"  alt="twitter" />
              </div>

              <div className={styles.social_container}>
                <img src="./svg/linkedin.svg" alt="linkedin" />
              </div>
          </div>

          <div>
            <p  className={styles.year}>2023,Nolad Health,All rights reserved  </p>

          </div> 
        </div>
    </section>
  );
};

export default Contact;
