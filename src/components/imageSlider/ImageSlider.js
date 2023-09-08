import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
import { imageList } from "../../data/Data";

const ImageSlider = () => {
  const [imageNo, setImageNo] = useState(0);

  return (
    <div className={styles.imageSlider}>
      <img src={imageList[imageNo]} alt="" />

      {imageList.map((image, index) => {
        return (
          <div
            className={styles.circle}
            style={{
              left: `calc( 50% + ${index * 20}px - ${imageList.length * 10}px)`,
              backgroundColor: `${imageNo === index ? "white" : "black"}`,
            }}
            onClick={() => setImageNo(index)}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
