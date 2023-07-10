import React from "react";

const Reset = ({ setBillInput, setUserRate, setFriendRate }) => {
  const handleReset = () => {
    setBillInput("");
    setUserRate(0);
    setFriendRate(0);
  };
  return (
    <button className="resetBtn mt-10" onClick={handleReset}>
      Reset
    </button>
  );
};

export default Reset;
