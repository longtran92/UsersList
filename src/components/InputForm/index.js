import React from "react";
import "./style.scss";

import Button from "../utility/Button";
import Input from "../utility/Input";

const InputForm = (props) => {
  const { onClick, onEmailChange, onUserNameChange, onAgeChange } = props;
  return (
    <div className="container">
      <div className="email-input">
        <Input onChange={onEmailChange} type="text" label="Email" />
      </div>
      <div className="userName-input">
        <Input onChange={onUserNameChange} type="text" label="Username" />
      </div>
      <div className="ageInput-container">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Show Age
          </label>
        </div>
        <div className="age-input">
          <Input onChange={onAgeChange} type="number" label="Age" />
        </div>
      </div>

      <Button onClick={onClick} text="Add" />
    </div>
  );
};

export default InputForm;
