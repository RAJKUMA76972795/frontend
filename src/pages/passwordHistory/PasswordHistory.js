import React, { useState } from 'react'
import styles from "./PasswordHistory.module.css"
import Heading from '../../components/heading/Heading'


const PasswordHistory = () => {
  const [itemCount, setItemCount] = useState(1)
  return (
    <div className={styles.passwordHistory}>
      <Heading heading="Password Change History" />
        <div className={styles.userData}>

          {/* <ToastContainer /> */}
          <div className={styles.search}>
            <div className={styles.searchLeft}>
              <span>Show</span>
              <select name="userPagination" id="userPagination" style={{outline:"none" ,padding:"5px" , border:"1px solid #c8ced3" , borderRadius:"5px"}}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span>entries</span>
            </div>
            
            



          </div>


        
          <div className={styles.tableBoody}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                    <th className={styles.th}>Date & Time</th>
                        <th className={styles.th}>Remark</th>
                        
                        
                        
                    </tr>
                </thead>
                {itemCount>0?<tbody className={styles.tbody}>
                    <tr className={styles.tr}>
                        
                    <td className={styles.td}> 04-02-2023 22:40:09 </td>
                        <td className={styles.td}>Password changed by self</td>
                        
                        
                    </tr>
                    <tr className={styles.tr}>
                        
                    <td className={styles.td}> 04-02-2023 22:40:09 </td>
                        <td className={styles.td}>Password changed by self</td>
                        
                        
                    </tr>
                   
                
                </tbody>:
                <tbody className={styles.tbody}>
                  <tr className={styles.tr}>
                        <td colSpan={4} className={styles.td}>No Data available in table</td>
                    </tr>
                </tbody>
                }
            </table>
            
        </div>
          <div className={styles.tablePagination}>
            <span  className={styles.tablePaginationLeft}>Showing 0 to 0 of 0 entries</span>

            <div className={styles.tablePaginationRight}>
              <span >First</span>
              {/* style={page === 1 ? { color: "gray" } : { color: "#2E4B5E", cursor: "pointer" }} onClick={() => setPage(1)} */}
              <span >Previous</span>
              {/* style={page === 1 ? { color: "gray" } : { color: "#2E4B5E", cursor: "pointer" }} onClick={() => page >= 2 ? setPage(page - 1) : setPage(page)}  */}
              <span >Next</span>
              {/* style={page === totalPage ? { color: "gray" } : { color: "#2E4B5E", cursor: "pointer" }} onClick={() => page < totalPage ? setPage(page + 1) : setPage(page)}  */}
              <span >Last</span></div>
              {/* style={page === totalPage ? { color: "gray" } : { color: "#2E4B5E", cursor: "pointer" }} onClick={() => setPage(totalPage)}  */}
          </div>
        </div>
    </div>
  )
}

export default PasswordHistory