import React, { useState } from "react";
import "./App.css";
import BillInput from "./components/BillInput";
import Total from "./components/Total";
import ServiceUser from "./components/ServiceUser";
import ServiceFriend from "./components/ServiceFriend";
import Reset from "./components/Reset";
const App = () => {
  const [billInput, setBillInput] = useState("");
  const [userRate, setUserRate] = useState(0);
  const [friendRate, setFriendRate] = useState(0);
  return (
    <div className="App flex items-center justify-center">
      <div className="cont flex-col w-[35em] h-[40em] bg-[#2E2E2E] flex items-center justify-between">
        <p className="text-[#f1f1f1] title mt-52 text-center">
          TIP <br />
          CALCULATOR
        </p>
        <Total bill={billInput} userR={userRate} friendR={friendRate} />
      </div>
      <div className="containerr w-[35em] h-[40em] bg-[#fff] flex items-center justify-center flex-col">
        <BillInput setBill={setBillInput} Bill={billInput} />
        <ServiceUser setUserR={setUserRate} UserR={userRate} />
        <ServiceFriend setFriendR={setFriendRate} FriendR={friendRate} />
        <Reset
          setBillInput={setBillInput}
          setUserRate={setUserRate}
          setFriendRate={setFriendRate}
        />
      </div>
    </div>
  );
};

export default App;
