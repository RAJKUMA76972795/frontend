import React from 'react'
import styles from "./ChangePassword.module.css"
import Heading from '../../components/heading/Heading';


const ChangePassword = (props) => {
    return (
        <div className={styles.changePassword}>
            <Heading heading="Change Password" />
            <span onClick={() => props.setIsChangePasswordOpen(false)} style={{ position: "absolute", top: "10px", right: "10px", fontSize: "18px", fontWeight: "600", color: "white", cursor: "pointer" }}>x</span>
            <div className={styles.enterPassword}>
                <div className={styles.enterPasswordItem}>
                    <label htmlFor="oldPassword" style={{ color: "black", fontSize: "14px" }}>Your Password <span style={{ color: "red" }}>*</span></label>
                    <input className={styles.inputStyle} type="password" id="oldPassword" placeholder='Your Password ...' />
                </div>
                <div className={styles.enterPasswordItem}>
                    <label htmlFor="newPassword" style={{ color: "black", fontSize: "14px" }}>New Password <span style={{ color: "red" }}>*</span></label>
                    <input className={styles.inputStyle} type="password" id="newPassword" placeholder='New Password ...' />
                </div>
                <div className={styles.enterPasswordItem}>
                    <label htmlFor="confirmPassword" style={{ color: "black", fontSize: "14px" }}>Confirm Password <span style={{ color: "red" }}>*</span></label>
                    <input className={styles.inputStyle} type="password" id="confirmPassword" placeholder='Confirm Password ...' />
                </div>
                
            </div>
            <div className={styles.btnGroup}>
                    <button className={styles.btn} onClick={() => {
                        props.setIsChangePasswordOpen(false);
                    }}>Yes</button>
                    <button type="submit" className={styles.btn} style={{backgroundColor:"#989595"}} onClick={() => {
                        props.setIsChangePasswordOpen(false);
                    }}>No</button>
                </div>
        </div>
    )
}

export default ChangePassword