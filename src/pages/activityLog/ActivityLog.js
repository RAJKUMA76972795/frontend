import React, { useState } from 'react'
import styles from "./ActivityLog.module.css"
import Heading from '../../components/heading/Heading'


const AcitivityLog = () => {
    const [itemCount, setItemCount] = useState(1)
  return (
    <div className={styles.activityLog}>
        <Heading heading="Activity Log"/>
        <div className={styles.activityLogItem}>
        <div className={styles.tableBoody}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Login Date & Time</th>
                        <th className={styles.th}>Login Status</th>
                        <th className={styles.th}>IP Address</th>
                        <th className={styles.th}>ISP</th>
                        <th className={styles.th}>City/State/Country</th>
                    </tr>
                </thead>
                {itemCount>0?<tbody className={styles.tbody}>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                        
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                       
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                        
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                        
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                        
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                       
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                        
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                        
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>04-05-2023 20:51:01</td>
                        
                        <td className={styles.td} style={{fontSize:"14px" , fontWeight:"bold" , color:"green"}}>login_success</td>
                        <td className={styles.td}>110.224.96.166</td>
                        <td className={styles.td}>
                        AS45609 Bharti Airtel Ltd. AS for GPRS Service
                        </td>
                        <td className={styles.td}>Kolkata/West Bengal/India</td>
                    </tr>
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
    </div>
  )
}

export default AcitivityLog