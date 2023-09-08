import React from "react";
import styles from "./Footer.module.css";
import { footerItems } from "../../data/Data";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {footerItems.map((item, index) => {
        return (
          <span
            className={styles.footerItem}
            style={{
              borderRight:
                index === footerItems.length - 1 ? "none" : "1px soild black",
            }}
            key={index}
          >
            {item.title}
          </span>
        );
      })}
    </div>
  );
};

export default Footer;
