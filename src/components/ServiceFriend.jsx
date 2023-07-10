import React from "react";

const ServiceFriend = ({ setFriendR, FriendR }) => {
  return (
    <div>
      <label htmlFor="userRate" className="label">
        How Did Your Friend Like The Service?
      </label>
      <br />
      <select
        id="friendRate"
        className="w-[26rem] h-12 rounded-md mt-4 outline-none mb-10 pl-3"
        onChange={(e) => {
          setFriendR(e.target.value);
        }}
        value={FriendR}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It Was Okay (5%)</option>
        <option value="10">It Was Good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
};

export default ServiceFriend;
