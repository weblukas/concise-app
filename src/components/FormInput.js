import React, { useState } from "react";

const FormInput = ({ label, name, placeholder, valid, OnChange }) => {
  const [isValid, setIsValid] = useState(true);
  const onBlur = () => {
    if (valid !== undefined) {
      setIsValid(valid());
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
