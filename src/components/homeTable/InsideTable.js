import React, { useEffect, useState } from "react";
import styles from "./InsideTable.module.css";
import { AiOutlineInfoCircle, AiOutlineArrowRight } from "react-icons/ai";
import { SportState } from "../../SportContext";
import PlaceBet from "../placeBet/PlaceBet";
import Loadingbar from "../loading/Loadingbar";

const InsideTable = () => {
  const { marketData, loading, setLoginConfirmPopupOpen} = SportState();
  const [isFancyBet, setIsFancyBet] = useState(true);
  const [betType, setBetType] = useState("");
  const [betIndex, setBetIndex] = useState(-1);
  const [betValue, setBetValue] = useState(0);
  const [betQuantity, setBetQuantity] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const handleClick = (game1, index, value, color) => {
    setBetType(game1.name);
    setBetIndex(index);
    setBetValue(value.toString().split(" ")[0]);
    setBetQuantity(0);
    setColor(color);
  };
  const fancyList = [
    "All",
    "Fancy",
    "Line Market",
    "Ball by Ball",
    "Meter",
    "Khado",
  ];
  const sportsBookList = [
    "All",
    "Match",
    "Odd/Even",
    "Batsman",
    "Bowler",
    "Extra",
  ];
  const [fancyName, setFancyName] = useState("All");
  const [sportBookName, setSportBookName] = useState("All");
  // const tableHeaders = ["Min/Max 100-1000", "", "", "Back", "Lay", "", ""]

  function randomValue(value) {
    let parsedValue = 0;
    let format = '';
  
    if (value.endsWith('K')) {
      const numericPart = parseFloat(value);
      parsedValue = numericPart * 1000;
      format = 'K';
    } else {
      parsedValue = parseFloat(value);
      format = '';
    }
  
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    const isIncrease = Math.random() < 0.5; // Generate a random boolean
  
    const percentage = randomNumber / 100;
  
    const result = isIncrease ? parsedValue * (1 + percentage) : parsedValue * (1 - percentage);
  
    // Format the result back into the original format
    let formattedResult = '';
    if (format === 'K') {
      if (result >= 1000) {
        formattedResult = (result / 1000).toFixed(1) + format;
      } else {
        formattedResult = result.toFixed(1);
      }
    } else {
      formattedResult = result.toFixed(1);
    }
  

    console.log(formattedResult);
    return formattedResult;
  }
  

  
  

  const [width, setWidth] = useState(window.innerWidth <= 960 ? "70%" : "40%");
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 960) {
        setWidth("70%");
      } else {
        setWidth("40%");
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.first}>
      <div className={styles.tableBoody}>
        {loading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              height: "80vh",
              alignItems: "center",
            }}
          >
            <Loadingbar />
          </div>
        ) : (
          marketData.games1.map((game1, index1) => {
            return (
              <div className="" key={index1} style={{ marginBottom: "20px" }}>
                <div className={styles.winner}>
                  <div className={styles.winnerLeft}>
                    <span>{game1.name}</span>
                    <AiOutlineInfoCircle
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    />
                  </div>
                  <div className={styles.winnerRight}>
                    <span>{game1.totalMatched}</span>
                  </div>
                </div>
                <table className={styles.table}>
                  <thead className={styles.thead}>
                    <tr className={styles.tr}>
                      {[
                        `Min/Max ${game1.minMax}`,
                        "",
                        "",
                        "Back",
                        "Lay",
                        "",
                        "",
                      ].map((tableHeader, index) => {
                        return (
                          <th
                            className={`${styles.th} ${
                              index === 1 ||
                              index === 2 ||
                              index === 5 ||
                              index === 6
                                ? styles.mobileTh
                                : ""
                            }`}
                            key={index}
                            style={{
                              width: index === 0 ? width : "auto",
                              backgroundColor:
                                index === 0
                                  ? "#bed5d8"
                                  : index === 3
                                  ? "#72bbef"
                                  : index === 4
                                  ? "#faa9ba"
                                  : "white",
                              fontWeight: index == 0 ? "400" : "800",
                              fontSize: index == 0 ? "10px" : "14px",
                              margin: index == 0 ? "4px" : "0px",
                              paddingLeft: index == 0 ? "7px" : "0px",
                              flex: index === 0 ? 4 : 1,
                            }}
                          >
                            {tableHeader}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  {game1.matches.length > 0 ? (
                    <tbody className={styles.tbody}>
                      {game1.matches.map((tableBody, index) => {
                        return (
                          <>
                            <tr className={styles.tr} key={index}>
                              <td
                                className={`${styles.td} ${styles.first}`}
                                style={{
                                  textAlign: "left",
                                  marginLeft: "5px",
                                  flex: 4,
                                }}
                              >
                                <span
                                  style={{
                                    color: "#23282c",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {tableBody.name}
                                </span>
                                <span
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                >
                                  <AiOutlineArrowRight /> <span>0.00</span>
                                </span>
                              </td>
                              <td
                                className={`${styles.td} ${styles.mobileTd}`}
                                style={{ flex: 1 }}
                                onClick={() =>
                                  handleClick(
                                    game1,
                                    index,
                                    tableBody.back3 ? tableBody.back3.value : 0,
                                    "#72bbef"
                                  )
                                }
                              >
                                <span
                                  className={styles.middle1}
                                  style={{ backgroundColor: "#d7e8f4" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.back3
                                      ? tableBody.back3.value
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.back3
                                      ? tableBody.back3.total
                                        ? tableBody.back3.total
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </td>
                              <td
                                className={`${styles.td} ${styles.mobileTd}`}
                                style={{ flex: 1 }}
                                onClick={() =>
                                  handleClick(
                                    game1,
                                    index,
                                    tableBody.back2 ? tableBody.back2.value : 0,
                                    "#72bbef"
                                  )
                                }
                              >
                                <span
                                  className={styles.middle2}
                                  style={{ backgroundColor: "#b7d5eb" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.back2
                                      ? tableBody.back2.value.split(" ")[0]
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.back2
                                      ? tableBody.back2.total
                                        ? tableBody.back2.total
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </td>
                              <td
                                className={`${styles.td}`}
                                style={{ flex: 1 }}
                                onClick={() =>
                                  handleClick(
                                    game1,
                                    index,
                                    tableBody.back1 ? tableBody.back1.value : 0,
                                    "#72bbef"
                                  )
                                }
                              >
                                <span
                                  className={styles.middle1}
                                  style={{ backgroundColor: "#72bbef" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.back1
                                      ? tableBody.back1.value.split(" ")[0]
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.back1
                                      ? tableBody.back1.total
                                        ? randomValue(tableBody.back1.total)
                                        
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </td>
                              <td
                                className={`${styles.td}`}
                                style={{ flex: 1 }}
                                onClick={() =>
                                  handleClick(
                                    game1,
                                    index,
                                    tableBody.lay1 ? tableBody.lay1.value : 0,
                                    "#faa9ba"
                                  )
                                }
                              >
                                <span
                                  className={styles.middle2}
                                  style={{ backgroundColor: "#faa9ba" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.lay1
                                      ? tableBody.lay1.value.split(" ")[0]
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.lay1
                                      ? tableBody.lay1.total
                                        ? randomValue(tableBody.lay1.total)
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </td>
                              <td
                                className={`${styles.td} ${styles.mobileTd}`}
                                style={{ flex: 1 }}
                                onClick={() =>
                                  handleClick(
                                    game1,
                                    index,
                                    tableBody.lay2 ? tableBody.lay2.value : 0,
                                    "#faa9ba"
                                  )
                                }
                              >
                                <span
                                  className={styles.middle1}
                                  style={{ backgroundColor: "#efd3d9" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.lay2
                                      ? tableBody.lay2.value.split(" ")[0]
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.lay2
                                      ? tableBody.lay2.total
                                        ? tableBody.lay2.total
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </td>
                              <td
                                className={`${styles.td} ${styles.mobileTd}`}
                                style={{ flex: 1 }}
                                onClick={() =>
                                  handleClick(
                                    game1,
                                    index,
                                    tableBody.lay3 ? tableBody.lay3.value : 0,
                                    "#faa9ba"
                                  )
                                }
                              >
                                <span
                                  className={styles.middle2}
                                  style={{ backgroundColor: "#f6e6ea" }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.lay3
                                      ? tableBody.lay3.value.split(" ")[0]
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.lay3
                                      ? tableBody.lay3.total
                                        ? tableBody.lay3.total
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </td>
                            </tr>
                            {game1.name === betType && index === betIndex ? (
                              <PlaceBet
                                setBetType={setBetType}
                                setBetIndex={setBetIndex}
                                betValue={betValue}
                                setBetValue={setBetValue}
                                betQuantity={betQuantity}
                                setBetQuantity={setBetQuantity}
                                color={color}
                              />
                            ) : null}
                          </>
                        );
                      })}
                    </tbody>
                  ) : (
                    <tbody className={styles.tbody}>
                      <tr className={styles.tr}>
                        <td colSpan={5} className={styles.td}>
                          No Data!
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>
            );
          })
        )}
      </div>

      <div className={styles.tableBoody}>
        {loading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              height: "80vh",
              alignItems: "center",
            }}
          >
            <Loadingbar />
          </div>
        ) : (
          marketData.games2.map((game1, index1) => {
            return (
              <div className="" key={index1} style={{ marginBottom: "20px" }}>
                <div className={styles.winner}>
                  <div className={styles.winnerLeft}>
                    <span>{game1.name}</span>
                    <AiOutlineInfoCircle
                      style={{
                        cursor: "pointer",
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    />
                  </div>
                  <div className={styles.winnerRight}>
                    <span>{game1.totalMatched}</span>
                  </div>
                </div>
                <table className={`${styles.table} ${styles.game2}`}>
                  <thead className={styles.thead}>
                    <tr className={styles.tr}>
                      {["", "", "", "Back", "Lay", "", ""].map(
                        (tableHeader, index) => {
                          return (
                            <th
                              className={`${styles.th} ${
                                index === 1 ||
                                index === 2 ||
                                index === 5 ||
                                index === 6
                                  ? styles.mobileTh
                                  : ""
                              }`}
                              key={index}
                              style={{
                                width: index === 0 ? width : "auto",
                                backgroundColor: "#fbfcdb",
                                width: index === 0 ? width : "auto",

                                fontWeight: index == 0 ? "400" : "800",
                                fontSize: index == 0 ? "10px" : "14px",
                                margin: index == 0 ? "4px" : "0px",
                                paddingLeft: index == 0 ? "7px" : "0px",
                                flex: index === 0 ? 4 : 1,
                              }}
                            >
                              {tableHeader}
                            </th>
                          );
                        }
                      )}
                    </tr>
                  </thead>
                  {game1.matches.length > 0 ? (
                    <tbody className={styles.tbody}>
                      {game1.matches.map((tableBody, index) => {
                        return (
                          <tr className={styles.tr} key={index}>
                            <td
                              className={`${styles.td} ${styles.first}`}
                              style={{
                                textAlign: "left",
                                marginLeft: "5px",
                                flex: 4,
                              }}
                            >
                              <span
                                style={{
                                  color: "#23282c",
                                  fontSize: "14px",
                                  fontWeight: "700",
                                }}
                              >
                                {tableBody.name}
                              </span>
                              <span
                                style={{
                                  color: "red",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                <AiOutlineArrowRight /> <span>0.00</span>
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{ flex: 1 }}
                            >
                              <span
                                className={styles.middle1}
                                style={{
                                  background:
                                    "linear-gradient(-180deg,#d7e8f4 0, #cadfef 100%)",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {tableBody.back3 ? tableBody.back3.value : 0}
                                </span>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {tableBody.back3
                                    ? tableBody.back3.total
                                      ? tableBody.back3.total
                                      : 0
                                    : 0}
                                </span>
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{ flex: 1 }}
                            >
                              <span
                                className={styles.middle2}
                                style={{
                                  background:
                                    "linear-gradient(-180deg,#e2ebf1 0, #9bcbf0 100%)",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {tableBody.back2
                                    ? tableBody.back2.value.split(" ")[0]
                                    : 0}
                                </span>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {tableBody.back2
                                    ? tableBody.back2.total
                                      ? tableBody.back2.total
                                      : 0
                                    : 0}
                                </span>
                              </span>
                            </td>
                            <td className={`${styles.td}`} style={{ flex: 1 }}>
                              <span
                                className={styles.middle1}
                                style={{
                                  padding: "6px",
                                  background:
                                    "linear-gradient(-180deg,#d1e4f1 0, #72bbef 100%)",
                                }}
                              >
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    backgroundColor: "#72bbef",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "2px",
                                    border: "1px solid white",
                                    padding: "3px",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.back1
                                      ? tableBody.back1.value.split(" ")[0]
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.back1
                                      ? tableBody.back1.total
                                        ? tableBody.back1.total
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </span>
                            </td>
                            <td className={`${styles.td}`} style={{ flex: 1 }}>
                              <span
                                className={styles.middle2}
                                style={{
                                  padding: "6px",
                                  background:
                                    "linear-gradient(-180deg,#faa9ba 0, #f0c0cb 100%)",
                                }}
                              >
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    backgroundColor: "#faa9ba",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "2px",
                                    border: "1px solid white",
                                    padding: "3px",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    {tableBody.lay1
                                      ? tableBody.lay1.value.split(" ")[0]
                                      : 0}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {tableBody.lay1
                                      ? tableBody.lay1.total
                                        ? tableBody.lay1.total
                                        : 0
                                      : 0}
                                  </span>
                                </span>
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{ flex: 1 }}
                            >
                              <span
                                className={styles.middle1}
                                style={{
                                  background:
                                    "linear-gradient(-180deg,#edacbc 0, #efd3d9 100%)",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {tableBody.lay2
                                    ? tableBody.lay2.value.split(" ")[0]
                                    : 0}
                                </span>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {tableBody.lay2
                                    ? tableBody.lay2.total
                                      ? tableBody.lay2.total
                                      : 0
                                    : 0}
                                </span>
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{ flex: 1 }}
                            >
                              <span
                                className={styles.middle2}
                                style={{
                                  background:
                                    "linear-gradient(-180deg,#efc4ce 0, #f6e6ea 100%)",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {tableBody.lay3
                                    ? tableBody.lay3.value.split(" ")[0]
                                    : 0}
                                </span>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {tableBody.lay3
                                    ? tableBody.lay3.total
                                      ? tableBody.lay3.total
                                      : 0
                                    : 0}
                                </span>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  ) : (
                    <tbody className={styles.tbody}>
                      <tr className={styles.tr}>
                        <td colSpan={5} className={styles.td}>
                          No Data!
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>
            );
          })
        )}
      </div>

      <div
        className={styles.winner}
        style={{ justifyContent: "flex-start", gap: "10px", marginBottom: "0" }}
      >
        <div
          className={styles.winnerLeft}
          style={{ backgroundColor: "#067e8f" }}
        >
          <span
            onClick={() => setIsFancyBet(true)}
            style={{ cursor: "pointer" }}
          >
            Fancy Bet
          </span>
          <AiOutlineInfoCircle
            style={{ cursor: "pointer", fontSize: "14px", fontWeight: "700" }}
          />
        </div>
        <div
          className={styles.winnerLeft}
          style={{ backgroundColor: "#e4550e" }}
        >
          <span
            onClick={() => setIsFancyBet(false)}
            style={{ cursor: "pointer" }}
          >
            Sportsbook
          </span>
          <AiOutlineInfoCircle
            style={{ cursor: "pointer", fontSize: "14px", fontWeight: "700" }}
          />
        </div>
      </div>
      <div
        className=""
        style={{
          height: "30px",
          width: "100%",
          marginTop: "-5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "5px",
          overflowX: "auto",
          background: isFancyBet
            ? "linear-gradient(180deg,#0a92a5 15%,#076875 100%)"
            : "linear-gradient(180deg,#f26d1c 15%,#d14100 100%)",
        }}
      >
        {isFancyBet ? (
          <div
            className={styles.fancyHeading}
            style={{
              padding: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              borderRadius: "5px",
              maxLines: "1",
              backgroundColor: "#55a0aa",
            }}
          >
            {fancyList.map((fancy, index) => {
              return (
                <div
                  className={styles.fancy}
                  onClick={() => setFancyName(fancy)}
                  style={{
                    maxLines: "1",
                    backgroundColor: fancyName === fancy ? "white" : "#55a0aa",
                  }}
                  key={index}
                >
                  {fancy}
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className={styles.fancyHeading}
            style={{
              maxLines: "1",
              padding: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              borderRadius: "5px",
              maxWidth: "95vw",
              overflowX: "auto",
              backgroundColor: "#eea679",
            }}
          >
            {sportsBookList.map((sportBook, index) => {
              return (
                <div
                  className={styles.fancy}
                  onClick={() => setSportBookName(sportBook)}
                  style={{
                    maxLines: "1",
                    backgroundColor:
                      sportBookName === sportBook ? "white" : "#eea679",
                  }}
                  key={index}
                >
                  {sportBook}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {isFancyBet ? (
        <div
          className={styles.tableBoody}
          style={{ marginTop: "-5px", marginBottom: "100px" }}
        >
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                {["", "No", "Yes", "Min/Max"].map((tableHeader, index) => {
                  return (
                    <th
                      className={`${styles.th} ${
                        index === 3 ? styles.mobileTh : ""
                      }`}
                      key={index}
                      style={{
                        width: index === 0 ? width : "auto",
                        backgroundColor:
                          index === 1
                            ? "#faa9ba"
                            : index === 2
                            ? "#72bbef"
                            : "white",
                        flex: index === 0 ? 5 : 1,
                      }}
                    >
                      {tableHeader}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className={styles.tbody}>
              {fancyName === "All" &&
                marketData.fancy.map((tableBody, index) => {
                  return (
                    <tr className={styles.tr} key={index}>
                      <td
                        className={`${styles.td}`}
                        style={{
                          textAlign: "left",
                          marginLeft: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flex: 5,
                        }}
                      >
                        <span
                          className={styles.first}
                          style={{ padding: "5px" }}
                        >
                          <span
                            style={{
                              color: "#23282c",
                              fontSize: "14px",
                              fontWeight: "700",
                            }}
                          >
                            {tableBody.name}
                          </span>
                          <span
                            style={{
                              color: "red",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            <AiOutlineArrowRight /> <span>0.00</span>
                          </span>
                        </span>
                        <button
                          className={styles.btn}
                          onClick={() => setLoginConfirmPopupOpen(true)}
                        >
                          Book
                        </button>
                        <div className={styles.info}>
                          <AiOutlineInfoCircle
                            style={{
                              cursor: "pointer",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          />
                        </div>
                      </td>
                      <td
                        className={`${styles.td}`}
                        style={{ position: "relative", flex: 1 }}
                      >
                        <span
                          className={styles.middle1}
                          style={{
                            backgroundColor: "#faa9ba",
                            opacity:
                              tableBody.yes.total === "Suspended" ||
                              tableBody.yes.total === "Ball Running"
                                ? 0.8
                                : 1,
                          }}
                        >
                          <span style={{ fontSize: "12px", fontWeight: "700" }}>
                            {tableBody.no.value}
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "400" }}>
                            {tableBody.no.total}
                          </span>
                        </span>
                        <span>
                          {tableBody.yes.total === "Suspended" ||
                          tableBody.yes.total === "Ball Running" ? (
                            <span
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(36,58,72,.4)",
                              }}
                            ></span>
                          ) : null}

                          {tableBody.yes.total === "Suspended" ||
                          tableBody.yes.total === "Ball Running" ? (
                            <span
                              style={{
                                position: "absolute",
                                top: "50%",
                                right:
                                  tableBody.yes.total === "Suspended"
                                    ? "-30px"
                                    : tableBody.yes.total === "Ball Running"
                                    ? "-37px"
                                    : "0px",
                                transform: "translate(0 , -50%)",
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "white",
                                zIndex: "5",
                              }}
                            >
                              {tableBody.yes.total}
                            </span>
                          ) : null}
                        </span>
                      </td>
                      <td
                        className={`${styles.td}`}
                        style={{ position: "relative", flex: 1 }}
                      >
                        <span
                          className={styles.middle2}
                          style={{
                            backgroundColor: "#72bbef",
                            opacity:
                              tableBody.yes.total === "Suspended" ||
                              tableBody.yes.total === "Ball Running"
                                ? 0.8
                                : 1,
                          }}
                        >
                          <span style={{ fontSize: "12px", fontWeight: "700" }}>
                            {tableBody.yes.total === "Suspended" ||
                            tableBody.yes.total === "Ball Running"
                              ? tableBody.yes.value.split(" ")[0]
                              : tableBody.yes.value}
                          </span>
                          <span style={{ fontSize: "10px", fontWeight: "400" }}>
                            {tableBody.yes.total === "Suspended" ||
                            tableBody.yes.total === "Ball Running"
                              ? tableBody.yes.value.split(" ")[1]
                              : tableBody.yes.total}
                          </span>
                        </span>
                        <span>
                          {tableBody.yes.total === "Suspended" ||
                          tableBody.yes.total === "Ball Running" ? (
                            <span
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(36,58,72,.4)",
                              }}
                            ></span>
                          ) : null}
                        </span>
                      </td>
                      <td
                        className={`${styles.td} ${styles.mobileTd}`}
                        style={{ flex: 1 }}
                      >
                        <span
                          className={styles.middle1}
                          style={{ backgroundColor: "white" }}
                        >
                          <span style={{ fontSize: "12px", fontWeight: "700" }}>
                            {tableBody.minMax}
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className={styles.tableBoody}
          style={{ marginTop: "-10px", marginBottom: "100px" }}
        >
          {sportBookName === "All" &&
            marketData.sports.map((sport, index) => {
              return (
                <div className="" key={index}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "space-between",
                      padding: "5px 10px",
                      background:
                        "linear-gradient(180deg,#f26d1c 15%,#d14100 100%)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      {sport.name}
                    </span>
                    <AiOutlineInfoCircle
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "800",
                        color: "white",
                      }}
                    />
                  </div>
                  {sport.matches.map((tableBody, index1) => {
                    return (
                      <table className={styles.table} key={index1}>
                        <tbody className={styles.tbody}>
                          <tr className={styles.tr}>
                            <td
                              className={`${styles.td}`}
                              style={{
                                textAlign: "left",
                                marginLeft: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flex: 6,
                              }}
                            >
                              <span
                                className={styles.first}
                                style={{ padding: "5px" }}
                              >
                                <span
                                  style={{
                                    color: "#23282c",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {tableBody.name}
                                </span>
                                <span
                                  style={{
                                    color: "red",
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                >
                                  <AiOutlineArrowRight /> <span>0.00</span>
                                </span>
                              </span>
                            </td>
                            <td
                              className={`${styles.td}`}
                              style={{
                                textAlign: "right",
                                width: 130,
                                flex: 1,
                              }}
                            >
                              <span
                                className={styles.middle1}
                                style={{
                                  backgroundColor: "#72e3a0",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  width: "100%",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                >
                                  {tableBody.back1.value}
                                </span>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                  }}
                                >
                                  {tableBody.back1.total}
                                </span>
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{
                                textAlign: "right",
                                width: 160,
                                flex: 1,
                              }}
                            >
                              <span className={styles.middle2}>
                                <span
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                  }}
                                ></span>
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                  }}
                                ></span>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    );
                  })}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
// }

export default InsideTable;
