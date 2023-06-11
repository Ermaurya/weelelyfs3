import React from "react";

function FilterUsers({ setUsers, state }) {
  return (
    <div className="main_filter">   
    
      <div>
        <input
          type="radio"
          name="gender"
          value="all"
          defaultChecked
          onChange={() => {
            setUsers(state);
          }}
        />
        ALL
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={() => {
            setUsers(state.filter((data) => data.gender === "male"));
          }}
        />
        MALE
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={() => {
            setUsers(state.filter((data) => data.gender === "female"));
          }}
        />
        FEMALE
      </div>
    </div>
  );
}

export default FilterUsers;
