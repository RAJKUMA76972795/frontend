import bannerImage1 from "../assets/bannerImage1.jpeg";
import bannerImage2 from "../assets/bannerImage2.jpg";
import { BsPinFill, BsWatch, BsFillTrophyFill } from "react-icons/bs";
import HomeLogo from "../assets/bottomIcons/home.svg";
import PinLogo from "../assets/bottomIcons/paper-push-pin.svg";
import TimerLogo from "../assets/bottomIcons/timer.svg";
import TrophyLogo from "../assets/bottomIcons/trophy.svg";
import UserLogo from "../assets/bottomIcons/user.svg";
import cricket from "../assets/bottomIcons/cricket.svg";
import tennis from "../assets/bottomIcons/tennis.svg";
import soccer from "../assets/bottomIcons/soccer.svg";
import basketball from "../assets/bottomIcons/basketball.jpg";
import casino from "../assets/bottomIcons/cassino.svg";
import virtual from "../assets/bottomIcons/virtual.jpg";
import horse from "../assets/bottomIcons/horse.svg";
import cricketBall from "../assets/bottomIcons/cricket-ball.svg";
import soccerBall from "../assets/bottomIcons/soccer-ball.svg";
import tennisBall from "../assets/bottomIcons/tennis-ball.svg";

import virtualSports from "../assets/bottomIcons/simulation.svg";
import basketballSports from "../assets/bottomIcons/basketball.svg";

export const leftData = [
  {
    heading: "Test Matches",
    subHeading: ["England v Australia", "Australia v India"],
  },
  {
    heading: "Abu Dhabi T10",
    subHeading: ["Delhi Bulls v The Chennai Braves"],
  },
];
export const leftDataExpanded = {
  "Test Matches": false,
  "Abu Dhabi T10": false,
};

export const subHeaderItems = [
  { title: "Home", url: "/", width: "60px", icon: null, id: "0" },
  { title: "In-Play", url: "/in-play", width: "90px", icon: null, id: "0" },
  {
    title: "Multi Markets",
    url: "/multi-markets",
    width: "130px",
    icon: null,
    id: "0",
  },
  { title: "Cricket", url: "/crickets", width: "70px", icon: null, id: "4" },
  { title: "Tennis", url: "/tennis", width: "70px", icon: null, id: "2" },
  { title: "Casino", url: "/casino", width: "70px", icon: null, id: "6" },
  { title: "Soccer", url: "/soccer", width: "70px", icon: null, id: "1" },
  {
    title: "Horse Racing",
    url: "/horse-racing",
    width: "120px",
    icon: null,
    id: "5",
  },
  {
    title: "Virtual Sports",
    url: "/virtual-sports",
    width: "90px",
    icon: virtualSports,
    id: "7",
  },
  {
    title: "Basketball",
    url: "/basketball",
    width: "90px",
    icon: basketballSports,
    id: "7522",
  },
];

export const imageList = [bannerImage2, bannerImage2];

export const mobileBottomBarMenu = [
  { title: "Home", icon: HomeLogo, url: "/" },
  { title: "In-play", icon: TimerLogo, url: "/in-play" },
  { title: "Sports", icon: TrophyLogo, url: "/sports" },
  { title: "Multi M..", icon: PinLogo, url: "/multi-markets" },
  { title: "Account", icon: UserLogo, url: "/account" },
];

export const sportsTopMenu = [
  { title: "In-play", icon: TimerLogo, url: "/in-play", id: "0" },
  { title: "Multi Markets", icon: PinLogo, url: "/multi-markets", id: "" },
  { title: "Cricket", icon: cricketBall, url: "/", id: "4" },
  { title: "Soccer", icon: soccerBall, url: "/soccer", id: "1" },
  { title: "Tennis", icon: tennisBall, url: "/tennis", id: "2" },
];

export const subHeaderBottomItems = [
  { title: "Cricket", url: "/", width: "80px", icon: cricket, id: "4" },
  { title: "Tennis", url: "/tennis", width: "80px", icon: tennis, id: "2" },
  { title: "Casino", url: "/casino", width: "80px", icon: casino, id: "6" },
  { title: "Soccer", url: "/soccer", width: "80px", icon: soccer, id: "1" },
  {
    title: "Horse Racing",
    url: "/horse-racing",
    width: "130px",
    icon: horse,
    id: "5",
  },
  {
    title: "Virtual Sports",
    url: "/virtual-sports",
    width: "140px",
    icon: virtualSports,
  },
  {
    title: "Basketball",
    url: "/basketball",
    width: "100px",
    icon: basketballSports,
    id: "7522",
  },
];

export const footerItems = [
  { title: "Privacy Policy" },
  { title: "Rules and Regulations" },
  { title: "KYC" },
  { title: "Terms and Conditions" },
  { title: "Responsible Gambling" },
];

export const accounts = [
  { title:"My Profile" , url:"/my-profile"},
  { title:"Rolling Commission" , url:"/rolling-commission"},
  { title:"Account Statement" , url:"/account-statement"},
  { title:"Bets History" , url:"/bets-history"},
  { title:"Profit & Loss" , url:"/profit-loss"},
  { title:"Password History" , url:"/password-history"},
  { title:"Activity Log" , url:"/activity-log"},
]

export const inplayData = {
  inPlay: [
    {
      gameName: "Tennis ",
      matches: [
        {
          name: "Pe Stearns v Stephens",
          "1_values": [
            {
              back: "3.4",
              lay: "3.75",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "1.36",
              lay: "1.42",
            },
          ],
        },
        {
          name: "Burel v Pera",
          "1_values": [
            {
              back: "1.31",
              lay: "1.33",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "4",
              lay: "4.2",
            },
          ],
        },
        {
          name: "A Zverev v Y Wu",
          "1_values": [
            {
              back: "1.07",
              lay: "1.08",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "13.5",
              lay: "15.5",
            },
          ],
        },
      ],
    },
    {
      gameName: "Cricket ",
      matches: [
        {
          name: "Thunder v The Blaze",
          "1_values": [
            {
              back: "4.4",
              lay: "6",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "1.2",
              lay: "1.29",
            },
          ],
        },
      ],
    },
    {
      gameName: "Horse Racing ",
      matches: [
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Wolverhampton ",
          "1_values": [
            {
              back: "2.02",
              lay: "3.2",
            },
          ],
          x_values: [
            {
              back: "12",
              lay: "1000",
            },
          ],
          "2_values": [
            {
              back: "7.2",
              lay: "1000",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "1.68",
              lay: "980",
            },
          ],
          x_values: [
            {
              back: "1.93",
              lay: "990",
            },
          ],
          "2_values": [
            {
              back: "1.45",
              lay: "990",
            },
          ],
        },
      ],
    },
  ],
  inPlayToday: [
    {
      gameName: "Soccer ",
      matches: [
        {
          name: "Mallorca v Valencia",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Lugano v Young Boys",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Grasshoppers Zurich v St Gallen",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Cosenza v Brescia",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Winterthur v FC Zurich",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Servette v FC Basel",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Man Utd v Chelsea",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Osasuna v Athletic Bilbao",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Patronato v Olimpia",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "The Strongest v Fluminense",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
      ],
    },
    {
      gameName: "Tennis ",
      matches: [
        {
          name: "Pe Stearns v Stephens",
          "1_values": [
            {
              back: "3.4",
              lay: "3.75",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "1.36",
              lay: "1.42",
            },
          ],
        },
        {
          name: "Burel v Pera",
          "1_values": [
            {
              back: "1.31",
              lay: "1.33",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "4",
              lay: "4.2",
            },
          ],
        },
        {
          name: "A Zverev v Y Wu",
          "1_values": [
            {
              back: "1.07",
              lay: "1.08",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "13.5",
              lay: "15.5",
            },
          ],
        },
        {
          name: "Ruud v Jarry",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
      ],
    },
    {
      gameName: "Cricket ",
      matches: [
        {
          name: "Thunder v The Blaze",
          "1_values": [
            {
              back: "4.4",
              lay: "6",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "1.2",
              lay: "1.29",
            },
          ],
        },
        {
          name: "Middlesex v Surrey",
          "1_values": [
            {
              back: "3.3",
              lay: "3.4",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "1.42",
              lay: "1.44",
            },
          ],
        },
      ],
    },
    {
      gameName: "Horse Racing ",
      matches: [
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Wolverhampton ",
          "1_values": [
            {
              back: "2.02",
              lay: "3.2",
            },
          ],
          x_values: [
            {
              back: "12",
              lay: "1000",
            },
          ],
          "2_values": [
            {
              back: "7.2",
              lay: "1000",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "1.68",
              lay: "980",
            },
          ],
          x_values: [
            {
              back: "1.93",
              lay: "990",
            },
          ],
          "2_values": [
            {
              back: "1.45",
              lay: "990",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "12",
              lay: "36",
            },
          ],
          x_values: [
            {
              back: "6.6",
              lay: "10",
            },
          ],
          "2_values": [
            {
              back: "2.5",
              lay: "2.7",
            },
          ],
        },
        {
          name: "Limerick",
          "1_values": [
            {
              back: "6.8",
              lay: "7.4",
            },
          ],
          x_values: [
            {
              back: "11",
              lay: "13.5",
            },
          ],
          "2_values": [
            {
              back: "6.4",
              lay: "7",
            },
          ],
        },
        {
          name: "ParisLongchamp ",
          "1_values": [
            {
              back: "28",
              lay: "1000",
            },
          ],
          x_values: [
            {
              back: "5.8",
              lay: "8.8",
            },
          ],
          "2_values": [
            {
              back: "5",
              lay: "9.6",
            },
          ],
        },
        {
          name: "Haydock",
          "1_values": [
            {
              back: "4.8",
              lay: "5",
            },
          ],
          x_values: [
            {
              back: "5.4",
              lay: "5.6",
            },
          ],
          "2_values": [
            {
              back: "5.5",
              lay: "5.8",
            },
          ],
        },
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Limerick",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "ParisLongchamp ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Sandown",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Limerick",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "ParisLongchamp ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Sandown",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Limerick",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "ParisLongchamp ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Sandown",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Limerick",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "ParisLongchamp ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Sandown",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Limerick",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "ParisLongchamp ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Sandown",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Limerick",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Sandown",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Chelmsford City ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Delaware Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Pimlico",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gulfstream Park",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Woodbine ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Woodbine ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Woodbine ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Woodbine ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hawthorne ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Woodbine ",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
      ],
    },
  ],
  inPlayTomorrow: [
    {
      gameName: "Soccer ",
      matches: [
        {
          name: "Sporting Cristal v River Plate",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Metropolitanos v Internacional",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0",
              lay: "0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
      ],
    },
    {
      gameName: "Cricket ",
      matches: [
        {
          name: "The Blaze v Central Sparks",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "South East Stars v Northern Diamonds",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gujarat Titans v Mumbai Indians",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Southern Vipers v Western Storm",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Worcestershire v Yorkshire",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Nottinghamshire v Derbyshire",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Gloucestershire v Glamorgan",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Northamptonshire v Durham",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Surrey v Kent",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Leicestershire v Birmingham Bears",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Sussex v Somerset",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
        {
          name: "Hampshire v Middlesex",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
      ],
    },
    {
      gameName: "Basketball ",
      matches: [
        {
          name: "Miami Heat @ Boston Celtics",
          "1_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
          x_values: [
            {
              back: "0.0",
              lay: "0.0",
            },
          ],
          "2_values": [
            {
              back: "0",
              lay: "0",
            },
          ],
        },
      ],
    },
  ],
};
