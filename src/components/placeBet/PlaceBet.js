import React from 'react'
import styles from "./PlaceBet.module.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { SportState } from '../../SportContext';

const PlaceBet = (props) => {
  const { placeBet, betHistories } = SportState();

  const betPlace = () => {
    placeBet(props.betQuantity);
    localStorage.setItem("betHistories" , betHistories);
  }

  const cancelBet = () => {
    props.setBetType("");
    props.setBetIndex(-1);
  }
  return (
    <div className={styles.placeBet} style={{ backgroundColor: props.color }}>
      <div className={styles.placeBetTop}>
        <div className={styles.placeBetTopItem}>
          <div className="" style={{ padding: "5px 10px", border: "1px solid #e6dfcd" }}>
            <AiOutlineMinus style={{ color: "#1a8ee1", fontSize: "20px", fontWeight: "bolder", cursor: "pointer" }} onClick={() => props.setBetValue(parseFloat(props.betValue) - 0.01)} />
          </div>
          <input className={styles.inputStyle} type="number" value={props.betValue} onChange={(e) => props.setBetValue(e.target.value)} />
          <div className="" style={{ padding: "5px 10px", border: "1px solid #e6dfcd" }}>
            <AiOutlinePlus style={{ color: "#1a8ee1", fontSize: "20px", fontWeight: "bolder", cursor: "pointer" }} onClick={() => props.setBetValue(parseFloat(props.betValue) + 0.01)} />
          </div>
        </div>
        <div className={styles.placeBetTopItem}>
          <div className="" style={{ padding: "5px 10px", border: "1px solid #e6dfcd" }}>
            <AiOutlineMinus style={{ color: "#1a8ee1", fontSize: "20px", fontWeight: "bolder", cursor: "pointer" }} onClick={() => props.setBetQuantity(parseFloat(props.betQuantity) / 2)} />
          </div>
          <input className={styles.inputStyle} type="number" value={props.betQuantity} onChange={(e) => props.setBetQuantity(e.target.value)} />
          <div className="" style={{ padding: "5px 10px", border: "1px solid #e6dfcd" }}>
            <AiOutlinePlus style={{ color: "#1a8ee1", fontSize: "20px", fontWeight: "bolder", cursor: "pointer" }} onClick={() => props.setBetQuantity(parseFloat(props.betQuantity) * 2)} />
          </div>
        </div>
      </div>
      <div className={styles.placeBetBottom}>
        {
          [1000, 5000, 10000, 25000, 50000, 100000, 200000, 500000].map((amount, index) => {
            return <button key={index} className={styles.placeBetBottomItem} onClick={() => props.setBetQuantity(amount)}>{amount}</button>
          })
        }
      </div>
      <div className={styles.placeBetMobile}>
        <button className={styles.btn} onClick={cancelBet}>Cancel</button>
        <button className={styles.btnDisabled} style={{ background: (props.betQuantity > 0 ? "linear-gradient(-180deg, #315195 0%, #14213D 100%)" : "linear-gradient(to bottom, rgb(181, 181, 181), rgb(164, 164, 164))") }} onClick={betPlace}>Place Bets</button>
      </div>
    </div>
  )
}

export default PlaceBet