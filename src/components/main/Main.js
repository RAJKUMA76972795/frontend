import React from "react";
import casimoLogo from "../..//assets/universe_casino.jpeg"
import styles from "./Main.module.css";
import ImageSlider from "../imageSlider/ImageSlider";
import HomeTable from "../homeTable/HomeTable";
import SubHeaderBottom from "../subHeaderBottom/SubHeaderBottom";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "../footer/Footer";
import androidApk from "../../assets/androidapk.png";
import { SportState } from "../../SportContext";
import { useLocation } from "react-router-dom";
import HomeMain from "../../pages/home/HomeMain";
import LoginConfirmPopup from "../loginConfirmPopup/LoginConfirmPopup";

const Main = () => {
  const location = useLocation();
  const { sportId, loginConfirmPopupOpen } = SportState();
  return (
    <>
      {/* {loginConfirmPopupOpen?<LoginConfirmPopup/>:null} */}
      <div className={styles.main}>
        <ImageSlider />
        <div className="" style={{ display: "flex", alignItems: "start" }}>
          <div className={styles.subHeaderBottom}>
            <SubHeaderBottom />
          </div>
          <a className={styles.searchClass}>
            <AiOutlineSearch />
          </a>
        </div>

        <p className={styles.text}>Highlights</p>
        {location.pathname === "/" ? (
          <HomeMain />
        ) : location.pathname === "/in-play" ? (
          "In -play"
        ) : // ) : location.pathname === "/account" ? (
        //   "Account"
        location.pathname === "/multi-markets" ? (
          "Multi-markets"
        ) : sportId === "1" ||
          sportId === "2" ||
          sportId === "4" ||
          sportId === "7522" ? (
          <HomeTable />
        ) : (
        <div _ngcontent-ovg-c3="" class="casino-icon">
            <a href="https://goaclubreal.com/"  style={{ textDecoration: "none" }}>
              <img _ngcontent-ovg-c3="" class="img-fluid"  src={casimoLogo}  alt="Universe Casino" />
              <div  className={styles.casinoname}>UNIVERSE CASINO</div>
            </a>
          </div>
         )}

        <Footer />
        <div className={styles.androidApk}>
          <img style={{ width: "50%" }} src={androidApk} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
