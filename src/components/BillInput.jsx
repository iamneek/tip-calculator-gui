import React, { useState } from "react";

const BillInput = ({ setBill, Bill }) => {
  return (
    <div>
      <label htmlFor="billInput" className="label">
        How Much Was The Bill?
      </label>
      <br />
      <input
        id="billInput"
        className="w-[26rem] h-12 rounded-md p-4 mt-4 outline-none mb-10"
        type="number"
        placeholder="Enter amount"
        onChange={(e) => {
          setBill(e.target.value);
        }}
        value={Bill}
      />
    </div>
  );
};

export default BillInput;
