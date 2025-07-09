import React from "react";
import styles from "./Footer.module.css";


const Footer: React.FC<object> = () => {

    return (

    <div className={styles.Header} data-testid="Footer">


      <span className={styles.Footer}>Jacques &copy; Orsys 2025</span>

    </div>

  );

};



export default Footer;