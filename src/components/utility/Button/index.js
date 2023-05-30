import React from "react";
import "./style.scss";

const Button = (props) => {
  const { type, text, onClick } = props;
  return (
    <button onClick={onClick} class={`btn ${type}`}>
      {text}
    </button>
  );
};

export default Button;
