// src/components/SearchBox/SearchBox.jsx
import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <label className={styles.label} htmlFor="filter">
      Find contacts by name
    </label>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchBox;
