import React, { useState } from "react";
import styles from "./Header.module.css";
import mainlogo from "../../assets/mainlogo.png";
import { AiOutlineSearch, AiFillSetting } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineRefresh, MdArrowDropDown } from "react-icons/md";
import { HiCubeTransparent } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { SportState } from "../../SportContext";
import LoginConfirmPopup from "../loginConfirmPopup/LoginConfirmPopup";
import LoginPopup from "../loginPopup/LoginPopup";
import bets from "../../assets/bets.gif";
import Bet from "../bet/Bet";
import SettingPopup from "../settingPopup/SettingPopup";

const Header = () => {
  const {
    setLoginConfirmPopupOpen,
    loginConfirmPopupOpen,
    loginPopupOpen,
    isLoggedIn,
    setPassword,
    setUsername,
    username,
    password,
    login,
  } = SportState();
  const [isBetOpen, setIsBetOpen] = useState(false);
  const [isStakePopupOpen, setIsStakePopupOpen] = useState(false);
  const loginUser = () => {
    if (window.innerWidth <= 960 || (username && password)) {
      setLoginConfirmPopupOpen(true);
    } else {
    }
  };
  return (
    <>
      {isStakePopupOpen ? (
        <SettingPopup setIsStakePopupOpen={setIsStakePopupOpen} />
      ) : null}
      {isBetOpen ? <Bet setIsBetOpen={setIsBetOpen} /> : null}
      {loginConfirmPopupOpen ? <LoginConfirmPopup /> : null}
      {loginPopupOpen ? <LoginPopup /> : null}
      <div className={styles.header}>
        <div className={styles.subHeader}>
          {!isLoggedIn ? (
            <img className={styles.img} src={mainlogo} alt="" />
          ) : null}
          {isLoggedIn ? (
            <img
              className={`${styles.img} ${styles.loginImg}`}
              src={mainlogo}
              alt=""
            />
          ) : null}
          {isLoggedIn ? (
            <div className={styles.bets} onClick={() => setIsBetOpen(true)}>
              <HiCubeTransparent />
              <span>Bets</span>
            </div>
          ) : null}
          <div className={styles.subHeaderItem}>
            <AiOutlineSearch style={{ cursor: "pointer" }} />
            <input className={styles.inputStyle} type="text" />
            <RxCross1 style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className={styles.subHeader}>
          {!isLoggedIn ? (
            <div className={styles.subHeaderItem}>
              <input
                className={styles.inputStyle}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          ) : null}
          {!isLoggedIn ? (
            <div className={styles.subHeaderItem}>
              <input
                className={styles.inputStyle}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          ) : null}
          {isLoggedIn ? (
            <div className={styles.accountValue}>
              <span
                style={{ fontSize: "12px", fontWeight: "700", color: "white" }}
              >
                Main 10,100.00
              </span>
              <span
                style={{ fontSize: "12px", fontWeight: "700", color: "white" }}
              >
                Exposure(<span style={{ color: "red" }}>0.00</span>)
              </span>
            </div>
          ) : null}
          {isLoggedIn && (
            <div className={styles.refresh}>
              <MdOutlineRefresh />
            </div>
          )}

          {isLoggedIn && (
            <button className={styles.myAccount}>
              <FaUserAlt />
              <span>My Account</span>
              <MdArrowDropDown />
            </button>
          )}

          {isLoggedIn && (
            <div
              className={styles.settings}
              onClick={() => setIsStakePopupOpen(true)}
            >
              <AiFillSetting />
            </div>
          )}

          {!isLoggedIn ? (
            <div className={styles.subHeaderButton} onClick={loginUser}>
              <button
                className={styles.btn}
                style={{ marginRight: "5px", cursor: "pointer" }}
              >
                Login
              </button>
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ fontSize: "12px", cursor: "pointer" }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
