import React, { useState } from 'react'
import styles from "./MyProfile.module.css"
import {BiEdit} from "react-icons/bi"
import {AiOutlineEye} from "react-icons/ai"
import ChangePassword from './ChangePassword'
import RollingCommission from './RollingCommission'
import Heading from '../../components/heading/Heading'

const MyProfile = () => {
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false)
    const [isRollingCommissionOpen, setIsRollingCommissionOpen] = useState(false)
    
  const showChangePassword = ()=>{
    setIsChangePasswordOpen(true)
  }
  const showRollingCommission = ()=>{
    setIsRollingCommissionOpen(true)
  }
  
  return (
    <>
    {isChangePasswordOpen?<ChangePassword setIsChangePasswordOpen={setIsChangePasswordOpen}/>:null}
    {isRollingCommissionOpen?<RollingCommission heading="Rolling Commission" setIsRollingCommissionOpen={setIsRollingCommissionOpen}/>:null}
    
    <div className={styles.accountDetails}>
        <Heading heading="Account Details"/>
        <div className={styles.accountDetailsItems}>
            <div className={styles.accountDetailsItem}>
                <div className={styles.firstItem}>Name</div>
                <div className={styles.secondItem}>demo</div>
            </div>
            <div className={styles.accountDetailsItem}>
                <div className={styles.firstItem}>Commission</div>
                <div className={styles.secondItem}>0</div>
            </div>
            <div className={styles.accountDetailsItem}>
                <div className={styles.firstItem}>Rolling Commission</div>
                <div className={styles.secondItem}><AiOutlineEye onClick={showRollingCommission}  style={{cursor:"pointer", color:"#357ae8"}}/></div>
            </div>
            
            
            <div className={styles.accountDetailsItem}>
                <div className={styles.firstItem}>Exposure</div>
                <div className={styles.secondItem}>50000</div>
            </div>
            <div className={styles.accountDetailsItem}>
                <div className={styles.firstItem}>Mobile Number</div>
                <div className={styles.secondItem}>1234567890</div>
            </div>
            <div className={styles.accountDetailsItem} style={{border:"none"}}>
                <div className={styles.firstItem}>Password</div>
                <div className={styles.secondItem}>
                    <span>**********</span>
                    <BiEdit onClick={showChangePassword} style={{cursor:"pointer" , marginLeft:"10px", color:"#357ae8"}}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyProfile