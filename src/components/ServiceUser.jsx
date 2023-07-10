import React from "react";

const ServiceUser = ({ setUserR, UserR }) => {
  return (
    <div>
      <label htmlFor="userRate" className="label">
        How Did You Like The Service?
      </label>
      <br />
      <select
        id="userRate"
        className="w-[26rem] h-12 rounded-md mt-4 outline-none mb-10 pl-3"
        onChange={(e) => {
          setUserR(e.target.value);
        }}
        value={UserR}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It Was Okay (5%)</option>
        <option value="10">It Was Good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
};

export default ServiceUser;
