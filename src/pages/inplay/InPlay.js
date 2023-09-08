import React, { useEffect, useState } from "react";
import styles from "./InPlay.module.css";
import Main from "../../components/main/Main";
import { SportState } from "../../SportContext";
import { inplayData } from "../../data/Data";
import Loadingbar from "../../components/loading/Loadingbar";

const InPlay = () => {
  const { setLoading, loading } = SportState();
  useEffect(() => {
    getInplays();
  }, []);
  const tableHeaders = ["", "1", "x", "2"];
  const [inplays, setInplays] = useState(inplayData);
  const [inplayType, setInplayType] = useState("inPlay");
  const [width, setWidth] = useState(window.innerWidth <= 960 ? "100%" : "60%");
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 960) {
        setWidth("100%");
      } else {
        setWidth("60%");
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);
  const getInplays = async () => {
    setLoading(true);
    const response = await fetch(`http://139.59.13.27:8085/inplay`, {
      method: "GET",
    });

    const json = await response.json();
    setLoading(false);
    setInplays(json);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.inplayNav}>
        {[
          { name: "In-Play", id: "inPlay" },
          { name: "Today", id: "inPlayToday" },
          { name: "Tomorrow", id: "inPlayTomorrow" },
        ].map((game, index) => {
          return (
            <span
              className={styles.inplayItem}
              key={index}
              onClick={() => setInplayType(game.id)}
              style={{
                backgroundColor: inplayType === game.id ? "#2a3a43" : "white",
                color: inplayType === game.id ? "white" : "#2a3a43",
              }}
            >
              {game.name}
            </span>
          );
        })}
      </div>
      {loading ? (
        <div
          className=""
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#e4e5e6",
            alignItems: "center",
          }}
        >
          <Loadingbar />
        </div>
      ) : (
        <div
          className={styles.tableBoody}
          style={{ marginTop: "3px", marginBottom: "100px" }}
        >
          {inplays[inplayType].map((sport, index) => {
            return (
              <div className="" key={index}>
                <div
                  className=""
                  style={{
                    padding: "5px 10px",
                    textAlign: "center",
                    background:
                      "linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",                    textAlign: "center",

                      color: "white",
                    }}
                  >
                    {sport.gameName}
                  </span>
                </div>
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
                            style={{
                              width: index === 0 ? width : width,
                              flex: index === 0 ? 4 : 1,
                            }}
                          >
                            {tableHeader}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  {sport.matches.length > 0 ? (
                    <tbody className={styles.tbody}>
                      {sport.matches.map((tableBody, index) => {
                        return (
                          <tr className={styles.tr} key={index}>
                            <td
                              className={`${styles.td} ${styles.first}`}
                              style={{ textAlign: "left", flex: 4 }}
                            >
                              <span>
                                <span className={styles.gameTitle}>
                                  {tableBody.name}
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
                                <span
                                  style={{
                                    fontSize:
                                      inplayType === "inPlay" ? "14px" : "12px",
                                    fontWeight:
                                      inplayType === "inPlay" ? 700 : 600,
                                    color:
                                      inplayType === "inPlay"
                                        ? "green"
                                        : "grey",
                                    marginLeft: "10px",
                                  }}
                                >
                                  {inplayType === "inPlay" ? "In-Play" : null}
                                  {/* `${tableBody.date.slice(0, 10)} ${tableBody.date.slice(11, 20)}` */}
                                </span>
                              </span>
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "20px",
                                }}
                              >
                                {tableBody.isFancy === "true" ? (
                                  <i
                                    style={{
                                      backgroundColor: "#0a92a5",
                                      color: "white",
                                      padding: "0 5px",
                                      fontSize: "14px",
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
                                      backgroundColor: "#0a92a5",
                                      color: "white",
                                      padding: "0 5px",
                                      fontSize: "14px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    S
                                  </i>
                                ) : (
                                  ""
                                )}
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{ flex: 1 }}
                            >
                              <span className={styles.middle1}>
                                {tableBody["1_values"][0].back}
                              </span>
                              <span className={styles.middle2}>
                                {tableBody["1_values"][0].lay}
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{ flex: 1 }}
                            >
                              <span className={styles.middle1}>
                                {tableBody["x_values"][0].back}
                              </span>
                              <span className={styles.middle2}>
                                {tableBody["x_values"][0].lay}
                              </span>
                            </td>
                            <td
                              className={`${styles.td} ${styles.mobileTd}`}
                              style={{ flex: 1 }}
                            >
                              <span className={styles.middle1}>
                                {tableBody["2_values"][0].back}
                              </span>
                              <span className={styles.middle2}>
                                {tableBody["2_values"][0].lay}
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
          })}
        </div>
      )}
    </div>
  );
};

export default InPlay;
