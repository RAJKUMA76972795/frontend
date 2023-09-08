import React from 'react'
import styles from "./RollingCommission.module.css"
import Heading from '../../components/heading/Heading'


const RollingCommission = (props) => {
    const items = ["Fancy" , "Matka" , "Casino" , "Binary" , "SportBook", "BookMaker"]
  return (
    <div className={styles.rollingCommission}>
        <Heading heading={props.heading}/>
        <span onClick={() => props.setIsRollingCommissionOpen(false)} style={{ position: "absolute", top: "10px", right: "10px", fontSize: "18px", fontWeight: "600", color: "white", cursor: "pointer" }}>x</span>
        <div className={styles.showItems}>
            {
                items.map((item,index)=>{
                    return <div className={styles.showItem}>
                        <span style={{width:"100px"}}>{item}</span>
                        <span>0</span>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default RollingCommission