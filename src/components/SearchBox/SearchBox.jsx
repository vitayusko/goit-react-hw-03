import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  return (
    <div className={s.searchBox}>
      <p>Find contacts by name</p>
      <input
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search contacts..."
        name="contactName"
        type="text"
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
