import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Left from "./components/left/Left";
import Main from "./components/main/Main";
import MobileBottomBar from "./components/mobileBottomBar/MobileBottomBar";
import Right from "./components/right/Right";
import SubHeader from "./components/subheader/SubHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cricket from "./pages/cricket/Cricket";
import InsideTable from "./components/homeTable/InsideTable";
import Account from "./pages/account/Account";
import BasketBall from "./pages/basketBall/BasketBall";
import Casino from "./pages/casino/Casino";
import HorseRacing from "./pages/horseRacing/HorseRacing";
import InPlay from "./pages/inplay/InPlay";
import MultiMarkets from "./pages/multiMarkets/MultiMarkets";
import Soccer from "./pages/soccer/Soccer";
import Tennis from "./pages/tennis/Tennis";
import VirtualSports from "./pages/virtualSports/VirtualSports";
import Sports from "./pages/sports/Sports";
import MyProfile from "./pages/myProfile/MyProfile";
import RollingCommission from "./pages/rollingCommission/RollingCommission";
import AccountStatement from "./pages/accountStatement/AccountStatement";
import BetsHistory from "./pages/betsHistory/BetsHistory";
import ProfitLoss from "./pages/profitLoss/ProfitLoss";
import PasswordHistory from "./pages/passwordHistory/PasswordHistory";
import ActivityLog from "./pages/activityLog/ActivityLog";

function App() {
  const [change, setChange] = useState(0);
  return (
    <BrowserRouter>
      <div
        style={{
          touchAction: "none",
          zoom: "reset", // This is for some specific browsers
        }}
        className="App"
      >
        <Header />
        <SubHeader />
        <div className="appMain">
          <Left />

          {/* <FaThList className='navIcon' onClick={toggleSideBar} /> */}
          <Routes>
            <Route path="/" element={<Main />} />

            <Route
              path="/crickets"
              element={<Cricket limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/crickets/1"
              element={<InsideTable limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/account"
              element={<Account limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/basketball"
              element={<BasketBall limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/casino"
              element={<Casino limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/horse-racing"
              element={<HorseRacing limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/in-play"
              element={<InPlay limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/multi-markets"
              element={<MultiMarkets limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/soccer"
              element={<Soccer limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/tennis"
              element={<Tennis limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/virtual-sports"
              element={<VirtualSports limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/sports"
              element={<Sports limitAPI={{ change, setChange }} />}
            />
           
            <Route
              path="/my-profile"
              element={<MyProfile limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/rolling-commission"
              element={<RollingCommission limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/account-statement"
              element={<AccountStatement limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/bets-history"
              element={<BetsHistory limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/profit-loss"
              element={<ProfitLoss limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/password-history"
              element={<PasswordHistory limitAPI={{ change, setChange }} />}
            />
            <Route
              path="/activity-log"
              element={<ActivityLog limitAPI={{ change, setChange }} />}
            />
          </Routes>

          <Right />
        </div>
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
