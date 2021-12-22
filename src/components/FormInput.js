import React, { useState } from "react";

const FormInput = ({ label, name, placeholder, validCard, OnChange }) => {
  const [isValid, setIsValid] = useState(true);
  const onBlur = (name) => {
    if (validCard !== undefined) {
      setIsValid(validCard(name));
    }
  };

  return (
    <div>
      <label style={styles.input}>
        {label}
        {!isValid && <span style={{ color: "red" }}>Invalid</span>}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={(e) => OnChange(e.target.value)}
          onBlur={() => onBlur(name)}
          
        />
      </label>
    </div>
  );
};

const styles = {
  input: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  },
};

export default FormInput;
