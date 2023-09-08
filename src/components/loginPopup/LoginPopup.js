import React, { useState } from "react";
import styles from "./LoginPopup.module.css";
import mainlogo from "../../assets/mainlogo.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import { SportState } from "../../SportContext";

const LoginPopup = () => {
  const {
    setLoginPopupOpen,
    login,
    username,
    password,
    setUsername,
    setPassword,
    setIsLoggedIn,
  } = SportState();

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearErrors = () => {
    setUsernameError("");
    setPasswordError("");
  };

  const loginUser = () => {
    let hasError = false;

    if (username.trim() === "") {
      setUsernameError("Please enter username");
      hasError = true;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Please enter password");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      return;
    }

    let status = login();
    if (status === true) {
      localStorage.setItem("authabcdUser", "authabcdUser");
      setIsLoggedIn(true);
      setLoginPopupOpen(false);
    } else {
    }
  };

  return (
    <div className={styles.loginPopup} style={{ overflowY: "auto" }}>
      <span className={styles.cross} onClick={() => setLoginPopupOpen(false)}>
        <IoCloseCircleSharp style={{ fontSize: "40px" }} />
      </span>
      <img
        src={mainlogo}
        style={{ width: "80%", marginBottom: "7.5vh", marginTop: "22vh" }}
        alt=""
      />
      <div className={styles.inputContainer}>
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setUsernameError("Please enter username");
            } else {
              setUsernameError("");
            }
            setUsername(e.target.value);
          }}
        />
        {usernameError && <p className={styles.error}>{usernameError}</p>}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setPasswordError("Please enter password");
            } else {
              setPasswordError("");
            }
            setPassword(e.target.value);
          }}
        />
        {passwordError && <p className={styles.error}>{passwordError}</p>}
      </div>
      <button className={styles.login} onClick={loginUser}>
        Login
      </button>
    </div>
  );
};

export default LoginPopup;
