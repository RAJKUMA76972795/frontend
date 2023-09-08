import React, { useState } from "react";
import styles from "./Sports.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  leftData,
  leftDataExpanded,
  sportsTopMenu,
  subHeaderBottomItems,
} from "../../data/Data";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SportState } from "../../SportContext";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Sports = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSportId } = SportState();

  const handleSportId = (subHeaderItem) => {
    setSportId(subHeaderItem.id);

    if (subHeaderItem.url) {
      navigate(`${subHeaderItem.url}`);
    }
  };

  return (
    <div className={styles.left}>
      <div
        className=""
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <span
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "500",
            padding: "6px",
            color: "white",
            background: "linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)",
          }}
        >
          Quick Links
        </span>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {sportsTopMenu.map((item, index) => {
            return (
              <div
                className={styles.menuItem}
                key={index}
                onClick={() => handleSportId(item)}
              >
                <img
                  src={item.icon}
                  alt=""
                  className={styles.bottomIconStyle}
                />
                <span
                  style={{
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
        <span
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "500",
            padding: "6px",
            color: "white",
            background: "linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)",
          }}
        >
          All Sports
        </span>
      </div>

      <div className="" style={{ backgroundColor: "white" }}>
        {subHeaderBottomItems.map((data) => {
          return (
            <div
              className={styles.mainItem2}
              key={data.title}
              onClick={() => handleSportId(data)}
            >
              <div
                className={styles.leftItem}
                style={{
                  borderBottom: "1px solid #d2d6e2",
                  color: "#223869",
                  padding: "9px",
                }}
              >
                <p style={{ color: "#2789ce", fontSize: "14.4px" }}>
                  {data.title} 
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    paddingRight: "3px",
                    paddingLeft: "3px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                  }}
                >
                  <MdOutlineArrowForwardIos
                    style={{
                      fontSize: "18px",
                      fontWeight: "900",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sports;
