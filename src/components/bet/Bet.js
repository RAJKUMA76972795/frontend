import React, { useState } from 'react'
import styles from "./Bet.module.css"
import { FaTimes } from "react-icons/fa";
import { SportState } from '../../SportContext';

const Bet = (props) => {
  const { betHistories } = SportState();
  return (
    <div className={styles.bet}>
        <div className={styles.betHeading}>
            <span style={{color:"#222" , fontSize:"18px" , fontWeight:"700" , cursor:"pointer"}}>Open Bets</span>
            <FaTimes  style={{color:"#222" , fontSize:"18px" , fontWeight:"600" , cursor:"pointer"}} onClick={()=>props.setIsBetOpen(false)}/>
        </div>
        {/* <div style={{padding:"5px"}}>
          <select name="betName"  style={{width:"100%" , padding:"5px"}}>
            <option value={"Select Market"}>Select Market</option>
              
            </select>
          </div> */}

<div className={styles.tableBoody}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Date</th>
                        <th className={styles.th}>Time</th>
                        <th className={styles.th}>Amount</th>
                        <th className={styles.th}>Winning</th>
                        
                    </tr>
                </thead>
                {betHistories.length>0?<tbody className={styles.tbody}>
                    {betHistories.map((betHistory , index)=>{
                      return <tr className={styles.tr} key={index}>
                      <td className={styles.td}>{betHistory.date}</td>
                      
                      <td className={styles.td} >{betHistory.time}</td>
                      <td className={styles.td}>{betHistory.amount}</td>
                    
                      <td className={styles.td}>{betHistory.winner}</td>
                  </tr>
                    })
                      }
                </tbody>:
                <tbody className={styles.tbody}>
                  <tr className={styles.tr}>
                        <td colSpan={5} className={styles.td}>No Data!</td>
                    </tr>
                </tbody>
                }
            </table>
            
        </div>

    </div>
  )
}

export default Bet