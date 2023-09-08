import React from "react";
import styles from "./MobileBottomBar.module.css";
import { mobileBottomBarMenu } from "../../data/Data";
import { useLocation, useNavigate } from "react-router-dom";
import { SportState } from "../../SportContext";

const MobileBottomBar = () => {
  const { setLoginConfirmPopupOpen, isLoggedIn } = SportState();
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (data) => {
    if (data.url === "/account" && isLoggedIn) {
      navigate(data.url)
    }
    else if (data.url === "/account" && !isLoggedIn) {
      setLoginConfirmPopupOpen(true)
    }
    else {
      navigate(data.url)
    }

  }
  return (
    <div className={styles.mobileBottomBar}>
      {mobileBottomBarMenu.map((data, index) => {
        return (
          <div key={index}>
            <div
              className={
                // index != 2?
                styles.mobileBottomBarItem
                // : styles.mobileBottomBarItemFull
              }

              style={{
                background:
                  location.pathname === data.url
                    ? "linear-gradient(-180deg,#32617f 20%,#1f4258 91%)"
                    : "linear-gradient(180deg, #2A3A43 27%, #1C282D 83%)",
                cursor: "pointer",
              }}
              onClick={()=>handleClick(data)}
            >
              <img
                src={data.icon}
                className={styles.bottomIconStyle}
                style={
                  data.title === "Sports"
                    ? { marginTop: "-15px" }
                    : { marginTop: "0" }
                }
                alt="home"
              />
              <span>{data.title}</span>
            </div>
            <div
              className=""
              style={{
                position: "absolute",
                height: "25vw",
                left: "50vw",
                transform: "translate(-50% , 50%)",
                width: "27vw",
                bottom: "23px",
                background:
                  location.pathname === "/sports"
                    ? "linear-gradient(-180deg,#32617f 20%,#1f4258 91%)"
                    : "linear-gradient(180deg, #2A3A43 27%, #1C282D 83%)",
                borderRadius: "90%",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileBottomBar;
