import React, { useEffect, useState } from "react";
import styles from "./HomeTable.module.css";
import { FaTv } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SportState } from "../../SportContext";
import Loadingbar from "../loading/Loadingbar";

const HomeTable = () => {
  const navigate = useNavigate();
  const {
    highlights,
    setMarketId,
    loading,
    setLoginConfirmPopupOpen,
    setMarketData,
    setLoading,
  } = SportState();

  const tableHeaders = ["", "1", "x", "2", ""];

  const [width, setWidth] = useState(window.innerWidth <= 960 ? "90%" : "50%");
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 960) {
        setWidth("90%");
      } else {
        setWidth("50%");
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);

  // const handleClick = (matchItem)=>{
  //   setMarketId(matchItem.marketID);
  //   navigate("/crickets/1")
  // }
  return (
    <div className={styles.tableBoody}>
      {loading ? (
        <div />
      ) : (
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              {tableHeaders.map((tableHeader, index) => {
                return (
                  <th
                    className={`${styles.th} ${
                      index === 1 || index === 2 || index === 3
                        ? styles.mobileTh
                        : ""
                    }`}
                    key={index}
                    style={{ width: index === 0 ? width : "auto" }}
                  >
                    {tableHeader}
                  </th>
                );
              })}
            </tr>
          </thead>
          {highlights.length > 0 ? (
            <tbody className={styles.tbody}>
              {highlights.map((tableBody, index) => {
                return (
                  <tr className={styles.tr} key={index}>
                    <td
                      className={`${styles.td} ${styles.first}`}
                      style={{ textAlign: "left" }}
                      onClick={() => {
                        setMarketData({
                          games1: [],
                          games2: [],
                          fancy: [],
                          sports: [],
                        });
                        setMarketId(tableBody.marketID);
                        setLoading(true);
                        navigate("/crickets/1");
                      }}
                    >
                      <span>
                        <span className={styles.gameTitle}>
                          {tableBody.name} <span> </span>
                          {tableBody.inplay === "true" ?   (<span className={styles.inPlay} >In-Play </span>) : (
                            ""
                          )}
                          {tableBody.inplay === "true" ? (
                            <FaTv
                              style={{
                                color: "#508d0e",
                                fontSize: "13px",
                                fontWeight: "300",
                                marginBottom: "3px",
                                verticalAlign: "bottom",
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "grey",
                            marginLeft: "10px",
                          }}
                        >
                          {/* {`${tableBody.event.openDate.slice(0,10)} ${tableBody.event.openDate.slice(11,20)}`} */}
                        </span>
                        <span>
                          <span className={styles.inPlayStyle}></span>

                          <span className={styles.dateStyle}>
                            {tableBody.date.slice(0, 10)}
                            <span style={{ paddingLeft: "5px" }}></span>
                            {tableBody.date.slice(11, 20)}
                          </span>
                        </span>
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "top",
                          justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        {tableBody.isFancy === "true" ? (
                          <i
                            style={{
                              backgroundColor: "#0a92a5",
                              color: "white",
                              padding: "0 5px",
                              fontSize: "16px",
                              borderRadius: "4px",
                              fontWeight: "700",
                            }}
                          >
                            F
                          </i>
                        ) : (
                          ""
                        )}
                        {tableBody.isSportsBook === "true" ? (
                          <i
                            style={{
                              backgroundColor: "rgb(242, 109, 28)",
                              color: "white",
                              padding: "0 5px",
                              fontSize: "16px",
                              fontWeight: "700",
                              borderRadius: "4px",
                            }}
                          >
                            S
                          </i>
                        ) : (
                          ""
                        )}
                      </span>
                    </td>
                    <td className={`${styles.td} ${styles.mobileTd}`}>
                      <span className={styles.middle1}>
                        {tableBody["1_values"][0].back}
                      </span>
                      <span className={styles.middle2}>
                        {tableBody["1_values"][0].lay}
                      </span>
                    </td>
                    <td className={`${styles.td} ${styles.mobileTd}`}>
                      <span className={styles.middle1}>
                        {tableBody["x_values"][0].back}
                      </span>
                      <span className={styles.middle2}>
                        {tableBody["x_values"][0].lay}
                      </span>
                    </td>
                    <td className={`${styles.td} ${styles.mobileTd}`}>
                      <span className={styles.middle1}>
                        {tableBody["2_values"][0].back}
                      </span>
                      <span className={styles.middle2}>
                        {tableBody["2_values"][0].lay}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <div
                        className={styles.pinoffmobile}
                        onClick={() => setLoginConfirmPopupOpen(true)}
                      />
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
      )}
    </div>
  );
};

export default HomeTable;
