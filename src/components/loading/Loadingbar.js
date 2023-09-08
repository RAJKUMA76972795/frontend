
import React from "react";
import styles from "./Loadingbar.module.css";
import MyLoader from "../../assets/loading.gif";


const Loadingbar = () => {
 
  return (
 
          <div className={styles.myLoaderContainer}>
          <img src={MyLoader} alt="Loading.." className={styles.myLoader} />
          <p className={styles.loadingText}>Loading...</p>
        </div>  );
};

export default Loadingbar;
