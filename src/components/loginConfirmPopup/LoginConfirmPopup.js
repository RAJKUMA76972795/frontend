import React, { useEffect, useState } from "react";
import styles from "./LoginConfirmPopup.module.css";
import { SportState } from "../../SportContext";
import { FaTimes } from "react-icons/fa";

const LoginConfirmPopup = () => {
  const { setLoginPopupOpen, setLoginConfirmPopupOpen , login , username , password , setIsLoggedIn } = SportState();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const loginUser = ()=>{
    if(username && password){
      let status = login();
      if(status===true){
        localStorage.setItem("authabcdUser" , "authabcdUser")
        setIsLoggedIn(true)
      }
      else{
      }
      setLoginConfirmPopupOpen(false);
    }
    else{
      setLoginPopupOpen(true);
      setLoginConfirmPopupOpen(false);
    }
  }
  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => {
      setLoginConfirmPopupOpen(false);
    }, 300); // Delay closing the popup for the animation duration
  };

  return (
    <div
      className={`${styles.popupContainer} ${showPopup ? styles.visible : ""}`}
      onClick={closePopup}
    >
      <div className={styles.loginConfirmPopup}>
        <span className={styles.cross} onClick={closePopup}>
          <FaTimes />
        </span>
        <span className={styles.title}>Non-Gambling Territories.</span>
        <hr className={styles.hr} />
        <div></div>
        <span className={styles.text} style= {{fontSize: "14px", lineHeight: "22px"}} >
          Connecting to our site from non-gambling countries, it will be User's
          responsibility to ensure that their use of the service is lawful.
        </span>
        <div></div>
        <span className={styles.text} style= {{fontSize: "16px"}}>Underage gambling is prohibited.</span>
        <hr className={styles.hr} />
        <div></div>
        <span className={styles.text} style={{fontSize: "14px", fontWeight: "700"}}>
          Please confirm if you are
        18 years old and above as of
          today.
        </span>
        <br />
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            style={{fontWeight: "700"}}
            onClick={loginUser}
          >
            Confirm
          </button>
          <button
            className={styles.btn}
            onClick={closePopup}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginConfirmPopup;
