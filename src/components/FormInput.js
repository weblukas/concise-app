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
