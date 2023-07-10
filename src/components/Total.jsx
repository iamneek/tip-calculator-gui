import React from "react";

const Total = ({ bill, userR, friendR }) => {
  const user = Number(userR);
  const friend = Number(friendR);
  const tip = ((user + friend) / 2 / 100) * bill;

  return (
    <div className="Total w-[30rem] h-24 flex items-center justify-center rounded-lg mb-16">
      You Pay
      <span className="ml-2">
        ${Number(bill) + tip || 0} (${bill || 0} + ${tip.toFixed(2)} Tip)
      </span>
    </div>
  );
};

export default Total;
