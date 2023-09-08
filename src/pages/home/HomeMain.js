import React from "react";
import styles from "./HomeMain.module.css";
import HomeTable from "../../components/homeTable/HomeTable";
import { SportState } from "../../SportContext";

const HomeMain = () => {
  const { sportId, setSportId } = SportState();
  // dddcd6
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.homeMainNav}>
        {[
          { name: "Cricket", id: "4" },
          { name: "Soccer", id: "1" },
          { name: "Tennis", id: "2" },
        ].map((game, index) => {
          return (
            <span
              className={styles.homeMainItem}
              key={index}
              onClick={() => setSportId(game.id)}
              style={{
                backgroundColor: sportId === game.id ? "#dddcd6" : "#2a3a43",
                color: sportId === game.id ? "black" : "white",
              }}
            >
              {game.name}
            </span>
          );
        })}
      </div>
      <HomeTable />
    </div>
  );
};

export default HomeMain;
