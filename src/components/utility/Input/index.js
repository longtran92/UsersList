import React from "react";
import "./style.scss";
import Button from "../Button";

const Input = (props) => {
  const { label, type, errorMsg, placeholder, value, isShownBtn, onChange } =
    props;
  return (
    <div className="input-wrapper">
      {label ? <span className="label">{label}</span> : null}
      <div className="input-form">
        <input
          className={`input ${errorMsg ? "error" : ""}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isShownBtn ? <Button /> : null}
      </div>
      {errorMsg ? <span className="error-message">{errorMsg}</span> : null}
    </div>
  );
};

export default Input;
