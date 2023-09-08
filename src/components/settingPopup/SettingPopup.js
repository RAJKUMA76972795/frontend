import React, { useState } from "react";
import styles from "./SettingPopup.module.css";
import { AiFillSetting } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const SettingPopup = (props) => {
  const [stakes, setStakes] = useState({
    stake1: 50,
    stake2: 100,
    stake3: 25000,
    stake4: 30000,
    stake5: 50000,
    stake6: 100000,
    stake7: 150000,
    stake8: 1100000,
  });
  const handleChange = (e) => {
    setStakes({ ...stakes, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.settingPopup}>
      <div className={styles.settingPopupHeading}>
        <div className={styles.settingPopupHeadingLeft}>
          <AiFillSetting />
          <span>Setting</span>
        </div>
        <FaTimes
          onClick={() => props.setIsStakePopupOpen(false)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={styles.settingPopupSubHeading}>
        <span>Stake</span>
      </div>
      <div className={styles.settingPopupMain}>
        <span>Quick Stakes</span>
        <div className={styles.settingPopupMainItem}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <input
                className={styles.inputStyle}
                value={stakes[`stake${item}`]}
                name={`stake${item}`}
                type="number"
                key={index}
                onChange={handleChange}
              />
            );
          })}
        </div>
        <div
          className=""
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "100%"
          }}
        >
          <button className={styles.btn}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingPopup;
