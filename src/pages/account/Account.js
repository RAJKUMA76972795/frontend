import React from 'react'
import styles from "./Account.module.css"
import {FaUserCircle} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { SportState } from '../../SportContext';
import { accounts } from '../../data/Data';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { username , setIsLoggedIn} = SportState();
  const navigate = useNavigate();
  const logoutUser = ()=>{
    localStorage.removeItem("authabcdUser");
    setIsLoggedIn(false)
    navigate("/")
  }
  return (
    <div className={styles.account}>
      <div className={styles.accountTop}>
    <FaUserCircle/>
    <span>{localStorage.getItem("username")}</span>
      </div>
      <div className={styles.accountMiddle}>
    {
      accounts.map((account , index)=>{
        return <div className={styles.accountMiddleItem} key={index} onClick={()=>navigate(account.url)}>
          <span style={{color:"#2789ce" , fontSize:"4vw" , fontWeight:"700"}}>{account.title}</span>
          <BsFillArrowRightCircleFill style={{color:"#223869" , fontSize:"4vw" , fontWeight:"700"}}/>
        </div>
      })
    }
      </div>
      <div className={styles.accountBottom} onClick={logoutUser}>
      <span>LOGOUT</span>
      <FontAwesomeIcon icon={faSignInAlt} style={{fontSize: "4.26667vw" ,fontWeight:"700", cursor:"pointer"}} />
      </div>
    </div>
  )
}

export default Account