import React, { createContext, useContext, useEffect, useState } from "react";
const host = "http://139.59.13.27:8085";

const Sport = createContext();

const SportContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [changeCount, setChangeCount] = useState(1);
  const [loginConfirmPopupOpen, setLoginConfirmPopupOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("authabcdUser") ? true : false
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [sportId, setSportId] = useState("4");
  const [marketId, setMarketId] = useState("0");
  const [marketData, setMarketData] = useState({
    games1: [],
    games2: [],
    fancy: [],
    sports: [],
  });
  const login = () => {
    if (username === "demo" && password === "demo1234") {
      localStorage.setItem("username", username);
      setUsername("");
      setPassword("");
      return true;
    } else {
      return false;
    }
  };

  // fetch sport specific highlights
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    getHighlights();
    return () => {
      setHighlights([]);
    };
  }, [sportId]);

  const getHighlights = async () => {
    let json = [];
    setLoading(true);
    if (sportId === "1") {
      const response = await fetch(`${host}/highlightsSoccer`, {
        method: "GET",
      });
      json = await response.json();
      json = json.data;
    } else if (sportId === "2") {
      const response = await fetch(`${host}/highlightsTennis`, {
        method: "GET",
      });
      json = await response.json();
      json = json.data;
    } else if (sportId === "4") {
      const response = await fetch(`${host}/highlightsCricket`, {
        method: "GET",
      });
      json = await response.json();
      json = json.data;
    } else if (sportId === "7522") {
      const response = await fetch(`${host}/highlightsBasketball`, {
        method: "GET",
      });
      json = await response.json();
      json = json.data;
    }

    setLoading(false);
    setHighlights(json);
  };

  // fetch market data of a single game

  useEffect(() => {
    getMarketData();
  }, [marketId, marketData]);

  const getMarketData = async () => {

    let myInterval;



    if (marketId === "0" || sportId === "0") {
      return;
    }
    const response = await fetch(
      `${host}/marketData?marketID=${marketId}&gameType=${sportId}`,
      {
        method: "GET",
      }
    );

    const json = await response.json();

    if (myInterval) {
      clearInterval(myInterval);
    }

    setLoading(false);

    myInterval = setInterval(() => {
      setMarketData(json.data);
    }, 600);



    setMarketData(json.data);

    getMarketData();
  };

  // bet history part
  const [betHistories, setBetHistories] = useState(
    localStorage.getItem("betHistories") ?? []
  );

  const placeBet = (amount) => {
    if (isLoggedIn) {
      setBetHistories([
        ...betHistories,
        {
          date: new Date().toLocaleDateString("sv"),
          time: new Date().toLocaleTimeString("sv"),
          amount,
          winner: "Pending",
        },
      ]);
    } else {
      setLoginConfirmPopupOpen(true);
    }
  };

  return (
    <Sport.Provider
      value={{
        loading,
        setLoading,
        alert,
        setAlert,
        changeCount,
        setChangeCount,
        isLoggedIn,
        setIsLoggedIn,
        username,
        setUsername,
        password,
        setPassword,
        loginConfirmPopupOpen,
        setLoginConfirmPopupOpen,
        loginPopupOpen,
        setLoginPopupOpen,
        sportId,
        setSportId,
        marketId,
        setMarketId,
        highlights,
        setLoading,
        marketData,
        setMarketData,
        login,
        placeBet,
        betHistories,
      }}
    >
      {children}
    </Sport.Provider>
  );
};

export default SportContext;

export const SportState = () => {
  return useContext(Sport);
};
