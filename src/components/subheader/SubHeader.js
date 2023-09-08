import React from "react";
import styles from "./SubHeader.module.css";
import { subHeaderItems } from "../../data/Data";
import { useLocation, useNavigate } from "react-router-dom";
import { SportState } from "../../SportContext";
import {AiFillSetting} from "react-icons/ai"

const SubHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sportId , setSportId} = SportState();

  const handleClick = (subHeaderItem)=>{
    if(subHeaderItem.id==="0"){

    }
    else{
      setSportId(subHeaderItem.id)
    }
    
    if(subHeaderItem.url)  {
      navigate(`${subHeaderItem.url}`)
    } 
  }

  
  return (
    <div className={styles.subHeader}>
      <div className={styles.subHeaderMain}>
      {subHeaderItems.map((subHeaderItem) => {
        return (
          <div
            className={styles.subHeaderItem}
            key={subHeaderItem.title}
            style={
              location.pathname === subHeaderItem.url
                ? {
                  cursor: "default",
                  color: "white",
                  
                }
                : { cursor: "pointer" }
            }
          >
            <span

              className={`${subHeaderItem.title === "Casino" ? styles.casino : ""}`}
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                 width: subHeaderItem.width
              }}
              onClick={() =>
                handleClick(subHeaderItem)
              }
            >
              {subHeaderItem.title}
            </span>
          </div>
        );
      })}
      </div>
      <div className={styles.settings}>
        <span>Setting</span>
        <AiFillSetting/>
      </div>
    </div>
  );
};

export default SubHeader;
