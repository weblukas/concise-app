import React, { useState } from "react";

const FormInput = ({ label, name, placeholder, validCard, OnChange }) => {
  const [isValid, setIsValid] = useState(true);
  const onBlur = () => {
    if (validCard !== undefined) {
      setIsValid(validCard());
    }
  };

  return (
    <div>
      <label style={styles.input}>
        {label}
        {!isValid && <span>Invalid</span>}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={(e) => OnChange(e.target.value)}
          onBlur={onBlur}
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
