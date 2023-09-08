import React from 'react'
import styles from "./Heading.module.css";

const Heading = (props) => {
  return (
    <div className={styles.heading}><h3>{props.heading}</h3></div>
  )
}

export default Heading