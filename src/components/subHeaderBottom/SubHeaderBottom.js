import React from "react";
import styles from "./SubHeaderBottom.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { subHeaderBottomItems } from "../../data/Data";
import { SportState } from "../../SportContext";

const SubHeaderBottom = () => {
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
      
      {subHeaderBottomItems.map((subHeaderItem) => {
        return (
          <div
            className={styles.subHeaderItem}
            key={subHeaderItem.title}
            style={
              location.pathname === subHeaderItem.url
                ? {
                    cursor: "default",
                    color: "white",
                    background:
                      "linear-gradient(-180deg,#184438 0, #14805e 100%)",
                    boxShadow: "0 1px 5px 0 rgb(0 0 0 /30%)",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }
                : { cursor: "pointer" }
            }
          >
            <span
              style={{
                alignItems: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: subHeaderItem.width,
                gap: "1px",
              }}
              onClick={() =>
                handleClick(subHeaderItem)
              }
            >
              {subHeaderItem.icon != null ? (
                <img
                  style={{ width: "25px"}}
                  src={subHeaderItem.icon}
                  alt=""
                />
              ) : (
                null
              )}
              <span className={`${subHeaderItem.title==="Casino"?styles.casino:""}`}>{subHeaderItem.title}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SubHeaderBottom;
