import React, { useState } from 'react'
import styles from "./RollingCommission.module.css"
import { BsCalendarCheck } from 'react-icons/bs'
import Heading from "../../components/heading/Heading"
import { subHeaderBottomItems } from '../../data/Data'

const RollingCommission = () => {
  const [itemCount, setItemCount] = useState(0)
  return (
    <div className={styles.betList}>
      <div className={styles.getStatement}>
        <div className={styles.getStatementItem}>
          
          <select id='selectSource' style={{ outline: "none", padding: "5px", border: "1px solid #c8ced3", borderRadius: "5px" }}>
            <option value={"Data Source"} disabled>Data Source</option>
            <option value={"LIVE DATA"}>LIVE DATA</option>
            <option value={"BACKUP DATA"}>BACKUP DATA</option>
            <option value={"OLD DATA"}>OLD DATA</option>
          </select>
        </div>
        <div className={styles.getStatementItem}>
          
          <select id='selectSource' style={{ outline: "none", padding: "5px", border: "1px solid #c8ced3", borderRadius: "5px" }}>
            <option value={"Data Source"} disabled>Data Source</option>
            {
              subHeaderBottomItems.map((sport, index) => {
                return <option value={sport.title} key={index}>{sport.title}</option>
              })
            }
          </select>
        </div>
        <div className={styles.getStatementItem}>
          <div className={styles.getStatementSubItem}>
            <input type="text" value={"05/06/2023"} style={{ border: "none", outline: "none", padding: "5px", fontSize: "14px", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", backgroundColor: "#e0e6e6" }} readOnly />
            <div className="" style={{ width: "30px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BsCalendarCheck />
            </div>
          </div>
        </div>
        <div className={styles.getStatementItem}>
          <div className={styles.getStatementSubItem}>
            <input type="text" value={"05/06/2023"} style={{ border: "none", outline: "none", padding: "5px", fontSize: "14px", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", backgroundColor: "#e0e6e6" }} readOnly />
            <div className="" style={{ width: "30px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BsCalendarCheck />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", height: "100%", justifyContent: "flex-end" }}>

          <button style={{ padding: "6px 12px", cursor: "pointer", borderRadius: "5px", border: "none", backgroundColor: "#14213D", fontSize: "14px", fontWeight: "600", color: "white" }}>Get Commission</button>
        </div>

      </div>


      <Heading heading="Rolling Commission" />
      <div className={styles.userData}>

        {/* <ToastContainer /> */}




        <div className={styles.tableBoody}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Total Stack</th>
                <th className={styles.th}>Total Commission</th>


              </tr>
            </thead>
            {itemCount > 0 ? <tbody className={styles.tbody}>
              <tr className={styles.tr}>

                <td className={styles.td}>Hello</td>
                <td className={styles.td}> Seoul </td>
                <td className={styles.td}> 17 Dec, 2022 </td>

              </tr>


            </tbody> :
              <tbody className={styles.tbody}>
                <tr className={styles.tr}>
                  <td colSpan={10} className={styles.td}>No Data!</td>
                </tr>
              </tbody>
            }
          </table>

        </div>
        
      </div>
    </div>
  )
}

export default RollingCommission